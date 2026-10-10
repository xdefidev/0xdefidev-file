import Link from "next/link";
import SeoHead from "../components/Seo";
import { siteConfig } from "../site.config";

const UPDATED = "Last updated: 9 October 2026";

export default function TermsOfService() {
  return (
    <>
      <SeoHead
        title={`Terms of Service | ${siteConfig.name}`}
        description={`The terms that apply when you buy services or source code from ${siteConfig.name}.`}
        path="/terms-of-service"
        locale="en"
        hreflang={["en"]}
      />

      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <h1 className="text-headline font-bold text-ink">Terms of Service</h1>
        <p className="mt-2 text-sm text-ink-subtle">{UPDATED}</p>

        <div className="prose-terms mt-10 space-y-8 text-[0.975rem] leading-relaxed text-ink-subtle">
          <p>
            These terms apply to purchases made through this website. Custom
            development work is governed by the individual agreement signed for
            that project, which takes precedence over anything here.
          </p>

          <Section title="Orders and pricing">
            <p>
              Prices are shown in USD. Listed figures for development services
              are <strong>starting prices</strong>; the final price is confirmed
              in a written scope before work begins. Source-code products have a
              fixed price.
            </p>
            <p>
              Your order is final once the payment confirms on-chain. If we
              cannot deliver what was paid for, we refund in full.
            </p>
          </Section>

          <Section title="Cryptocurrency payments">
            <p>
              Payments are made to a unique deposit address generated per order.
              Because blockchain transfers are irreversible:
            </p>
            <ul>
              <li>Send only the coin and network shown on the payment page.</li>
              <li>
                Send at or above the network minimum. Transfers below the minimum
                are discarded by the network and cannot be recovered.
              </li>
              <li>
                You are responsible for the network fee. If your amount arrives
                short of the total, contact us so we can top up the balance.
              </li>
            </ul>
            <p>
              Prices are converted at the rate shown when your payment address
              is generated. We are not responsible for exchange rate movement
              after that point.
            </p>
          </Section>

          <Section title="Refunds">
            <p>
              Source-code products are delivered as-is. Because we cannot take
              back delivered source, these purchases are non-refundable once
              delivery has been made, except where the product is materially
              broken or not as described, in which case we will fix it or
              refund.
            </p>
            <p>
              Service deposits are refundable if you cancel before work starts.
              Work already completed is non-refundable.
            </p>
          </Section>

          <Section title="Licence: source-code products">
            <p>
              Buying a product grants you a perpetual, worldwide,
              non-exclusive licence to run and modify it for one commercial
              project you own. You may not resell, redistribute, sublicense or
              publish the source code itself, nor offer competing products built
              from it.
            </p>
          </Section>

          <Section title="Intellectual property">
            <p>
              Our name, logo, site content and original written material remain
              ours. Client projects remain yours; we may reference them in a
              portfolio unless you ask us not to.
            </p>
          </Section>

          <Section title="Regulated activities">
            <p>
              We build software. We do not operate gambling, betting, trading or
              financial services, we do not hold client funds, and we do not
              give investment, legal or tax advice. Ensuring your use of the
              software complies with the law in your jurisdiction is your
              responsibility.
            </p>
          </Section>

          <Section title="Liability">
            <p>
              We provide software and development services "as is". To the
              fullest extent permitted by law we are not liable for indirect or
              consequential loss, lost profits, or loss of crypto assets. Our
              aggregate liability is limited to the amount you paid us for the
              specific order.
            </p>
            <p>Nothing here limits liability that cannot lawfully be limited.</p>
          </Section>

          <Section title="Changes">
            <p>
              We may update these terms. The version in effect is the one
              published here on the date of your order.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions go to{" "}
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
            </p>
          </Section>
        </div>

        <Link
          href="/"
          className="mt-12 inline-block text-sm font-semibold text-brand-700 hover:underline"
        >
          Back to home
        </Link>
      </div>

      <style jsx>{`
        :global(.prose-terms h2) {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 0.75rem;
        }
        :global(.prose-terms ul) {
          list-style: disc;
          padding-inline-start: 1.25rem;
          margin-block: 0.75rem;
        }
        :global(.prose-terms li) {
          margin-bottom: 0.5rem;
        }
        :global(.prose-terms a) {
          color: #1d4ed8;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <div className="mt-2 space-y-3">{children}</div>
    </section>
  );
}