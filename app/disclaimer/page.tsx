import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — Rebel DeFi",
  description: "Legal disclaimer for Rebel DeFi, Inc.",
};

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-black text-white mb-8">Disclaimer</h1>
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 prose prose-invert max-w-none">
        <p className="text-zinc-300 leading-relaxed mb-4">
          <strong>DISCLAIMER</strong>
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          This website disclaimer (&ldquo;Disclaimer&rdquo;) is written for all
          users of Rebel DeFi, Inc, including any additional websites and mobile
          applications now in use or hereinafter developed (collectively
          &ldquo;Rebel DeFi, Inc&rdquo;).
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Through your use of Rebel DeFi, Inc, you acknowledge and agree that
          information provided by the Company is simply that, information, and
          should not be considered a substitute for legal advice, tax advice,
          audit advice, accounting advice, or brokerage advice under the
          guidance of a licensed professional. Further, the information provided
          herein should not be taken as financial planning or investment
          solicitation. No fiduciary relationship has been created between you
          and the Company.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          You hereby understand and acknowledge that through your use of Rebel
          DeFi, Inc, you are not being represented by an attorney, certified
          financial planner, broker, or other regulated advisor.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          You agree that your use of Rebel DeFi, Inc and Services is at your
          sole and exclusive risk and that any Services provided by the Company
          are on an &ldquo;as is&rdquo; basis. The Company hereby expressly
          disclaims any and all express or implied warranties of any kind,
          including, but not limited to the implied warranty of fitness for a
          particular purpose and the implied warranty of merchantability.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Rebel DeFi, Inc is strictly a financial research publishing firm (a
          publisher) and does not provide individual investment advice to its
          subscribers. Rebel DeFi, Inc is not an investment advisor or a
          registered securities broker/dealer.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Trading in securities (including, without limitation, stocks, options,
          ETFs, mutual funds, cryptocurrencies and bonds) is considered
          speculative and involves risk of loss and volatility. Although the
          Services make every effort to protect your principal, you can lose
          money.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          The maximum liability of the Company arising from or relating to your
          use of Rebel DeFi, Inc or Services is limited to the greater of one
          hundred ($100) US Dollars or the amount you paid to the Company in the
          last three (3) months.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          Past performance does not guarantee future results. Any projected
          returns shown through Rebel DeFi, Inc&apos;s Services may not be
          indicative of real-world results and your investment returns or
          financial gains are not guaranteed in any way.
        </p>
      </div>
    </div>
  );
}
