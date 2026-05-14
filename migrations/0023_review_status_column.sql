ALTER TABLE review_items
  ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'approved';
