-- Order storage for crypto checkout (CryptAPI).
-- Run this once in the Supabase SQL editor, then create an API key pair.

create table if not exists public.orders (
  id                 text primary key,
  email              text not null,
  status             text not null default 'created'
                       check (status in ('created','pending','confirmed','expired','failed')),
  amount_usd         numeric(12,2) not null,
  coin               text not null,
  crypto_amount      numeric(36,18),
  address_in         text,
  nonce              text not null,
  confirmations      integer not null default 0,
  txid_in            text,
  items              jsonb not null default '[]'::jsonb,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);

-- Idempotency guard for CryptAPI webhook retries.
create table if not exists public.processed_webhooks (
  uuid        text primary key,
  processed_at timestamptz not null default now()
);

create index if not exists orders_email_idx    on public.orders (email);
create index if not exists orders_created_idx  on public.orders (created_at desc);

alter table public.orders             enable row level security;
alter table public.processed_webhooks enable row level security;

-- No anon policies are granted on purpose. Order status is only ever read
-- through the server API route, which uses the service-role key.
-- This keeps customer emails and nonces out of reach of the public anon key.

revoke all on public.orders             from anon, authenticated;
revoke all on public.processed_webhooks from anon, authenticated;