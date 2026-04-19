import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — Rebel DeFi",
  description:
    "Contact Rebel DeFi, Inc. with questions about our DeFi investment strategies and weekly dividend program.",
};

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-zinc-400 text-lg">
          Interested in learning more about Rebel DeFi and how we can help you
          achieve your investment goals? Reach out using the information below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">Contact Info</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-indigo-400 mt-0.5">📧</span>
              <div>
                <div className="text-zinc-400 text-sm">Email</div>
                <a
                  href="mailto:support@rebeldefi.com"
                  className="text-white hover:text-indigo-400 transition"
                >
                  support@rebeldefi.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-400 mt-0.5">📞</span>
              <div>
                <div className="text-zinc-400 text-sm">Phone</div>
                <a
                  href="tel:5053227515"
                  className="text-white hover:text-indigo-400 transition"
                >
                  505-322-7515
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-400 mt-0.5">📍</span>
              <div>
                <div className="text-zinc-400 text-sm">Address</div>
                <address className="text-white not-italic text-sm">
                  500 Marquette Ave., Suite 1200
                  <br />
                  Albuquerque, NM 87102
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">Apply Now</h2>
          <p className="text-zinc-400 text-sm mb-6">
            Whether you have questions about our investment strategies, dividend
            payouts, or anything else — our team is here to assist you every
            step of the way.
          </p>
          <Link
            href="https://portal.rebeldividends.com/apply"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl transition inline-block w-full text-center"
          >
            Apply for Access →
          </Link>
          <p className="text-zinc-600 text-xs mt-4">
            Thank you for considering Rebel DeFi for your cryptocurrency
            investment needs. We look forward to hearing from you soon!
          </p>
        </div>
      </div>
    </div>
  );
}
