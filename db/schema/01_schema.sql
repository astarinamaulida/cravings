-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS order_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS pickups CASCADE;
DROP TABLE IF EXISTS payments CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;

CREATE DATABASE carvingsdb;
\c carvingsdb;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(32) NOT NULL,
  is_restaurant_crew BOOLEAN
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  total_price INTEGER NOT NULL,
  quantity INTEGER
);


CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  order_item_id INTEGER REFERENCES order_items(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  order_received TIMESTAMP NOT NULL,
  order_processed TIMESTAMP NOT NULL,
  order_sent TIMESTAMP NOT NULL,
  meal_prep eta SMALLINT,
  is_ready BOOLEAN
);


CREATE TABLE pickups (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  is_paid BOOLEAN
);


CREATE TABLE payments (
  id SERIAL PRIMARY KEY NOT NULL,
  payment_type VARCHAR(255) NOT NULL,
  payment_date TIMESTAMP,
  amount INTEGER NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
);


CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  unit_price SMALLINT NOT NULL,
  thumbnail_url VARCHAR (255) NOT NULL,
  item_category TEXT NOT NULL
);

\dt
-- to run : \i  db/schema/01_schema.sql
-- CREATE TABLE carts (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
--   placed_order TIMESTAMP,
--   isOrdered BOOLEAN
-- );

-- CREATE TABLE messages (
--   id SERIAL PRIMARY KEY NOT NULL,
--   order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   isProcessed BOOLEAN,
--   isReady BOOLEAN,
--   price INTEGER NOT NULL
-- );




