import { Client } from "ts-postgres";
import { QuoteResponse } from "./types";

export async function getQuoteById(quoteId: string): Promise<QuoteResponse | null> {
  const client = await getClient();
  const result = await client.query("SELECT * FROM zirpuns WHERE id = $1", [
    quoteId,
  ]);

  if (result.rows.length !== 1) {
    throw new Error("Could not find element");
  }
  const [first] = [...result];
  if (!first || !first.data) {
    throw new Error("Did not return any data");
  }

  const [id, quote, quotePun, author] = [...first.data];
  if (!id || !quote) {
    return null;
  }
  return {
    id,
    quote,
    quotePun,
    author
  } as QuoteResponse;
}

export async function getRandomQuote(): Promise<QuoteResponse | null> {
  const client = await getClient();
  const result = await client.query(
    "SELECT * FROM zirpuns ORDER BY RANDOM() LIMIT 1"
  );
  const [first] = [...result];
  if (!first || !first.data) {
    throw new Error("Could not get element");
  }

  const [id, quote, quotePun, author] = first?.data ?? [];
  if (!id || !quote) {
    return null;
  }

  return {
    id,
    quote,
    quotePun,
    author
  } as QuoteResponse;
}

let client: Client | null = null;
async function getClient(): Promise<Client> {
  if (!client) {
    client = new Client({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    await client.connect();
  }
  return client;
}
