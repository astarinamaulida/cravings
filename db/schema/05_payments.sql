-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS payments CASCADE;


CREATE TABLE payments (
  id SERIAL PRIMARY KEY NOT NULL,
  payment_type VARCHAR(255) NOT NULL,
  payment_date TIMESTAMP,
  amount INTEGER NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
);



\dt



