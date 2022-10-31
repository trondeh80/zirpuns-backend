import { Client } from "ts-postgres";

export async function getQuoteById(quoteId: string): Promise<any> {
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

  const [id, quote] = [...first.data];
  return {
    id,
    quote,
  };
}

export async function getRandomQuote(): Promise<any> {
  const client = await getClient();
  const result = await client.query(
    "SELECT * FROM zirpuns ORDER BY RANDOM() LIMIT 1"
  );
  const [first] = [...result];
  if (!first || !first.data) {
    throw new Error("Could not get element");
  }

  const [id, quote] = [...(first?.data ?? [])];
  return {
    id,
    quote,
  };
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
