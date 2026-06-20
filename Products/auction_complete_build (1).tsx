import { useState } from "react";

const ORANGE = "#E8580A";
const AMBER  = "#F0A500";
const NAVY   = "#0D1B2A";
const DARK   = "#0A0F14";
const STEEL  = "#1B3A5C";

const files = [
  {
    id: "vol1",
    label: "VOL. 1",
    name: "Buyers Manual — Vol 1",
    file: "Auction_Vol1_Buyers_Manual.pdf",
    size: "~32KB",
    color: ORANGE,
    icon: "📘",
    chapters: [
      "Introduction: Why Most People Pay Retail",
      "Ch 1: Private Party vs. Auction Landscape",
      "Ch 2: Auction Platforms Decoded (Manheim, Copart, ADESA, Public)",
      "Ch 3: Title Types — Clean, Salvage, Rebuilt, Flood, Lemon Law",
      "Ch 4: Vehicle History Reports — Reading Like a Pro",
      "Ch 5: The Pre-Purchase Inspection (PPI) System",
      "Ch 6: Bid Strategy & The Max Bid Formula",
      "Appendix: Inspection Checklist & Red Flag Reference",
    ],
  },
  {
    id: "vol2",
    label: "VOL. 2",
    name: "Negotiation & Acquisition — Vol 2",
    file: "Auction_Vol2_Negotiation_Acquisition.pdf",
    size: "~34KB",
    color: AMBER,
    icon: "📙",
    chapters: [
      "Introduction: From Research to Ownership",
      "Ch 1: Private Party Offer Structuring",
      "Ch 2: Counteroffer Handling & Walk-Away Framework",
      "Ch 3: Remote Purchases — Escrow, Shipping & Trust",
      "Ch 4: Title Transfer — State-by-State Protocol",
      "Ch 5: Platform-Specific Closing (Marketplace, Craigslist, Copart)",
      "Ch 6: The Resale Playbook — Flipping for Profit",
      "Appendix: Bill of Sale Template & Documentation Checklist",
    ],
  },
  {
    id: "cheat",
    label: "BONUS",
    name: "Auction Buyer's Cheat Sheet",
    file: "Auction_Bonus_Cheat_Sheet.pdf",
    size: "~7KB",
    color: "#2E7D32",
    icon: "📋",
    chapters: [
      "Before Any Vehicle: Research Checklist",
      "Title Quick Verdict (all 8 types)",
      "Max Bid Formula at a glance",
      "Vehicle Walk-Around Checklist",
      "Under the Hood + Interior + Drive Test",
      "Red Flags — Walk Away Immediately",
      "Auction Platform Risk Reference",
      "Offer Scripts (5 scenarios)",
      "Remote Purchase Rules",
      "Closing Checklist + Scam Signals",
    ],
  },
  {
    id: "landing",
    label: "LANDING PAGE",
    name: "Sales Landing Page (HTML)",
    file: "Auction_Landing_Page.html",
    size: "~25KB",
    color: STEEL,
    icon: "🌐",
    chapters: [
      "Hero: 'Stop Paying Retail' headline + CTA",
      "Proof bar: 4 trust signals",
      "The Opportunity: 4-card pain section",
      "What's Inside: Full bundle breakdown",
      "Channel Comparison table (5 channels)",
      "The Math: $5,700 savings example",
      "Who It's For / Not For",
      "3 testimonials + Final CTA",
    ],
  },
  {
    id: "traffic",
    label: "TRAFFIC KIT",
    name: "Traffic & Content Kit (Markdown)",
    file: "Auction_Traffic_Content_Kit.md",
    size: "~21KB",
    color: "#6A0DAD",
    icon: "📣",
    chapters: [
      "Gumroad description (short + full)",
      "5 Reddit posts (value-first, no links)",
      "3 Twitter/X threads (fully written)",
      "3 Pinterest pin descriptions",
      "3-email nurture sequence",
      "Gumroad SEO tags & long-tail keywords",
      "Affiliate outreach email template",
    ],
  },
];

const nextSteps = [
  {
    week: "WEEK 1",
    color: ORANGE,
    steps: [
      "Upload 3 PDFs to Gumroad as a single bundle — price at $47",
      "Paste Gumroad description from Traffic Kit",
      "Add all SEO tags from Traffic Kit",
      "Host landing page on Netlify or Carrd (free)",
    ],
  },
  {
    week: "WEEK 2",
    color: AMBER,
    steps: [
      "Post Reddit #1 (Carfax breakdown) — r/personalfinance",
      "Post Reddit #2 (Copart first buy) — r/carbuying",
      "Set up email capture: give cheat sheet free for email",
      "Connect email tool (Mailchimp free tier works)",
    ],
  },
  {
    week: "WEEK 3",
    color: "#2E7D32",
    steps: [
      "Drop Twitter/X Thread #1 (Title Types — highest engagement)",
      "Post Reddit #3 (flipping breakdown) — r/flipping",
      "Pin the cheat sheet infographic on Pinterest",
      "Start affiliate outreach to used car YouTube channels",
    ],
  },
  {
    week: "WEEK 4+",
    color: STEEL,
    steps: [
      "Twitter Thread #2 (Bid Strategy) + Thread #3 (Private Party)",
      "Post Reddit #4 and #5",
      "Cross-promote with Don't Get Dealt bundle (different buyer intent)",
      "Review first sales data — double down on highest-converting channel",
    ],
  },
];

const revenueRows = [
  ["Conservative (organic only)",     "5 bundles/mo",   "$235"],
  ["Realistic (traffic system active)","20–30 bundles/mo","$940–$1,410"],
  ["With 1 affiliate partner",         "+15–20 units",   "+$700–$940"],
  ["Copart/auction community post hit","One-time spike",  "+$500–$1,500"],
  ["Flipper/resale creator collab",    "Recurring",       "+$300–$800/mo"],
];

export default function App() {
  const [active, setActive] = useState("vol1");
  const activeFile = files.find(f => f.id === active);

  return (
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif", color: "white" }}>

      {/* Header */}
      <div style={{ background: NAVY, borderBottom: `3px solid ${ORANGE}`, padding: "20px 28px", display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 5, height: 44, background: ORANGE, borderRadius: 2 }} />
        <div>
          <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.18em", color: AMBER, marginBottom: 2 }}>CLOSED AUCTION · COMPLETE BUILD</div>
          <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "0.02em" }}>Private Party & Auction Buyer's Bundle</div>
        </div>
        <div style={{ marginLeft: "auto", background: ORANGE, color: "white", fontWeight: 800, fontSize: 22, padding: "6px 20px", letterSpacing: "0.03em" }}>$47</div>
      </div>

      <div style={{ padding: "24px 28px", maxWidth: 900, margin: "0 auto" }}>

        {/* File tabs */}
        <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.18em", color: ORANGE, marginBottom: 10 }}>DELIVERABLES — 5 FILES BUILT</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 4 }}>
          {files.map(f => (
            <button key={f.id} onClick={() => setActive(f.id)}
              style={{
                background: active === f.id ? f.color : "#141E2A",
                color: "white", border: `1px solid ${active === f.id ? f.color : "#1E3040"}`,
                padding: "7px 14px", cursor: "pointer", fontSize: 11,
                fontWeight: 700, letterSpacing: "0.08em", fontFamily: "monospace",
                transition: "all 0.15s",
              }}>
              {f.icon} {f.label}
            </button>
          ))}
        </div>

        {/* Active file card */}
        {activeFile && (
          <div style={{ background: "#0D1520", border: `1px solid ${activeFile.color}33`, marginBottom: 24 }}>
            <div style={{ background: activeFile.color, padding: "12px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: "0.03em" }}>{activeFile.name}</div>
              <div style={{ fontFamily: "monospace", fontSize: 10, opacity: 0.85 }}>{activeFile.file}</div>
            </div>
            <div style={{ padding: "16px 18px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 24px" }}>
                {activeFile.chapters.map((ch, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13, color: "#BBBBBB", padding: "4px 0", borderBottom: "1px solid #1A2A3A" }}>
                    <span style={{ color: activeFile.color, flexShrink: 0, fontSize: 10, marginTop: 3 }}>→</span>
                    {ch}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Revenue model */}
        <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.18em", color: ORANGE, marginBottom: 10 }}>REVENUE MODEL</div>
        <div style={{ background: "#0D1520", border: "1px solid #1A2A3A", marginBottom: 24, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 1fr", background: NAVY, padding: "10px 14px", gap: 8 }}>
            {["SCENARIO", "VOLUME", "MONTHLY REVENUE"].map(h => (
              <div key={h} style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: "0.15em", color: AMBER }}>{h}</div>
            ))}
          </div>
          {revenueRows.map(([scenario, vol, rev], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 1fr", padding: "10px 14px", gap: 8, background: i % 2 === 0 ? "#0D1520" : "#111B26", borderTop: "1px solid #1A2A3A" }}>
              <div style={{ fontSize: 13, color: "#CCCCCC" }}>{scenario}</div>
              <div style={{ fontSize: 13, color: "#AAAAAA" }}>{vol}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: i === 0 ? "#AAAAAA" : AMBER }}>{rev}</div>
            </div>
          ))}
        </div>

        {/* Execution timeline */}
        <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.18em", color: ORANGE, marginBottom: 10 }}>EXECUTION SEQUENCE</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 24 }}>
          {nextSteps.map(({ week, color, steps }) => (
            <div key={week} style={{ background: "#0D1520", border: `1px solid ${color}44` }}>
              <div style={{ background: color, padding: "8px 14px", fontWeight: 800, fontSize: 12, letterSpacing: "0.1em", fontFamily: "monospace" }}>{week}</div>
              <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
                {steps.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, fontSize: 12.5, color: "#BBBBBB", lineHeight: 1.4 }}>
                    <span style={{ color, flexShrink: 0 }}>→</span>{s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Non-obvious edge */}
        <div style={{ background: "#1A1000", border: `2px solid ${AMBER}`, padding: "16px 20px", marginBottom: 24 }}>
          <div style={{ fontFamily: "monospace", fontSize: 9, color: AMBER, letterSpacing: "0.18em", marginBottom: 8 }}>THE NON-OBVIOUS POSITIONING EDGE</div>
          <div style={{ fontSize: 14, color: "#DDDDBB", lineHeight: 1.7 }}>
            This bundle targets a <strong style={{ color: "white" }}>higher-intent, higher-trust buyer</strong> than the Don't Get Dealt bundle.
            Someone researching Copart or private party deals has already opted out of retail — they just need the system.
            That buyer converts at a higher rate from content than from ads.
            <br/><br/>
            The <strong style={{ color: AMBER }}>Copart/auction Reddit and YouTube community</strong> is underserved with quality paid content.
            One well-placed comment or video mention in that community outperforms 10 general personal finance posts.
            Target that niche first — then let organic search do the rest.
          </div>
        </div>

        {/* Both bundles together */}
        <div style={{ background: "#0D1520", border: `1px solid ${ORANGE}44`, padding: "16px 20px" }}>
          <div style={{ fontFamily: "monospace", fontSize: 9, color: ORANGE, letterSpacing: "0.18em", marginBottom: 10 }}>YOUR FULL PRODUCT PORTFOLIO — BOTH BUNDLES</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { name: "Don't Get Dealt", desc: "Dealership negotiation + F&I countermeasures", price: "$47", color: "#C8102E", audience: "Retail buyers, first-time negotiators" },
              { name: "Closed Auction", desc: "Private party + auction acquisition system", price: "$47", color: ORANGE, audience: "Savvy buyers, flippers, deal-seekers" },
            ].map(p => (
              <div key={p.name} style={{ background: "#141E2A", borderTop: `3px solid ${p.color}`, padding: "14px" }}>
                <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{p.name}</div>
                <div style={{ fontSize: 12.5, color: "#AAAAAA", marginBottom: 6, lineHeight: 1.5 }}>{p.desc}</div>
                <div style={{ fontSize: 11, color: "#777", marginBottom: 8 }}>Audience: {p.audience}</div>
                <div style={{ fontFamily: "monospace", fontSize: 20, fontWeight: 800, color: p.color }}>{p.price}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12, padding: "12px 14px", background: "#0A1020", fontSize: 13, color: "#AAAAAA", lineHeight: 1.6, borderLeft: `3px solid ${AMBER}` }}>
            <strong style={{ color: "white" }}>Cross-sell opportunity:</strong> A buyer who used Don't Get Dealt to negotiate a dealer purchase
            is a warm prospect for Closed Auction on their next vehicle. A post-purchase email or Gumroad upsell
            converting at even 10% adds ~$4–5/sale in passive revenue to every Don't Get Dealt transaction.
          </div>
        </div>

      </div>
    </div>
  );
}
