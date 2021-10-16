-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS order_items CASCADE;

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  total_price INTEGER NOT NULL,
  quantity INTEGER
);

\dt

-- to run : \i  db/schema/04_order_items.sql




