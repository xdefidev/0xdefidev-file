import { Connection, PublicKey } from "@solana/web3.js";

export default async function handler(req, res) {
    try {
        const connection = new Connection("https://go.getblock.us/f4ae7e4f1e984adcbb518d69f9c5faba");
        const mint = new PublicKey("HyLXondhNhGkvWPXr8z4EPSgZNRRs4j8BHdyqMdVpump");

        const supply = await connection.getTokenSupply(mint);

        res.status(200).json(supply.value.uiAmount);
    } catch (error) {
        res.status(500).send("Error fetching total supply");
    }
}