import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rebel DeFi — Grow Wealth & Weekly Dividends",
  description:
    "Rebel DeFi, Inc. pioneers DeFi on Bitcoin, delivering consistent weekly dividends backed by 40+ years of combined investing experience.",
};

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-950 border border-indigo-800 rounded-full px-4 py-1.5 text-indigo-300 text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Weekly dividends — paid every Friday
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          Grow Wealth &amp;
          <br />
          Weekly Dividends
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
          Rebel DeFi, Inc. pioneers decentralized finance on Bitcoin. With 40+
          years of combined experience in traditional investing and
          cryptocurrencies, we maximize gains and deliver consistent dividends.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://portal.rebeldividends.com/apply"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition"
          >
            See If You Qualify →
          </Link>
          <Link
            href="/learn-more"
            className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium px-8 py-4 rounded-xl text-lg transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Metrics */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {[
          { label: "Experience", value: "40+", sub: "years combined" },
          { label: "Strategy", value: "DeFi", sub: "on Bitcoin" },
          { label: "Payouts", value: "Weekly", sub: "every Friday" },
          { label: "Investing", value: "506(b)", sub: "Reg D offering" },
        ].map((m) => (
          <div
            key={m.label}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center"
          >
            <div className="text-2xl font-bold text-white mb-1">{m.value}</div>
            <div className="text-zinc-400 text-sm font-medium">{m.label}</div>
            <div className="text-zinc-600 text-xs mt-1">{m.sub}</div>
          </div>
        ))}
      </section>

      {/* Feature Grid */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Why Rebel DeFi?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "₿",
              title: "DeFi on Bitcoin",
              desc: "We harness the power of decentralized finance built on Bitcoin — the world's most secure and scarce digital asset — to generate yield for our investors.",
            },
            {
              icon: "💵",
              title: "Weekly Cash Dividends",
              desc: "Receive actual cash distributions every Friday. Dividends can be paid directly to your bank account or automatically reinvested to compound your position.",
            },
            {
              icon: "🛡️",
              title: "Downside Hedge",
              desc: "We mitigate volatility by shorting medium market cap altcoins with 2–3× leverage, protecting capital during sharp market sell-offs.",
            },
            {
              icon: "📈",
              title: "40+ Years Experience",
              desc: "Our team brings over 40 years of combined experience in traditional investing and cutting-edge cryptocurrencies — deployed to maximize your returns.",
            },
            {
              icon: "🔄",
              title: "Auto Reinvestment",
              desc: "Automatic dividend reinvestment compounds your earnings effortlessly, accelerating portfolio growth without lifting a finger.",
            },
            {
              icon: "🏛️",
              title: "Legacy Planning",
              desc: "Tailored asset transfer solutions ensure your investments seamlessly transition to your beneficiaries, securing your legacy for generations.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-20 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
        <p className="text-zinc-400 mb-8 max-w-2xl">
          Our approach to deploying capital in DeFi on Bitcoin is strategic and
          forward-thinking.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              step: "01",
              title: "Capital Deployment",
              desc: "Your capital is deployed into high-potential DeFi protocols within the Bitcoin ecosystem, selected through rigorous research and risk analysis.",
            },
            {
              step: "02",
              title: "Risk Management",
              desc: "We hedge against volatility by shorting medium market cap altcoins, allowing us to profit during market sell-offs while protecting your principal.",
            },
            {
              step: "03",
              title: "Weekly Dividends",
              desc: "Weekly dividends are paid from current returns, or via collateralized debt positions — giving you consistent income regardless of market conditions.",
            },
            {
              step: "04",
              title: "Choose Your Path",
              desc: "Direct dividends to your bank account or reinvest automatically. You control how your income flows.",
            },
          ].map((s) => (
            <div key={s.step} className="flex gap-4">
              <div className="text-indigo-500 font-black text-2xl w-10 shrink-0">
                {s.step}
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-gradient-to-b from-indigo-950/30 to-transparent rounded-2xl mb-10 border border-indigo-900/30">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to earn weekly dividends?
        </h2>
        <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
          Join investors building passive income through DeFi on Bitcoin. See if
          you qualify today.
        </p>
        <Link
          href="https://portal.rebeldividends.com/apply"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-10 py-4 rounded-xl text-lg transition inline-block"
        >
          See If You Qualify →
        </Link>
        <p className="mt-4 text-sm text-zinc-500">
          Questions?{" "}
          <Link
            href="/contact"
            className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition"
          >
            Contact us
          </Link>{" "}
          ·{" "}
          <Link
            href="/learn-more"
            className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition"
          >
            Learn more
          </Link>
        </p>
      </section>
    </div>
  );
}
