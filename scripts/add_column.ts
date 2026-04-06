import 'dotenv/config';
import pkg from 'pg';

const { Client } = pkg;

const connectionString = process.env.DATABASE_URL || process.env.SUPABASE_DATABASE_URL || '';

if (!connectionString) {
  console.error('Missing DATABASE_URL (or SUPABASE_DATABASE_URL).');
  process.exit(1);
}

async function runMigration() {
  const client = new Client({ connectionString });

  try {
    await client.connect();
    console.log('Connected to database\n');

    console.log('Adding hero_background_image_url column...');
    await client.query(`
      ALTER TABLE company_settings
      ADD COLUMN IF NOT EXISTS hero_background_image_url TEXT DEFAULT '';
    `);
    console.log('Column added successfully\n');

    console.log('Checking existing data...');
    const result = await client.query(`
      SELECT id, company_name, hero_title, hero_subtitle, hero_image_url
      FROM company_settings
      LIMIT 5;
    `);

    if (result.rows.length > 0) {
      console.log(`\nFound ${result.rows.length} row(s):\n`);
      result.rows.forEach((row, idx) => {
        console.log(`Row ${idx + 1}:`);
        console.log(`  ID: ${row.id}`);
        console.log(`  Company: ${row.company_name || '(empty)'}`);
        console.log(`  Hero Title: ${row.hero_title || '(empty)'}`);
        console.log(`  Hero Subtitle: ${row.hero_subtitle || '(empty)'}`);
        console.log(`  Hero Image: ${row.hero_image_url || '(empty)'}`);
        console.log('');
      });
    } else {
      console.log('No data found in company_settings');
    }
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

runMigration();
