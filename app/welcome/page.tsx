import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome to Rebel DeFi",
  description:
    "Welcome to Rebel DeFi, Inc. — pioneers in decentralized finance on Bitcoin delivering consistent weekly dividends.",
};

export default function Welcome() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          Welcome to Rebel DeFi
        </h1>
        <p className="text-xl text-indigo-400 font-medium mb-6">
          Empowering Your Crypto Investments
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8">
        <p className="text-zinc-300 leading-relaxed mb-4">
          At Rebel DeFi, Inc., we&apos;re not just another cryptocurrency
          investment firm — we&apos;re pioneers in the dynamic world of
          decentralized finance (DeFi) on Bitcoin. With over 40 years of
          combined experience in both traditional investing and cutting-edge
          cryptocurrencies, we leverage our expertise to maximize gains and
          deliver consistent dividends to our valued shareholders.
        </p>
        <p className="text-zinc-300 leading-relaxed mb-4">
          In today&apos;s rapidly evolving landscape, decentralized finance
          (DeFi) on Bitcoin has emerged as a groundbreaking trend, offering
          unparalleled opportunities for growth and innovation. At Rebel DeFi,
          we recognize the immense potential of this burgeoning ecosystem and
          are dedicated to harnessing its power to generate substantial returns
          for our investors.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          With a relentless focus on driving value and staying ahead of market
          trends, Rebel DeFi is at the forefront of the DeFi revolution on
          Bitcoin. Join us today and capitalize on the explosive growth potential
          of decentralized finance, where innovation knows no bounds and
          opportunities abound for those bold enough to seize them.
        </p>
      </div>

      <div className="text-center">
        <Link
          href="/learn-more"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition inline-block"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}
