import api from "./api";

// Get All Accounts
export const getAllAccounts = () => {
    return api.get("/accounts");
};

// Create Account
export const createAccount = (account) => {
    return api.post("/accounts", account);
};

// Deposit Money
export const depositMoney = (accountId, amount) => {
    return api.put(
        `/accounts/${accountId}/deposit`,
        null,
        {
            params: {
                amount: amount,
            },
        }
    );
};

// Withdraw Money
export const withdrawMoney = (accountId, amount) => {
    return api.put(
        `/accounts/${accountId}/withdraw`,
        null,
        {
            params: {
                amount: amount,
            },
        }
    );
};

// Transfer Money
export const transferMoney = (
    fromAccountId,
    toAccountId,
    amount
) => {
    return api.put(
        "/accounts/transfer",
        null,
        {
            params: {
                fromAccountId,
                toAccountId,
                amount,
            },
        }
    );
};