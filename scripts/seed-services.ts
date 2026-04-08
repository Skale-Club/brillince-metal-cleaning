import "dotenv/config";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const services = [
  {
    title: "General Metal Cleaning",
    slug: "general-metal-cleaning",
    content: [
      "<p>Our general metal cleaning service is the foundation of everything we do.",
      "Whether you run a commercial kitchen, a manufacturing facility, or need maintenance on structural metalwork,",
      "this service brings metal surfaces back to a clean, safe, and presentable condition.</p>",
      "<h2>What the Service Covers</h2>",
      "<p>We handle a wide range of metals and surface types, including aluminum, copper, brass, iron, steel,",
      "and mixed-metal assemblies. Our team removes accumulated grease, grime, carbon deposits, industrial residue,",
      "and general surface contamination that builds up over time with regular use.</p>",
      "<h2>How We Work</h2>",
      "<p>We start with a surface assessment to identify the metal type, level of contamination, and any areas",
      "that need special attention. From there, we select the appropriate cleaning agents and methods — whether that",
      "means alkaline degreasers, ultrasonic cleaning for small components, pressure washing for large surfaces,",
      "or manual detailing for precision parts.</p>",
      "<h2>Why Regular Cleaning Matters</h2>",
      "<p>Metal surfaces that are left uncleaned accumulate layers of contamination that accelerate corrosion,",
      "create hygiene risks, and degrade the surface over time. Regular professional cleaning extends the life of",
      "your equipment and metal assets, keeps your space compliant with health and safety standards, and maintains",
      "the professional appearance your business depends on.</p>",
      "<h2>Who This Service Is For</h2>",
      "<p>This service is ideal for restaurants and commercial kitchens, warehouses and industrial facilities,",
      "retail spaces with metal fixtures, and property managers maintaining metal railings, doors, and facades.</p>",
    ].join(" "),
    excerpt:
      "Professional deep cleaning for all metal types. We remove grease, grime, carbon buildup, and industrial residue to bring your metal surfaces back to a clean, safe condition.",
    meta_description:
      "Professional general metal cleaning service for commercial kitchens, industrial facilities, and metal fixtures. Remove grease, grime, and contamination with certified technicians.",
    focus_keyword: "professional metal cleaning service",
    status: "published",
    order: 1,
    published_at: new Date().toISOString(),
  },
  {
    title: "Bronze Brightening",
    slug: "bronze-brightening",
    content: [
      "<p>Bronze is a beautiful material, but exposure to air, moisture, and daily handling causes it to darken,",
      "lose its luster, and develop a dull patina over time. Our bronze brightening service restores that warm,",
      "reflective shine that makes bronze fixtures and decorative pieces stand out.</p>",
      "<h2>What Causes Bronze to Dull</h2>",
      "<p>Bronze is an alloy of copper and tin, and it reacts naturally with oxygen and moisture. This oxidation",
      "creates a darkened surface layer that often looks dirty and neglected on fixtures, hardware, plaques,",
      "railings, and decorative elements. Handling also transfers oils and acids from skin onto the surface,",
      "which speed up the dulling process.</p>",
      "<h2>Our Brightening Process</h2>",
      "<p>We use professional-grade, metal-safe compounds specifically formulated for bronze. The process removes",
      "the oxidation layer without damaging the metal underneath. After brightening, we apply a protective finish",
      "that slows down future tarnishing and keeps the surface looking polished for longer. Each piece is handled",
      "carefully to preserve detail and texture.</p>",
      "<h2>What You Can Expect</h2>",
      "<p>After the service, bronze surfaces will have a warm, bright, and even shine. The finish will be consistent",
      "across the piece with no streaks or dull patches. We also provide aftercare recommendations to help you",
      "maintain the result between professional cleanings.</p>",
      "<h2>Common Applications</h2>",
      "<p>Entrance doors and handles, architectural hardware, decorative sculptures and plaques, lighting fixtures,",
      "railings and balustrades, memorial markers, and antique pieces.</p>",
    ].join(" "),
    excerpt:
      "Restore the warm, reflective shine of bronze fixtures, hardware, and decorative pieces. We remove oxidation and tarnish using compounds safe for the metal, then protect the finish.",
    meta_description:
      "Professional bronze brightening service to restore shine and remove oxidation from fixtures, hardware, plaques, and decorative bronze pieces. Certified technicians, lasting results.",
    focus_keyword: "bronze brightening service",
    status: "published",
    order: 2,
    published_at: new Date().toISOString(),
  },
  {
    title: "Bronze Aging",
    slug: "bronze-aging",
    content: [
      "<p>Sometimes the goal is not brightness — it is character. Our bronze aging service creates a rich,",
      "controlled patina on bronze surfaces, giving pieces that warm, antique appearance that designers,",
      "architects, and collectors value.</p>",
      "<h2>What Is Bronze Aging</h2>",
      "<p>Bronze aging is the intentional acceleration of the patination process. Instead of waiting years for a",
      "natural patina to develop — or getting an uneven, blotchy result from uncontrolled oxidation — we apply",
      "professional chemical treatments that produce a consistent, beautiful aged look across the entire surface.</p>",
      "<h2>Why Go with a Professional</h2>",
      "<p>DIY patination attempts often result in uneven coloring, blotchy patches, or damage to the metal from",
      "using the wrong chemicals. Our technicians use industry-standard patination compounds and application",
      "techniques that produce a smooth, even, aesthetically controlled finish. We can also target specific shades,",
      "from a light warm brown to a deep antique green, depending on your preference.</p>",
      "<h2>Our Process</h2>",
      "<p>We begin by cleaning the bronze thoroughly to ensure a clean, even surface. We then apply the patination",
      "treatment in controlled conditions, monitoring the development of color and tone until the desired result is",
      "achieved. Finally, we seal the surface with a protective coating that stabilizes the patina and prevents",
      "further uncontrolled oxidation.</p>",
      "<h2>Common Uses</h2>",
      "<p>Custom furniture and hardware, architectural features, sculptures and artistic pieces, replacement parts",
      "that need to match aged originals, and decorative installations where an antique aesthetic is desired.</p>",
    ].join(" "),
    excerpt:
      "Create a rich, controlled antique patina on bronze surfaces. We apply professional treatments that produce a consistent aged look — from warm brown to deep antique green — sealed for durability.",
    meta_description:
      "Professional bronze aging and patination service for sculptures, hardware, and decorative pieces. Controlled, consistent antique finishes with a protective seal. Custom shades available.",
    focus_keyword: "bronze aging patination service",
    status: "published",
    order: 3,
    published_at: new Date().toISOString(),
  },
  {
    title: "Iron Piece Restoration with Hardware",
    slug: "iron-piece-restoration",
    content: [
      "<p>Cast iron and wrought iron are incredibly durable materials, but rust and corrosion are their natural",
      "enemies. Over time, even well-made iron pieces can develop heavy surface rust, pitting, and scale that",
      "compromises both their appearance and structural integrity. Our iron restoration service addresses all of",
      "it — metal surface and hardware together.</p>",
      "<h2>What This Service Includes</h2>",
      "<p>We restore the iron surface itself — removing rust, scale, and old coatings — and we also treat or",
      "replace the associated hardware: bolts, hinges, brackets, fasteners, and other components that are part",
      "of the piece. This means the entire item is restored, not just the visible surface.</p>",
      "<h2>Our Restoration Process</h2>",
      "<p>We start with a structural assessment to determine the extent of corrosion and whether any sections have",
      "been weakened. Heavy rust is removed with wire brushing and grinding where necessary; surface rust is treated",
      "with rust-converting compounds. After cleaning, we apply a corrosion-inhibiting primer and your choice of",
      "protective finish.</p>",
      "<h2>Hardware Handling</h2>",
      "<p>Bolts, hinges, and fasteners are removed, cleaned, treated, and reinstalled. Severely corroded hardware",
      "is replaced with matching components to maintain the integrity and appearance of the original piece.</p>",
      "<h2>What Can Be Restored</h2>",
      "<p>Garden furniture and gates, industrial equipment and machinery frames, staircases and railings,",
      "architectural ironwork, antique iron fixtures, and structural iron components in buildings and outdoor spaces.</p>",
    ].join(" "),
    excerpt:
      "Full restoration of iron pieces including rust removal, surface treatment, and hardware cleaning or replacement. We restore both the metal and its components for a complete result.",
    meta_description:
      "Professional iron restoration service including rust removal, corrosion treatment, protective coating, and hardware restoration or replacement. For gates, railings, furniture, and industrial pieces.",
    focus_keyword: "iron piece restoration service",
    status: "published",
    order: 4,
    published_at: new Date().toISOString(),
  },
  {
    title: "Stainless Steel Restoration",
    slug: "stainless-steel-restoration",
    content: [
      "<p>Stainless steel is designed to resist corrosion and maintain a clean appearance, but heavy use, harsh",
      "cleaning products, and improper maintenance cause it to scratch, stain, and lose its characteristic shine.",
      "Our stainless steel restoration service brings it back to that smooth, clean, reflective finish it had",
      "when it was new.</p>",
      "<h2>What Damages Stainless Steel</h2>",
      "<p>Chloride exposure from cleaning agents and salty environments causes pitting and surface corrosion.",
      "Abrasive cleaning with the wrong tools leaves fine scratches that trap dirt and bacteria. Heat tinting from",
      "cooking equipment creates discoloration. And over time, fingerprints, grease, and mineral deposits from hard",
      "water build up into a dull, contaminated layer that normal wiping cannot remove.</p>",
      "<h2>Our Restoration Process</h2>",
      "<p>We assess the steel grain direction and the type and extent of damage before choosing our approach. For",
      "light surface contamination, we use professional degreasers and specialized cleaners applied in the direction",
      "of the grain. For scratches and surface damage, we use progressive polishing compounds that restore the",
      "surface profile and bring back the original finish — whether that is a brushed matte, a satin, or a mirror polish.</p>",
      "<h2>Passivation and Protection</h2>",
      "<p>After restoration, we can apply a passivation treatment that enhances the metal natural corrosion",
      "resistance and extends how long the results last. We also advise on the right maintenance products and",
      "practices so you can keep the surface clean without causing further damage.</p>",
      "<h2>Where We Work</h2>",
      "<p>Commercial kitchen equipment, food preparation surfaces, sinks and plumbing fixtures, elevator panels",
      "and architectural features, industrial machinery, medical and laboratory equipment, and stainless steel",
      "furniture and countertops.</p>",
    ].join(" "),
    excerpt:
      "Restore stainless steel to its original clean, reflective finish. We remove scratches, heat tinting, mineral deposits, and corrosion using professional polishing and passivation techniques.",
    meta_description:
      "Professional stainless steel restoration service for commercial kitchens, equipment, architectural fixtures, and industrial surfaces. Polish, passivation, and protective treatment included.",
    focus_keyword: "stainless steel restoration service",
    status: "published",
    order: 5,
    published_at: new Date().toISOString(),
  },
];

async function main() {
  console.log("Seeding services via Supabase REST API...");

  const res = await fetch(`${SUPABASE_URL}/rest/v1/service_posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: KEY,
      Authorization: `Bearer ${KEY}`,
      Prefer: "resolution=ignore-duplicates,return=minimal",
    },
    body: JSON.stringify(services),
  });

  const text = await res.text();
  if (!res.ok) {
    console.error(`Failed: ${res.status} ${text}`);
    process.exit(1);
  }

  console.log(`Status ${res.status} — done.`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
