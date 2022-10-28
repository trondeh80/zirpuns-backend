import { Client } from 'ts-postgres';
import * as dotenv from 'dotenv';
dotenv.config();

export async function getQuoteById(quoteId: string): Promise<any> {
    const client = await getClient();
    const result = await client.query("SELECT * FROM zirpuns WHERE id = $1", [quoteId]);
    const rows = [...result];
    const first = rows.pop();
    
    const [ id, quote ] = [...first?.data ?? []];
    return {
       id,
       quote
    };
}

let client: Client | null = null;
async function getClient(): Promise<Client> {
    if (!client) {
       
        client = new Client({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        })
        await client.connect()
    }
    return client;
}