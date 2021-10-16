-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(32) NOT NULL,
  is_restaurant_crew BOOLEAN
);

\dt
-- to run : \i  db/schema/01_users.sql



