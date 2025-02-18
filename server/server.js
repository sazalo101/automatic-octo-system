const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const { Aptos } = require("@aptos-labs/ts-sdk");

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Aptos client
const aptosClient = new Aptos();

app.use(express.json());
app.use(cors());

const APTOS_WALLET = "0x3b5a9c75755fffb67fb1060938bc6936254eb5fa356b595e401c9d43cfadda18";
const EXCHANGE_API_URL = `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}/latest/USD`;

// Fetch USD to KES exchange rate
app.get("/exchange-rate", async (req, res) => {
    try {
        const response = await axios.get(EXCHANGE_API_URL);
        const rate = response.data.conversion_rates.KES;
        res.json({ rate });
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
        res.status(500).json({ error: "Failed to fetch exchange rate" });
    }
});

// Connect Wallet Endpoint
app.post("/connect-wallet", async (req, res) => {
    try {
        const account = aptosClient.generateAccount();
        res.json({ success: true, walletAddress: account.address().toString() });
    } catch (error) {
        console.error("Error connecting wallet:", error);
        res.status(500).json({ error: "Failed to connect wallet", details: error.message });
    }
});

// Process Withdrawal Request
app.post("/withdraw", async (req, res) => {
    const { amount, phone, walletAddress } = req.body;
    if (!amount || !phone || !walletAddress) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Get exchange rate
        const exchangeResponse = await axios.get(EXCHANGE_API_URL);
        const exchangeRate = exchangeResponse.data.conversion_rates.KES;
        
        // Convert amount to KES (minus 50 KES fee)
        const kesAmount = Math.floor((amount * exchangeRate) - 50);
        if (kesAmount <= 0) {
            return res.status(400).json({ error: "Amount too low after fees" });
        }

        // Verify Aptos wallet address format
        if (!walletAddress.startsWith("0x")) {
            return res.status(400).json({ error: "Invalid wallet address format" });
        }

        console.log(`Transferring ${amount} USDC/APT from ${walletAddress} to ${APTOS_WALLET}`);
        
        // Process IntaSend Payout
        const options = {
            method: 'POST',
            url: 'https://sandbox.intasend.com/api/v1/send-money/initiate/',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Bearer ${process.env.INTASEND_SECRET_KEY}`
            },
            data: {
                currency: 'KES',
                provider: 'MPESA-B2C',
                device_id: 'string',
                callback_url: 'http://well.com',
                batch_reference: 'string',
                transactions: [
                    {
                        name: 'User Withdrawal',
                        account: phone,
                        id_number: 'string',
                        amount: kesAmount.toString(),
                        bank_code: '1',
                        category_name: 'string',
                        narrative: 'User withdrawal request',
                        account_type: 'TillNumber',
                        account_reference: 'string'
                    }
                ]
            }
        };

        const payoutResponse = await axios.request(options);
        res.json({ success: true, transaction: payoutResponse.data });
    } catch (error) {
        console.error("Error processing withdrawal:", error);
        res.status(500).json({ error: "Withdrawal failed", details: error.message || "Unknown error occurred" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
