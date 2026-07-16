package com.example.bankapplication.Service;

import com.example.bankapplication.Model.Account;
import com.example.bankapplication.Model.Transaction; // Make sure to import your new Model
import com.example.bankapplication.Repository.AccountRepository;
import com.example.bankapplication.Repository.TransactionRepository; // Import your new Repository
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    // 1. Inject the transaction repository here
    @Autowired
    private TransactionRepository transactionRepository;

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    public Account getAccountById(Long id) {
        return accountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Account not found"));
    }

    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    public Account updateAccount(Long id, Account updatedAccount) {
        Account existing = getAccountById(id);
        existing.setAccountHolderName(updatedAccount.getAccountHolderName());
        existing.setAccountType(updatedAccount.getAccountType());
        existing.setBalance(updatedAccount.getBalance());
        return accountRepository.save(existing);
    }

    public void deleteAccount(Long id) {
        accountRepository.deleteById(id);
    }

    @Transactional
    public Account deposit(Long id, double amount) {
        Account account = getAccountById(id);
        account.setBalance(account.getBalance() + amount);
        Account savedAccount = accountRepository.save(account);

        // 2. Automatically log the deposit
        transactionRepository.save(new Transaction(id, "DEPOSIT", amount));

        return savedAccount;
    }

    @Transactional
    public Account withdraw(Long id, double amount) {
        Account account = getAccountById(id);
        if (account.getBalance() < amount) {
            throw new RuntimeException("Insufficient funds");
        }
        account.setBalance(account.getBalance() - amount);
        Account savedAccount = accountRepository.save(account);

        // 3. Automatically log the withdrawal
        transactionRepository.save(new Transaction(id, "WITHDRAWAL", amount));

        return savedAccount;
    }

    @Transactional
    public void transfer(Long sourceId, Long targetId, double amount) {
        // Your current code calls withdraw() and deposit(), which means it automatically
        // triggers logs 2 and 3! Let's add explicit transfer descriptions to make it ultra clear:
        withdraw(sourceId, amount);
        deposit(targetId, amount);

        // 4. Log the context of the transfer
        transactionRepository.save(new Transaction(sourceId, "TRANSFER_OUT to Account " + targetId, amount));
        transactionRepository.save(new Transaction(targetId, "TRANSFER_IN from Account " + sourceId, amount));
    }

    // 5. Add this method so your controller can fetch the logs later
    public List<Transaction> getTransactionsByAccountId(Long accountId) {
        return transactionRepository.findByAccountId(accountId);
    }
}