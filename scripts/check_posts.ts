
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const dbUrl = process.env.DATABASE_URL;

async function checkBlogPosts() {
  const client = new pg.Client({
    connectionString: dbUrl,
  });

  try {
    await client.connect();
    const res = await client.query("SELECT id, title, feature_image_url FROM blog_posts");
    console.log("Blog Posts:");
    console.table(res.rows);
    
    const serviceRes = await client.query("SELECT id, title, feature_image_url FROM service_posts");
    console.log("\nService Posts:");
    console.table(serviceRes.rows);
  } catch (err) {
    console.error("Error checking posts:", err);
  } finally {
    await client.end();
  }
}

checkBlogPosts();
