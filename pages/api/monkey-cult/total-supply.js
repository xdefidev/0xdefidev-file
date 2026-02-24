import { Connection, PublicKey } from "@solana/web3.js";

export async function GET() {
    try {
        const connection = new Connection("https://go.getblock.us/f4ae7e4f1e984adcbb518d69f9c5faba");
        const mint = new PublicKey("HyLXondhNhGkvWPXr8z4EPSgZNRRs4j8BHdyqMdVpump");

        const supply = await connection.getTokenSupply(mint);

        return Response.json(supply.value.uiAmount);
    } catch (error) {
        return new Response("Error fetching total supply", { status: 500 });
    }
}