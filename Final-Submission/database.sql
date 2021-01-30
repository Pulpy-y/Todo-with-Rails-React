PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "schema_migrations" ("version" varchar NOT NULL PRIMARY KEY);
INSERT INTO schema_migrations VALUES('20210102072453');
INSERT INTO schema_migrations VALUES('20210103160524');
CREATE TABLE IF NOT EXISTS "ar_internal_metadata" ("key" varchar NOT NULL PRIMARY KEY, "value" varchar, "created_at" datetime(6) NOT NULL, "updated_at" datetime(6) NOT NULL);
INSERT INTO ar_internal_metadata VALUES('environment','development','2021-01-30 08:45:42.884656','2021-01-30 08:45:42.884656');
CREATE TABLE IF NOT EXISTS "todo_lists" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "description" text NOT NULL, "created_at" datetime(6) NOT NULL, "updated_at" datetime(6) NOT NULL);
INSERT INTO todo_lists VALUES(3,'Shopping List','Tomorrow','2021-01-30 13:16:32.494809','2021-01-30 13:16:32.494809');
INSERT INTO todo_lists VALUES(4,'Homework','cs2030','2021-01-30 13:17:03.526691','2021-01-30 13:17:03.526691');
INSERT INTO todo_lists VALUES(5,'Today','todos','2021-01-30 14:43:59.611803','2021-01-30 14:43:59.611803');
INSERT INTO todo_lists VALUES(6,'This week','todos','2021-01-30 14:45:00.879408','2021-01-30 14:45:00.879408');
CREATE TABLE IF NOT EXISTS "todo_items" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar, "completed" boolean DEFAULT 0, "todo_list_id" integer NOT NULL, "created_at" datetime(6) NOT NULL, "updated_at" datetime(6) NOT NULL, CONSTRAINT "fk_rails_d913ce1c56"
FOREIGN KEY ("todo_list_id")
  REFERENCES "todo_lists" ("id")
);
INSERT INTO todo_items VALUES(3,'Bread',0,3,'2021-01-30 13:16:41.511792','2021-01-30 13:16:41.511792');
INSERT INTO todo_items VALUES(4,'Milk',0,3,'2021-01-30 13:16:47.574294','2021-01-30 13:16:47.574294');
INSERT INTO todo_items VALUES(5,'lab1',0,4,'2021-01-30 13:17:08.990695','2021-01-30 13:17:08.990695');
INSERT INTO todo_items VALUES(6,'tutorial 1',0,4,'2021-01-30 14:43:28.294404','2021-01-30 14:43:28.294404');
INSERT INTO todo_items VALUES(7,'wash clothes',0,5,'2021-01-30 14:44:20.956568','2021-01-30 14:44:20.956568');
INSERT INTO todo_items VALUES(8,'dinner with family',0,5,'2021-01-30 14:44:43.851700','2021-01-30 14:44:43.851700');
INSERT INTO todo_items VALUES(9,'Go home',0,6,'2021-01-30 14:45:11.464504','2021-01-30 14:45:11.464504');
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('todo_lists',6);
INSERT INTO sqlite_sequence VALUES('todo_items',9);
CREATE INDEX "index_todo_items_on_todo_list_id" ON "todo_items" ("todo_list_id");
COMMIT;
