import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <h2>🏦 Banking</h2>

      <ul>

        <li>
          <a href="/dashboard">Dashboard</a>
        </li>

        <li>
          <a href="/accounts">Accounts</a>
        </li>

        <li>
          <a href="/deposit">Deposit</a>
        </li>

        <li>
          <a href="/withdraw">Withdraw</a>
        </li>

        <li>
          <a href="/transfer">Transfer</a>
        </li>

        <li>
          <a href="/transactions">Transactions</a>
        </li>

        <li>
          <a href="/profile">Profile</a>
        </li>

        <li>
          <a href="/">Logout</a>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;