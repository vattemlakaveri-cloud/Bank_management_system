import React from "react";

function AccountCard({ account }) {

    return (

        <div className="dashboard-card">

            <h3>{account.accountType}</h3>

            <p>
                <strong>Account ID:</strong> {account.accountId}
            </p>

            <p>
                <strong>Holder:</strong> {account.accountHolderName}
            </p>

            <h2>₹ {account.balance}</h2>

        </div>

    );

}

export default AccountCard;