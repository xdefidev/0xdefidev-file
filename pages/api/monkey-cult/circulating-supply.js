import { Connection, PublicKey } from "@solana/web3.js";

const LOCKED_WALLETS = [
    "CSX44TZj87zCHCBDMnkHTpPcMi89i9iTF45KUpTaMHrz",
    "1nc1nerator11111111111111111111111111111111"
];

export async function GET() {
    try {
        const connection = new Connection("https://go.getblock.us/f4ae7e4f1e984adcbb518d69f9c5faba");
        const mint = new PublicKey("HyLXondhNhGkvWPXr8z4EPSgZNRRs4j8BHdyqMdVpump");

        // Total supply
        const supplyResponse = await connection.getTokenSupply(mint);
        let circulating = supplyResponse.value.uiAmount || 0;

        // Subtract locked balances
        for (const wallet of LOCKED_WALLETS) {
            const accounts = await connection.getTokenAccountsByOwner(
                new PublicKey(wallet),
                { mint }
            );

            for (const account of accounts.value) {
                const parsed = account.account.data.parsed.info.tokenAmount.uiAmount;
                circulating -= parsed || 0;
            }
        }

        return Response.json(circulating);
    } catch (error) {
        return new Response("Error fetching circulating supply", { status: 500 });
    }
}