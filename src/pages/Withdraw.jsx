import React, { useState } from "react";
import axios from "axios";
import "../css/withdraw.css";

function Withdraw() {

    const [accountId, setAccountId] = useState("");
    const [amount, setAmount] = useState("");

    const handleWithdraw = async (e) => {

        e.preventDefault();

        if (amount <= 0) {
            alert("Please enter a valid amount");
            return;
        }

        try {

            const response = await axios.put(
                `http://localhost:8080/api/accounts/${accountId}/withdraw`,
                null,
                {
                    params: {
                        amount: amount
                    }
                }
            );

            alert("Amount Withdrawn Successfully");
            console.log(response.data);

            setAccountId("");
            setAmount("");

        } catch (error) {

            console.log(error);
            alert("Withdrawal Failed");

        }

    };

    return (

        <div className="withdraw-container">

            <h1 className="withdraw-title">
                Withdraw Money
            </h1>

            <p className="withdraw-subtitle">
                Withdraw money from your account
            </p>

            <div className="withdraw-card">

                <h2>Withdraw Form</h2>

                <form onSubmit={handleWithdraw}>

                    <div className="form-group">

                        <label>Account ID</label>

                        <input
                            type="number"
                            placeholder="Enter Account ID"
                            value={accountId}
                            onChange={(e) => setAccountId(e.target.value)}
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

                    <button className="withdraw-btn">
                        Withdraw
                    </button>

                </form>

            </div>

        </div>

    );

}

export default Withdraw;