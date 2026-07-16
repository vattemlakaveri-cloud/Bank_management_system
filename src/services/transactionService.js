import api from "./api";

// Get All Transactions
export const getAllTransactions = () => {
    return api.get("/transactions");
};