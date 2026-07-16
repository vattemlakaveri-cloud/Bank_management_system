import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Transfer from "./pages/Transfer";
import Transactions from "./pages/Transactions";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Login */}

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}

        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Dashboard />
            </>
          }
        />

        <Route
          path="/accounts"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Accounts />
            </>
          }
        />

        <Route
          path="/deposit"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Deposit />
            </>
          }
        />

        <Route
          path="/withdraw"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Withdraw />
            </>
          }
        />

        <Route
          path="/transfer"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Transfer />
            </>
          }
        />

        <Route
          path="/transactions"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Transactions />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Profile />
            </>
          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;