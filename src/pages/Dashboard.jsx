import React from "react";
import { Link } from "react-router-dom";
import "../css/dashboard.css";

function Dashboard() {

    const user = JSON.parse(localStorage.getItem("user"));

    return (

        <div className="dashboard-container">

            <div className="welcome-banner">

                <h2>
                    Welcome {user ? user.fullName : "User"}
                </h2>

                <p>
                    Manage your banking activities securely.
                </p>

            </div>

            <h1 className="dashboard-title">
                Dashboard
            </h1>

            <p className="dashboard-subtitle">
                Overview of your bank account
            </p>

            <div className="dashboard-cards">

                <div className="dashboard-card">
                    <h3>Total Balance</h3>
                    <p>₹50,000</p>
                </div>

                <div className="dashboard-card">
                    <h3>Total Accounts</h3>
                    <p>2</p>
                </div>

                <div className="dashboard-card">
                    <h3>Transactions</h3>
                    <p>125</p>
                </div>

                <div className="dashboard-card">
                    <h3>UPI ID</h3>
                    <p>Active</p>
                </div>

            </div>

            <div className="quick-actions">

                <Link to="/accounts">
                    <button className="action-btn">
                        Accounts
                    </button>
                </Link>

                <Link to="/deposit">
                    <button className="action-btn">
                        Deposit
                    </button>
                </Link>

                <Link to="/withdraw">
                    <button className="action-btn">
                        Withdraw
                    </button>
                </Link>

                <Link to="/transfer">
                    <button className="action-btn">
                        Transfer
                    </button>
                </Link>

                <Link to="/transactions">
                    <button className="action-btn">
                        Transactions
                    </button>
                </Link>

                <Link to="/profile">
                    <button className="action-btn">
                        Profile
                    </button>
                </Link>

            </div>

            <div className="transactions-section">

                <h2>
                    Recent Transactions
                </h2>

                <table className="transaction-table">

                    <thead>

                        <tr>

                            <th>Date</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td>13-07-2026</td>
                            <td>Deposit</td>
                            <td className="credit">+₹5000</td>
                            <td>Success</td>

                        </tr>

                        <tr>

                            <td>12-07-2026</td>
                            <td>Withdraw</td>
                            <td className="debit">-₹2000</td>
                            <td>Success</td>

                        </tr>

                        <tr>

                            <td>11-07-2026</td>
                            <td>Transfer</td>
                            <td className="debit">-₹3500</td>
                            <td>Success</td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default Dashboard;
