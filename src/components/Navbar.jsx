import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        🏦 Bank Management System
      </div>

      <ul className="nav-links">
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/accounts">Accounts</a></li>
        <li><a href="/transactions">Transactions</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;