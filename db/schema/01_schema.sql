-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS carts CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS pickups CASCADE;
DROP TABLE IF EXISTS payments CASCADE;
DROP TABLE IF EXISTS menus CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
CREATE DATABASE carvingsdb;
\c carvingsdb;



CREATE TABLE customers (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(32) NOT NULL
);
CREATE TABLE carts (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  menu_id INTEGER REFERENCES menus(id) ON DELETE CASCADE,
  placed_order TIMESTAMP,
  isOrdered BOOLEAN
);
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  menu_id INTEGER REFERENCES menus(id) ON DELETE CASCADE,
  order_received TIMESTAMP,
  order_processed TIMESTAMP,
  order_sent TIMESTAMP,

);
CREATE TABLE pickups (
  id SERIAL PRIMARY KEY NOT NULL,
  foods_in_cart_id INTEGER REFERENCES carts(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  is_paid BOOLEAN
);
CREATE TABLE payments (
  id SERIAL PRIMARY KEY NOT NULL,
  payment_type VARCHAR(255) NOT NULL,
  payment_date TIMESTAMP,
  amount INTEGER NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
);
CREATE TABLE menus (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,

);
CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  isProcessed BOOLEAN,
  isReady BOOLEAN,
  price INTEGER NOT NULL
);

\dt

-- to run : \i  db/schema/01_schema.sql

