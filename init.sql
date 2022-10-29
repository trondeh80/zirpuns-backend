-- Creates zirpuns database & table
CREATE SEQUENCE zirpuns_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;
CREATE TABLE IF NOT EXISTS "public"."zirpuns" (
    "id" integer DEFAULT nextval('zirpuns_id_seq') NOT NULL,
    "quote" text NOT NULL,
    CONSTRAINT "zirpuns_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "zirpuns" ("id", "quote") VALUES
(1,	'Test from DB');
