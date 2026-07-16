import React from "react";

function TransactionTable({ transactions }) {

    return (

        <table className="transaction-table">

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Date</th>

                </tr>

            </thead>

            <tbody>

                {

                    transactions.length > 0 ?

                    transactions.map((transaction) => (

                        <tr key={transaction.transactionId}>

                            <td>{transaction.transactionId}</td>

                            <td>{transaction.transactionType}</td>

                            <td>₹ {transaction.amount}</td>

                            <td>{transaction.transactionDate}</td>

                        </tr>

                    ))

                    :

                    <tr>

                        <td colSpan="4">

                            No Transactions Found

                        </td>

                    </tr>

                }

            </tbody>

        </table>

    );

}

export default TransactionTable;