-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS pickups CASCADE;


CREATE TABLE pickups (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  is_paid BOOLEAN
);


\dt





