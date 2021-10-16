-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS menu_items CASCADE;

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  unit_price SMALLINT NOT NULL,
  thumbnail_url VARCHAR (255) NOT NULL,
  item_category TEXT NOT NULL
);

\dt

-- to run : \i  db/schema/03_menu_items.sql



