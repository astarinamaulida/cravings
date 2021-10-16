-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS orders CASCADE;


CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  -- order_item_id INTEGER REFERENCES order_items(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  order_received TIMESTAMP NOT NULL,
  order_processed TIMESTAMP NOT NULL,
  order_sent TIMESTAMP NOT NULL,
  meal_prep_eta INTEGER,
  is_ready BOOLEAN
);


\dt
-- to run : \i db/schema/02_orders.sql




