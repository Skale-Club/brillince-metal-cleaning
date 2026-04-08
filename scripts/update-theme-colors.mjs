import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || process.env.SUPABASE_DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const result = await pool.query(`
  UPDATE company_settings SET
    website_primary_color = '#895B23',
    website_secondary_color = '#EACF62',
    website_accent_color = '#EACF62',
    website_background_color = '#FDF5CE',
    website_cta_background_color = '#EACF62',
    website_cta_hover_color = '#895B23'
  WHERE id = (SELECT id FROM company_settings LIMIT 1)
  RETURNING id, website_primary_color, website_cta_background_color
`);
console.log('✅ Theme colors updated in DB:', result.rows[0]);
await pool.end();
