import "dotenv/config";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const posts = [
  {
    title: "Why Your Iron Fence Keeps Rusting Back (And How to Stop It for Good)",
    slug: "why-iron-fence-keeps-rusting",
    excerpt:
      "Surface rust removal isn't enough. Here's why rust always comes back on iron fences, gates, and railings — and what a proper restoration actually does.",
    meta_description:
      "Iron fence keeps rusting after cleaning? Learn why surface-only rust removal fails, what professionals do differently, and when to call a restoration expert to stop rust for good.",
    focus_keyword: "iron fence rust removal",
    tags: "iron restoration,rust removal,wrought iron,fence maintenance",
    author_name: "Brilliance Metal Cleaning",
    status: "published",
    published_at: new Date().toISOString(),
    content: [
      "<p>You wire-brushed the fence, applied rust remover, repainted — and six months later the rust is back.",
      "This is the most common frustration we hear from homeowners and property managers. The fix wasn't wrong,",
      "it was incomplete. Here's what's actually happening and how to break the cycle.</p>",

      "<h2>Why Rust Always Returns After DIY Treatment</h2>",
      "<p>Rust isn't just a surface problem. When iron oxidizes, the corrosion works inward, and what you see on the",
      "outside is only the visible layer. Most DIY rust treatments — wire brushes, sanding discs, rust converter sprays —",
      "remove the surface but leave microscopically compromised metal underneath. Paint applied over that layer traps",
      "residual moisture and any remaining rust, which continues to spread invisibly. Within one to two seasons,",
      "it breaks through the surface again.</p>",

      "<p>This is especially common in areas exposed to rain, coastal salt air, or freeze-thaw cycles, where moisture",
      "penetrates even small imperfections in the coating.</p>",

      "<h2>What a Proper Iron Restoration Includes</h2>",
      "<p>A professional iron restoration goes deeper than surface prep. The process includes:</p>",
      "<ul>",
      "<li><strong>Full rust assessment</strong> — identifying not just visible rust but compromised metal beneath painted surfaces</li>",
      "<li><strong>Mechanical and chemical removal</strong> — wire wheel grinding, sandblasting, or chemical stripping depending on the piece and severity</li>",
      "<li><strong>Metal treatment</strong> — applying phosphoric acid or rust-inhibiting primer to neutralize any remaining oxidation at the surface level</li>",
      "<li><strong>Protective coating</strong> — industrial-grade rust-inhibiting primer followed by a topcoat formulated for metal, not general paint</li>",
      "<li><strong>Hardware inspection</strong> — hinges, bolts, and hardware corrode faster than the main structure and are often overlooked</li>",
      "</ul>",

      "<h2>Signs You're Past DIY Territory</h2>",
      "<p>A few indicators that the work is beyond a can of rust spray:</p>",
      "<ul>",
      "<li>Rust has returned within one season of a prior treatment</li>",
      "<li>You can see pitting or flaking on the metal surface (not just discoloration)</li>",
      "<li>Sections feel structurally thin or fragile when pressed</li>",
      "<li>The fence, gate, or railing has joints or welds that are visibly rusted through</li>",
      "</ul>",
      "<p>At this stage, improper treatment doesn't just look bad — it can become a safety liability, especially on",
      "gates and railings.</p>",

      "<h2>The Best Time to Restore Iron</h2>",
      "<p>Spring and fall are the optimal windows. Spring lets you address damage from winter moisture before the",
      "peak season. Fall gives you a clean, sealed surface before rain, frost, and salt exposure set in.",
      "Waiting until the problem is severe almost always means more labor and higher cost.</p>",

      "<h2>What About Annual Maintenance?</h2>",
      "<p>Once properly restored, iron requires far less intervention. An annual inspection — checking for chips,",
      "scratches, or spots where the coating is breaking down — lets you address small areas before they spread.",
      "Touching up exposed metal the moment it appears is the lowest-cost maintenance strategy available.</p>",

      "<p>If your iron fence, gate, railing, or architectural ironwork has been through the rust-return cycle more",
      "than once, a full professional restoration is the most cost-effective long-term solution. We assess the metal,",
      "remove rust completely, and apply a finish built to last — not just until next spring.</p>",
    ].join(" "),
  },
  {
    title: "How to Clean Bronze Without Destroying the Finish (And When Not to DIY)",
    slug: "how-to-clean-bronze-without-destroying-finish",
    excerpt:
      "Bronze looks dirty, so you clean it — and accidentally strip the patina that took decades to develop. Here's how to tell the difference between cleaning and damaging, and when to call a professional.",
    meta_description:
      "Learn how to safely clean bronze fixtures, sculptures, and hardware without stripping the patina. Discover common DIY mistakes and when professional bronze restoration is the right call.",
    focus_keyword: "how to clean bronze without removing patina",
    tags: "bronze cleaning,bronze patina,bronze restoration,outdoor bronze maintenance",
    author_name: "Brilliance Metal Cleaning",
    status: "published",
    published_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    content: [
      "<p>Bronze develops its patina — that rich brown, amber, or greenish surface layer — through years of",
      "oxidation. It's not dirt. It's chemistry. The problem is that it often looks like dirt, and the instinct",
      "to clean it thoroughly can strip something that took decades to develop and is nearly impossible to recreate",
      "exactly. This guide covers what's safe, what's not, and how to tell the difference.</p>",

      "<h2>What You're Actually Looking at on Bronze</h2>",
      "<p>Bronze is a copper-tin alloy. When exposed to air and moisture over time, copper compounds form on the",
      "surface — creating the brownish-black layer called <em>liver of sulfur patina</em> or the green layer",
      "called <em>verdigris</em>. On architectural bronze, sculptures, plaques, and memorial markers, this patina",
      "is often intentional and valued. On hardware and fixtures exposed to heavy handling, buildup may be genuine",
      "grime layered on top of the patina rather than the patina itself.</p>",
      "<p>The goal in cleaning bronze is usually to remove the grime without touching the patina underneath.",
      "This distinction is what separates maintenance cleaning from restoration — and why the wrong product",
      "causes irreversible damage.</p>",

      "<h2>What's Safe for Light Maintenance Cleaning</h2>",
      "<p>For indoor or sheltered bronze with light surface buildup:</p>",
      "<ul>",
      "<li>Warm water and a few drops of mild dish soap with a soft cloth or natural-bristle brush</li>",
      "<li>Rinse thoroughly — soap residue accelerates tarnishing</li>",
      "<li>Dry completely with a soft cloth before any moisture can sit</li>",
      "<li>Apply a thin coat of paste wax (Renaissance Wax or similar) to protect the surface afterward</li>",
      "</ul>",
      "<p>That's the safe ceiling for DIY cleaning on bronze with an existing patina you want to preserve.</p>",

      "<h2>Products to Avoid</h2>",
      "<p>These commonly used products cause real damage to bronze:</p>",
      "<ul>",
      "<li><strong>Brasso and similar metal polishes</strong> — designed to remove oxidation, which means they remove the patina</li>",
      "<li><strong>CLR and calcium/lime removers</strong> — acidic formulas strip surface chemistry aggressively</li>",
      "<li><strong>Bleach or ammonia-based cleaners</strong> — attack copper alloys and cause pitting</li>",
      "<li><strong>Steel wool or abrasive pads</strong> — scratch and strip surface texture permanently</li>",
      "</ul>",
      "<p>These products work fine on other metals. On bronze with a developed patina, they remove",
      "something you cannot simply clean back on.</p>",

      "<h2>Outdoor Bronze: A Different Challenge</h2>",
      "<p>Outdoor sculptures, entrance door hardware, architectural elements, and memorial markers are exposed",
      "to acid rain, bird droppings, tree sap, salt air (in coastal areas), and UV. They require different care:</p>",
      "<ul>",
      "<li>Wax annually — paste wax forms a physical barrier against moisture and pollution</li>",
      "<li>Check for active verdigris (powdery light green buildup) — this indicates ongoing corrosion that should be addressed professionally</li>",
      "<li>After any surface cleaning, always re-wax or re-seal</li>",
      "</ul>",
      "<p>Outdoor bronze that has never been waxed, or hasn't been waxed in several years, has likely developed",
      "uneven patina deterioration that requires professional assessment before cleaning.</p>",

      "<h2>When to Call a Professional</h2>",
      "<p>These situations are beyond safe DIY intervention:</p>",
      "<ul>",
      "<li>The patina has already been partially or fully stripped by a prior cleaning — professional re-patination is the only fix</li>",
      "<li>The bronze has pitting, deep corrosion, or active powdery verdigris across large areas</li>",
      "<li>The piece has heritage, memorial, or significant monetary value</li>",
      "<li>You want a controlled aesthetic result — either brightening the bronze to its original warm shine or",
      "creating a specific aged patina finish for architectural or decorative purposes</li>",
      "</ul>",

      "<p>Bronze responds to professional-grade compounds and controlled application in ways that DIY methods",
      "simply cannot replicate. If the piece matters — architecturally, sentimentally, or financially — a",
      "professional assessment before cleaning is the lower-risk path.</p>",
    ].join(" "),
  },
  {
    title: "Why Stainless Steel Goes Dull, Scratched, and Rusty — And What Restoration Actually Fixes",
    slug: "why-stainless-steel-goes-dull-scratched-rusty",
    excerpt:
      "Stainless steel isn't maintenance-free. Here's why commercial and residential stainless loses its finish, what causes rust spots on 'stainless' steel, and when professional restoration is the right solution.",
    meta_description:
      "Stainless steel scratched, dull, or showing rust spots? Learn why stainless steel deteriorates, what common cleaning mistakes accelerate damage, and how professional restoration restores it.",
    focus_keyword: "stainless steel restoration",
    tags: "stainless steel restoration,commercial kitchen maintenance,stainless steel scratches,passivation",
    author_name: "Brilliance Metal Cleaning",
    status: "published",
    published_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    content: [
      "<p>The name is misleading. 'Stainless' steel is highly resistant to corrosion — it is not immune to it.",
      "In commercial kitchens, food prep environments, industrial facilities, and even residential settings,",
      "stainless steel surfaces and equipment regularly develop scratches, dull haze, mineral deposits, and",
      "in some cases actual rust spots. Most of these are preventable — and when they occur, they're repairable.",
      "Here's what causes each problem and what professional restoration does differently.</p>",

      "<h2>Why Stainless Steel Loses Its Shine</h2>",
      "<p>Stainless steel gets its corrosion resistance from a thin, invisible <em>passive layer</em> — a",
      "chromium oxide film that forms naturally on the surface and acts as a barrier against moisture and",
      "oxygen. When this layer is compromised, the steel beneath it is exposed and vulnerable.</p>",
      "<p>Common ways the passive layer is damaged:</p>",
      "<ul>",
      "<li><strong>Wrong cleaning tools</strong> — steel wool pads, scouring sponges, and abrasive powder cleansers",
      "leave micro-scratches that scatter light and make the surface look dull; they also create grooves where",
      "contamination and moisture collect</li>",
      "<li><strong>Bleach and chlorine cleaners</strong> — chlorides actively break down the chromium oxide layer;",
      "this is extremely common in kitchens where bleach-based sanitizers are used on stainless surfaces</li>",
      "<li><strong>Hard water deposits</strong> — calcium and mineral buildup from tap water creates cloudiness",
      "that dulls the surface and, if left long-term, bonds to the steel and becomes difficult to remove without",
      "abrasives</li>",
      "<li><strong>Cleaning against the grain</strong> — stainless steel has a directional grain (the fine parallel",
      "lines visible on brushed finishes); wiping across the grain creates visible cross-scratches that catch light differently</li>",
      "</ul>",

      "<h2>Why 'Stainless' Steel Gets Rust Spots</h2>",
      "<p>Rust on stainless steel is almost always a sign that the passive layer has been damaged. Once the",
      "chromium oxide barrier is gone — from chlorine exposure, deep scratching, or contamination from carbon steel",
      "tools — the iron in the alloy oxidizes normally. Small orange-brown spots appear, often first in corners,",
      "seams, or areas that stay wet.</p>",
      "<p>In commercial kitchens, this happens most often near sinks and dishwashing areas where bleach contact",
      "is frequent and surfaces stay damp. In coastal or high-humidity environments, even undamaged stainless",
      "requires more frequent maintenance to keep the passive layer intact.</p>",

      "<h2>What Professional Restoration Does</h2>",
      "<p>Professional stainless steel restoration addresses the surface in stages, depending on the damage:</p>",
      "<ul>",
      "<li><strong>Scratch removal</strong> — progressive polishing compounds matched to the original grain direction",
      "of the surface; coarser grits work down deep scratches, finer grits blend the repaired area to match",
      "surrounding finish</li>",
      "<li><strong>Mineral and deposit removal</strong> — professional descaling agents dissolve calcium and mineral",
      "buildup without scratching, followed by neutralization and rinse</li>",
      "<li><strong>Passivation</strong> — a chemical treatment (typically citric or nitric acid) that removes free",
      "iron and surface contamination and restores the chromium oxide passive layer; passivation is standard in",
      "food-service, medical, and industrial applications and is specified under ASTM A967 for equipment in",
      "regulated environments</li>",
      "</ul>",
      "<p>After professional passivation, stainless steel is more resistant to corrosion than it was before",
      "the surface damage occurred — not just cosmetically improved.</p>",

      "<h2>When Restoration Makes More Sense Than Replacement</h2>",
      "<p>For commercial kitchen equipment — prep tables, counters, sinks, shelving, hoods — replacement costs",
      "are significant. Professional restoration typically restores the surface to near-original condition at a",
      "fraction of replacement cost, and passivation extends the life of the equipment before the next service",
      "interval. For residential applications — sinks, appliances, fixtures — restoration addresses the cosmetic",
      "and structural surface issues that make equipment look aged and worn.</p>",

      "<p>The most important maintenance principle for stainless steel is this: always clean with the grain,",
      "never use bleach or chlorine-based products, and address hard water buildup before it mineralizes on the",
      "surface. If damage is already present, a professional assessment determines whether polishing alone is",
      "sufficient or whether passivation is required to restore the protective layer.</p>",
    ].join(" "),
  },
];

async function main() {
  console.log("Seeding blog posts via Supabase REST API...");

  const res = await fetch(`${SUPABASE_URL}/rest/v1/blog_posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: KEY,
      Authorization: `Bearer ${KEY}`,
      Prefer: "resolution=ignore-duplicates,return=minimal",
    },
    body: JSON.stringify(posts),
  });

  const text = await res.text();
  if (!res.ok) {
    console.error(`Failed: ${res.status} ${text}`);
    process.exit(1);
  }

  console.log(`Status ${res.status} — done. ${posts.length} blog posts seeded.`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
