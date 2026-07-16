package com.example.bankapplication.Repository;

import com.example.bankapplication.Model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    // Custom query method to find all transaction logs belonging to a specific account id
    List<Transaction> findByAccountId(Long accountId);
}