import React, { useState } from "react";
import axios from "axios";
import "../css/transfer.css";

function Transfer() {

    const [fromAccountId, setFromAccountId] = useState("");
    const [toAccountId, setToAccountId] = useState("");
    const [amount, setAmount] = useState("");

    const handleTransfer = async (e) => {

        e.preventDefault();

        if (amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        try {

            await axios.put(
                "http://localhost:8080/api/accounts/transfer",
                null,
                {
                    params: {
                        fromAccountId: fromAccountId,
                        toAccountId: toAccountId,
                        amount: amount
                    }
                }
            );

            alert("Money transferred successfully.");

            setFromAccountId("");
            setToAccountId("");
            setAmount("");

        } catch (error) {

            console.log(error);
            alert("Transfer failed.");

        }

    };

    return (

        <div className="transfer-container">

            <h1 className="transfer-title">
                Money Transfer
            </h1>

            <p className="transfer-subtitle">
                Transfer money between bank accounts.
            </p>

            <div className="transfer-card">

                <h2>Transfer Details</h2>

                <form onSubmit={handleTransfer}>

                    <div className="form-group">

                        <label>From Account ID</label>

                        <input
                            type="number"
                            placeholder="Enter Sender Account ID"
                            value={fromAccountId}
                            onChange={(e) => setFromAccountId(e.target.value)}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>To Account ID</label>

                        <input
                            type="number"
                            placeholder="Enter Receiver Account ID"
                            value={toAccountId}
                            onChange={(e) => setToAccountId(e.target.value)}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Amount</label>

                        <input
                            type="number"
                            placeholder="Enter Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />

                    </div>

                    <button className="transfer-btn">
                        Transfer Money
                    </button>

                </form>

            </div>

        </div>

    );

}

export default Transfer;