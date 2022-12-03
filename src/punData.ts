import { PrismaClient, zirpuns } from '@prisma/client'

const client = new PrismaClient();

export async function getQuoteById(quoteId: string): Promise<zirpuns> {
  return await client.zirpuns.findUniqueOrThrow({ where: { id: parseInt(quoteId, 10)}});
}

export async function getRandomQuote(): Promise<zirpuns> {
  const result: zirpuns[] = await client.$queryRawUnsafe(
    "SELECT * FROM zirpuns ORDER BY RANDOM() LIMIT 1" // UNSAFE! NEVER ADD USER INPUT HERE!!!
  );
  if (!result || result.length !== 1) {
    throw new Error("Could not find random pun");
  }
  const [ pun ] = result;
  return pun;
}
