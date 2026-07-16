import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/transactions.css";

function Transactions() {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        loadTransactions();
    }, []);

    const loadTransactions = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8080/api/transactions"
            );

            setTransactions(response.data);

        } catch (error) {

            console.log(error);
            alert("Unable to load transaction history.");

        }

    };

    return (

        <div className="transactions-container">

            <h1 className="transactions-title">
                Transaction History
            </h1>

            <p className="transactions-subtitle">
                View all your banking transactions.
            </p>

            <div className="search-section">

                <input
                    type="text"
                    className="search-box"
                    placeholder="Search Transaction..."
                />

                <button className="download-btn">
                    Download Statement
                </button>

            </div>

            <table className="transaction-table">

                <thead>

                    <tr>

                        <th>Transaction ID</th>
                        <th>Account ID</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Date</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        transactions.length > 0 ? (

                            transactions.map((transaction) => (

                                <tr key={transaction.transactionId}>

                                    <td>{transaction.transactionId}</td>

                                    <td>{transaction.accountId}</td>

                                    <td>{transaction.transactionType}</td>

                                    <td>₹ {transaction.amount}</td>

                                    <td>{transaction.transactionDate}</td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td colSpan="5">
                                    No Transactions Found
                                </td>

                            </tr>

                        )
                    }

                </tbody>

            </table>

        </div>

    );

}

export default Transactions;