import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn More — Rebel DeFi",
  description:
    "Learn how Rebel DeFi, Inc. pioneers DeFi on Bitcoin to deliver consistent weekly dividends backed by strategic crypto investing.",
};

export default function LearnMore() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-indigo-950 border border-indigo-800 rounded-full px-4 py-1.5 text-indigo-300 text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          See if you qualify now
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          Grow Wealth &amp; Weekly Dividends
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
          At Rebel DeFi, Inc., we&apos;re not just another cryptocurrency
          investment firm — we&apos;re pioneers in the dynamic world of
          decentralized finance (DeFi) on Bitcoin.
        </p>
        <Link
          href="https://portal.rebeldividends.com/apply"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition inline-block"
        >
          Apply for Access →
        </Link>
      </div>

      <div className="prose prose-invert max-w-none">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Welcome to Rebel DeFi
          </h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            With over 40 years of combined experience in both traditional
            investing and cutting-edge cryptocurrencies, we leverage our
            expertise to maximize gains and deliver consistent dividends to our
            valued shareholders.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-4">
            In today&apos;s rapidly evolving landscape, decentralized finance
            (DeFi) on Bitcoin has emerged as a groundbreaking trend, offering
            unparalleled opportunities for growth and innovation. At Rebel DeFi,
            we recognize the immense potential of this burgeoning ecosystem and
            are dedicated to harnessing its power to generate substantial returns
            for our shareholders.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Our approach to putting capital to work in DeFi on Bitcoin is both
            strategic and forward-thinking. By leveraging our extensive
            experience and deep understanding of the market, we identify
            high-potential projects and protocols within the Bitcoin DeFi space.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: "Risk-Managed Strategy",
              desc: "To mitigate volatility and liquidation risks, we hedge our investments by shorting medium market cap altcoins using 2–3× leverage. This allows us to profit during sharp market sell-offs and reduce risk to our leveraged long BTC position.",
            },
            {
              title: "Flexible Dividend Options",
              desc: "You have the freedom to choose the bank account where you receive your dividends. Our automatic dividend reinvestment option empowers you to compound your earnings effortlessly, accelerating portfolio growth without lifting a finger.",
            },
            {
              title: "Legacy Planning",
              desc: "Rebel DeFi is not just about individual gains — it's about securing your legacy for generations to come. Our tailored asset transfer solutions ensure your investments seamlessly transition to your beneficiaries.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
            >
              <h3 className="font-semibold text-white text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-indigo-950/40 border border-indigo-900/40 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-zinc-400 mb-6">
            Join Rebel DeFi and capitalize on the explosive growth potential of
            decentralized finance, where innovation knows no bounds.
          </p>
          <Link
            href="https://portal.rebeldividends.com/apply"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition inline-block"
          >
            See If You Qualify →
          </Link>
        </div>
      </div>
    </div>
  );
}
