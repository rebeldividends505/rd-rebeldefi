import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sophisticated Investor Questionnaire — Rebel DeFi",
  description:
    "If you're not an accredited investor, please complete the sophisticated investor questionnaire to qualify to invest in Rebel DeFi.",
};

export default function SophisticatedInvestorQuestionnaire() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          Sophisticated Investor Questionnaire
        </h1>
        <p className="text-xl text-zinc-400">
          If you&apos;re not an accredited investor, please complete the following
          questionnaire to qualify to invest in Rebel DeFi.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-2 md:p-4">
        <div id="zf_div_sBnkkeB_8y1O1niVluBqs-tNyImnc8mzikGynvWI-4c">
          <iframe
            src="https://forms.zohopublic.com/portfoliobuilder/form/RebelDeFiSophisticatedQuestionnaire/formperma/sBnkkeB_8y1O1niVluBqs-tNyImnc8mzikGynvWI-4c?zf_rszfm=1"
            style={{ border: "none", height: "5956px", width: "100%", transition: "all 0.5s ease" }}
            aria-label="Rebel DeFi - Sophisticated Investor Questionnaire"
            title="Rebel DeFi - Sophisticated Investor Questionnaire"
          />
        </div>
      </div>
    </div>
  );
}
