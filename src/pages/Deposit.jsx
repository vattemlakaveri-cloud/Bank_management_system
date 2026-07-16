import React, { useState } from "react";
import axios from "axios";
import "../css/deposit.css";

function Deposit() {

    const [accountId, setAccountId] = useState("");
    const [amount, setAmount] = useState("");

    const handleDeposit = async (e) => {

        e.preventDefault();

        if (amount <= 0) {
            alert("Please enter a valid amount");
            return;
        }

        try {

            const response = await axios.put(
                `http://localhost:8080/api/accounts/${accountId}/deposit`,
                null,
                {
                    params: {
                        amount: amount
                    }
                }
            );

            alert("Amount Deposited Successfully");
            console.log(response.data);

            setAccountId("");
            setAmount("");

        } catch (error) {

            console.log(error);
            alert("Deposit Failed");

        }

    };

    return (

        <div className="deposit-container">

            <h1 className="deposit-title">
                Deposit Money
            </h1>

            <p className="deposit-subtitle">
                Deposit money into your account
            </p>

            <div className="deposit-card">

                <h2>Deposit Form</h2>

                <form onSubmit={handleDeposit}>

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

                    <button className="deposit-btn">

                        Deposit

                    </button>

                </form>

            </div>

        </div>

    );

}

export default Deposit;