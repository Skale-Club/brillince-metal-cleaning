
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const dbUrl = process.env.DATABASE_URL;

if (!supabaseUrl || !supabaseKey || !dbUrl) {
  console.error("Missing environment variables in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const dbClient = new pg.Client({ connectionString: dbUrl });

const updates = [
  {
    id: 4,
    imagePath: "C:/Users/Vanildo/.gemini/antigravity/brain/13d7f58f-97bc-485a-8324-baffde407e50/iron_fence_restoration_id4_1775699605114.png",
    fileName: `blog_iron_fence_${Date.now()}.png`
  },
  {
    id: 5,
    imagePath: "C:/Users/Vanildo/.gemini/antigravity/brain/13d7f58f-97bc-485a-8324-baffde407e50/bronze_cleaning_id5_1775699624505.png",
    fileName: `blog_bronze_cleaning_${Date.now()}.png`
  },
  {
    id: 6,
    imagePath: "C:/Users/Vanildo/.gemini/antigravity/brain/13d7f58f-97bc-485a-8324-baffde407e50/stainless_steel_restoration_id6_1775699645655.png",
    fileName: `blog_stainless_steel_${Date.now()}.png`
  }
];

async function run() {
  await dbClient.connect();
  const bucketName = "uploads";

  for (const update of updates) {
    console.log(`Processing ID ${update.id}: ${update.imagePath}...`);
    
    try {
      const fileBuffer = fs.readFileSync(update.imagePath);
      
      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(update.fileName, fileBuffer, {
          contentType: "image/png",
          upsert: true
        });

      if (error) throw error;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(bucketName)
        .getPublicUrl(update.fileName);

      const publicUrl = urlData.publicUrl;
      console.log(`  Uploaded! Public URL: ${publicUrl}`);

      // Update Database
      await dbClient.query(
        "UPDATE blog_posts SET feature_image_url = $1, updated_at = NOW() WHERE id = $2",
        [publicUrl, update.id]
      );
      console.log(`  Database updated for ID ${update.id}.`);

    } catch (err) {
      console.error(`  Error processing ID ${update.id}:`, err);
    }
  }

  await dbClient.end();
  console.log("All updates completed.");
}

run();
