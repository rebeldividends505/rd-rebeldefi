import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thanks For Signing Up — Rebel DeFi",
  description: "Thank you for signing up with Rebel DeFi. Your next step is ID confirmation.",
};

export default function ThanksForSigningUp() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="text-6xl mb-6">✅</div>
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
        Thank You For Signing Up!
      </h1>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8 text-left">
        <h2 className="text-lg font-bold text-white mb-4">Next Step: ID Confirmation</h2>
        <p className="text-zinc-300 leading-relaxed mb-4">
          Call or text Dean at{" "}
          <a
            href="tel:5053227515"
            className="text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            505-322-7515
          </a>{" "}
          to receive the ID confirmation process via text message. Once this
          next step is complete, you&apos;ll be able to buy shares.
        </p>
        <p className="text-zinc-400 text-sm">
          If you have any questions, please write us at{" "}
          <a
            href="mailto:support@rebeldefi.com"
            className="text-indigo-400 hover:text-indigo-300"
          >
            support@rebeldefi.com
          </a>
          .
        </p>
      </div>

      <Link
        href="/"
        className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-xl transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
