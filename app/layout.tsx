import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Rebel DeFi — DeFi on Bitcoin, Weekly Dividends",
    template: "%s — Rebel DeFi",
  },
  description:
    "Rebel DeFi, Inc. pioneers decentralized finance on Bitcoin with over 40 years of combined investing experience. Earn weekly dividends from DeFi yield.",
  metadataBase: new URL("https://rebeldefi.com"),
  openGraph: {
    type: "website",
    siteName: "Rebel DeFi",
    title: "Rebel DeFi — DeFi on Bitcoin, Weekly Dividends",
    description:
      "Earn weekly dividends through DeFi on Bitcoin. Strategic, forward-thinking crypto investing for serious investors.",
    url: "https://rebeldefi.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebel DeFi — DeFi on Bitcoin, Weekly Dividends",
    description: "Earn weekly dividends through DeFi on Bitcoin.",
  },
  keywords: [
    "rebel defi",
    "defi on bitcoin",
    "weekly dividends",
    "crypto investing",
    "bitcoin defi",
    "passive income",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-zinc-950 text-white">
        {/* Nav */}
        <nav className="border-b border-zinc-800 bg-zinc-950/90 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
            <Link
              href="/"
              className="font-bold text-xl text-white hover:text-indigo-400 transition"
            >
              Rebel DeFi
            </Link>
            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="/learn-more"
                className="text-zinc-400 hover:text-white text-sm transition hidden md:block"
              >
                Learn More
              </Link>
              <Link
                href="/about"
                className="text-zinc-400 hover:text-white text-sm transition hidden md:block"
              >
                About
              </Link>
              <Link
                href="/updates"
                className="text-zinc-400 hover:text-white text-sm transition hidden md:block"
              >
                Updates
              </Link>
              <Link
                href="/daily"
                className="text-zinc-400 hover:text-white text-sm transition hidden md:block"
              >
                Daily
              </Link>
              <Link
                href="https://portal.rebeldividends.com/apply"
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </nav>

        {/* Page content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-zinc-800 mt-20 py-10 text-center text-zinc-500 text-sm">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-4">
            <Link href="/" className="hover:text-zinc-300">
              Home
            </Link>
            <Link href="/learn-more" className="hover:text-zinc-300">
              Learn More
            </Link>
            <Link href="/about" className="hover:text-zinc-300">
              About
            </Link>
            <Link href="/updates" className="hover:text-zinc-300">
              Updates
            </Link>
            <Link href="/daily" className="hover:text-zinc-300">
              Daily
            </Link>
            <Link href="/contact" className="hover:text-zinc-300">
              Contact
            </Link>
            <Link href="/disclaimer" className="hover:text-zinc-300">
              Disclaimer
            </Link>
            <Link href="/privacy-policy" className="hover:text-zinc-300">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-zinc-300">
              Terms
            </Link>
          </div>
          <p>© {new Date().getFullYear()} Rebel DeFi, Inc. All rights reserved.</p>
          <p className="mt-2 text-xs max-w-xl mx-auto">
            This is not investment advice. Past performance does not guarantee
            future results. All investments carry risk. No general solicitation.
            Accredited and sophisticated investors only.
          </p>
        </footer>
      </body>
    </html>
  );
}
