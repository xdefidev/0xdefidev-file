/**
 * Supabase access for orders.
 *
 * Two clients are exported deliberately:
 *   - `admin`  uses the service-role key and bypasses RLS. Server-only.
 *   - `public` uses the anon key and is only allowed to read a single order
 *     by id, which RLS in `supabase/schema.sql` enforces.
 *
 * If Supabase is not configured the helpers degrade gracefully so the rest
 * of the site keeps building and rendering; only checkout is unavailable.
 */

/**
 * Env is read lazily inside each function rather than at module scope.
 *
 * `NEXT_PUBLIC_*` values are inlined at build time, so a module-level read
 * freezes them at whatever they were when the bundle was produced. Reading at
 * call time keeps the config check honest and makes the module testable.
 */
const getUrl = () => process.env.NEXT_PUBLIC_SUPABASE_URL;
const getAnonKey = () => process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const getServiceKey = () => process.env.SUPABASE_SERVICE_ROLE_KEY;

export const isSupabaseConfigured = () =>
  Boolean(getUrl() && getAnonKey() && getServiceKey());

function requireSupabase() {
  // Required lazily so a missing dep only breaks checkout, not the build.
  return require("@supabase/supabase-js");
}

function client(key) {
  const url = getUrl();
  if (!url || !key) {
    throw new Error("Supabase env vars are missing. See .env.example.");
  }
  const { createClient } = requireSupabase();
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/** Service-role client. Server-only — never import into a component. */
export function getAdmin() {
  if (!isSupabaseConfigured()) {
    throw new Error("Supabase is not configured. See .env.example.");
  }
  return client(getServiceKey());
}

/** Anon client, safe for read-only order status lookups. */
export function getPublic() {
  return client(getAnonKey());
}

export async function createOrder(order) {
  const { data, error } = await getAdmin()
    .from("orders")
    .insert(order)
    .select()
    .single();

  if (error) throw new Error(`Failed to create order: ${error.message}`);
  return data;
}

export async function updateOrderById(id, patch) {
  const { data, error } = await getAdmin()
    .from("orders")
    .update(patch)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(`Failed to update order: ${error.message}`);
  return data;
}

export async function getOrderById(id) {
  const { data, error } = await getPublic()
    .from("orders")
    .select("id,email,amount_usd,coin,crypto_amount,address_in,status,txid_in,confirmations,created_at,updated_at")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(`Failed to load order: ${error.message}`);
  return data;
}

/**
 * CryptAPI retries webhooks with exponential backoff starting at 6 minutes,
 * so the same uuid can arrive more than once. `processed_webhooks` is keyed on
 * uuid and makes processing idempotent.
 */
export async function claimWebhook(uuid) {
  const { error } = await getAdmin()
    .from("processed_webhooks")
    .insert({ uuid });

  // 23505 = unique violation, i.e. we have already processed this uuid.
  if (error?.code === "23505") return false;
  if (error) throw new Error(`Failed to claim webhook: ${error.message}`);
  return true;
}