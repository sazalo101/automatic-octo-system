import { Buffer } from 'buffer';
import React, { useState, useEffect } from "react";
import { Button, Form, Container, Card, Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { AptosWalletAdapterProvider, useWallet } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { FaWallet, FaPhone, FaMoneyBillWave, FaSignOutAlt } from "react-icons/fa";

window.Buffer = window.Buffer || Buffer;
import "./App.css";

const App = () => {
    const { connect, disconnect, account, connected, wallets } = useWallet();
    const [amount, setAmount] = useState("");
    const [phone, setPhone] = useState("");
    const [kesAmount, setKesAmount] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (amount) {
            setError(null);
            fetch("http://localhost:5000/exchange-rate")
                .then(res => {
                    if (!res.ok) throw new Error("Failed to fetch exchange rate");
                    return res.json();
                })
                .then(data => setKesAmount((amount * data.rate) - 50))
                .catch(err => {
                    console.error("Error fetching exchange rate:", err);
                    setError("Failed to fetch exchange rate");
                });
        }
    }, [amount]);

    const handleWithdraw = async () => {
        if (!amount || !phone) {
            setError("Please fill in all fields.");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("http://localhost:5000/withdraw", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount, phone, walletAddress: account?.address }),
            });
            const data = await response.json();
            if (data.success) {
                alert("Withdrawal successful!");
                setAmount("");
                setPhone("");
                setKesAmount(null);
            } else {
                setError("Withdrawal failed: " + (data.error || "Unknown error"));
            }
        } catch (error) {
            console.error("Error processing withdrawal:", error);
            setError("Error processing withdrawal");
        }
        setLoading(false);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <Card className="p-4 shadow-lg modern-wallet-card w-100 animated-card glassmorphism" style={{ maxWidth: "400px" }}>
                    <motion.h2 className="wallet-title text-center" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>Weka - Withdraw USDC/APT to KES</motion.h2>
                    {!connected ? (
                        <motion.button 
                            whileHover={{ scale: 1.1, backgroundColor: "#007bff", color: "#fff" }}
                            whileTap={{ scale: 0.95 }} 
                            className="wallet-connect-btn w-100 mt-3 animated-button"
                            onClick={() => wallets.length > 0 && connect(wallets[0].name)}
                        >
                            <FaWallet className="me-2" /> Connect Petra Wallet
                        </motion.button>
                    ) : (
                        <>
                            <p className="wallet-address text-center">Connected Wallet: {account?.address}</p>
                            {error && <Alert variant="danger" className="wallet-error">{error}</Alert>}
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label><FaMoneyBillWave className="me-2" /> Amount (USDC/APT)</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        className="wallet-input"
                                        value={amount} 
                                        onChange={e => setAmount(parseFloat(e.target.value) || "")} 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label><FaPhone className="me-2" /> Phone Number (KES Payout)</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        className="wallet-input"
                                        value={phone} 
                                        onChange={e => setPhone(e.target.value)} 
                                    />
                                </Form.Group>
                                <p className="wallet-amount text-center">Amount in KES (after fees): {kesAmount !== null ? kesAmount.toFixed(2) : "Calculating..."}</p>
                                <motion.button 
                                    whileHover={{ scale: 1.1, backgroundColor: "#28a745", color: "#fff" }}
                                    whileTap={{ scale: 0.95 }} 
                                    className="wallet-withdraw-btn w-100 animated-button"
                                    onClick={handleWithdraw} 
                                    disabled={loading || !amount || !phone || kesAmount === null}
                                >
                                    {loading ? <Spinner animation="border" size="sm" /> : "Withdraw"}
                                </motion.button>
                            </Form>
                            <motion.button 
                                whileHover={{ scale: 1.1, backgroundColor: "#dc3545", color: "#fff" }}
                                whileTap={{ scale: 0.95 }} 
                                className="wallet-disconnect-btn w-100 mt-3 animated-button"
                                onClick={disconnect} 
                            >
                                <FaSignOutAlt className="me-2" /> Disconnect Wallet
                            </motion.button>
                        </>
                    )}
                </Card>
            </motion.div>
        </Container>
    );
};

const AppWithProvider = () => {
    const wallets = [new PetraWallet()];
    return (
        <AptosWalletAdapterProvider plugins={wallets}  network="Testnet" autoConnect={false}>
            <App />
        </AptosWalletAdapterProvider>
    );
};

export default AppWithProvider;
