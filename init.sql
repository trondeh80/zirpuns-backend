-- Creates zirpuns database & table
CREATE TABLE "public"."zirpuns" (
    "id" integer DEFAULT nextval('quote_id_seq') NOT NULL,
    "quote" text NOT NULL,
    "quotePun" text,
    "author" text,
    CONSTRAINT "quote_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "zirpuns" ("id", "quote", "quotePun", "author") VALUES
(1,	'What do NASA programmers do on the weekends?', 'They hit the space bar.', 'Andre');
