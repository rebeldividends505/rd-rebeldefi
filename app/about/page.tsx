import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Rebel DeFi",
  description:
    "Rebel DeFi, Inc. specializes in cryptocurrency investments, pioneering DeFi on Bitcoin with 40+ years of combined experience.",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          About Rebel DeFi
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl">
          Rebel DeFi, Inc. specializes in cryptocurrency investments, pioneering
          the field of decentralized finance (DeFi) on Bitcoin.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8">
        <p className="text-zinc-300 leading-relaxed mb-4">
          With a team boasting over 40 years of combined experience in
          traditional investing and cryptocurrencies, we&apos;re committed to
          maximizing gains and delivering consistent dividends to our shareholder
          base.
        </p>
        <p className="text-zinc-300 leading-relaxed mb-4">
          Our approach to putting capital to work in DeFi on Bitcoin is both
          strategic and forward-thinking. By leveraging our extensive experience
          and deep understanding of the market, we identify high-potential
          projects and protocols within the Bitcoin DeFi space. Through
          meticulous research and analysis, we select investments that align with
          our rigorous criteria for risk management and profitability.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Rebel DeFi is not just about individual gains — it&apos;s about
          securing your legacy for generations to come. Our tailored asset
          transfer solutions ensure that your investments seamlessly transition
          to your beneficiaries, providing peace of mind and continuity for your
          wealth management strategy.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: "🎯",
            title: "Our Strategy",
            desc: "Our approach to putting capital to work in DeFi on Bitcoin is both strategic and forward-thinking. We identify high-potential projects and deploy capital with precision.",
          },
          {
            icon: "🌐",
            title: "Our Mission",
            desc: "Our tailored asset transfer solutions ensure that your investments seamlessly transition to your beneficiaries, providing peace of mind and continuity for your wealth management strategy.",
          },
          {
            icon: "🔬",
            title: "Our Process",
            desc: "By leveraging our extensive experience and deep understanding of the market, we identify high-potential projects and protocols within the Bitcoin DeFi space.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="font-semibold text-white text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-indigo-950/40 border border-indigo-900/40 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Invest?</h2>
        <p className="text-zinc-400 mb-6">
          Join us and capitalize on the explosive growth potential of
          decentralized finance on Bitcoin.
        </p>
        <Link
          href="https://portal.rebeldividends.com/apply"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition inline-block"
        >
          Apply Now →
        </Link>
      </div>
    </div>
  );
}
