-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS customers CASCADE;




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
  placed_order DATE
);
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  foods_in_cart VARCHAR(255) NOT NULL,
  order_received DATE,
  order_processed DATE,
  order_sent DATE,

);
CREATE TABLE pickups (
  id SERIAL PRIMARY KEY NOT NULL,
  foods_in_cart_id INTEGER REFERENCES carts(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  is_paid BOOLEAN
);
