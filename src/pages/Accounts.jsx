import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/accounts.css";

function Accounts() {

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        loadAccounts();
    }, []);

    const loadAccounts = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8080/api/accounts"
            );

            setAccounts(response.data);

        } catch (error) {

            console.log(error);
            alert("Unable to load accounts");

        }

    };

    return (

        <div className="accounts-container">

            <h1 className="accounts-title">
                Bank Accounts
            </h1>

            <div className="top-bar">

                <input
                    type="text"
                    className="search-box"
                    placeholder="Search Account..."
                />

                <button className="add-account-btn">
                    Add Account
                </button>

            </div>

            <table className="account-table">

                <thead>

                    <tr>

                        <th>Account ID</th>
                        <th>Account Holder</th>
                        <th>Account Type</th>
                        <th>Balance</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        accounts.map((account) => (

                            <tr key={account.accountId}>

                                <td>{account.accountId}</td>

                                <td>{account.accountHolderName}</td>

                                <td>{account.accountType}</td>

                                <td>₹ {account.balance}</td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );

}

export default Accounts;