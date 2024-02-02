---
tags:
  - 
share: "true"
---

# 02 Transakční Zpracování

## Vlastnosti Transakcí, Uzamykací Protokoly, Zablokování

### Vlastnosti Transakcí

Transactions in database systems are governed by four fundamental properties, known as the ACID properties: Atomicity, Consistency, Isolation, and Durability. These properties ensure the reliable processing of transactions, even in the face of errors, power failures, and other unforeseen issues.

- **Atomicity:** This property ensures that each transaction is treated as a single "unit," which either completes in its entirety or does not happen at all. It guarantees that if any part of the transaction fails, the entire transaction fails and the database state is left unchanged.
	- **Příklad:** In a banking system, when transferring money from one account to another, atomicity ensures that both the debit from one account and the credit to another account occur, or neither operation is performed.

- **Consistency:** Ensures that a transaction can only bring the database from one valid state to another, maintaining database invariants. This means the transaction does not violate any integrity constraints during its execution.
	- **Příklad:** When adding a new employee record, the transaction ensures that all required fields for the employee are filled, thus maintaining the consistency of the database.

- **Isolation:** Transactions are isolated from each other, meaning the intermediate states produced by a transaction are not visible to other concurrently executed transactions. Isolation prevents transactions from interfering with each other.
	- **Příklad:** If two transactions are concurrently updating the salary of different employees, isolation ensures that the changes made by one transaction are not visible to the other until they are committed.

- **Durability:** Once a transaction has been committed, its changes to the database are permanent, surviving any subsequent system failures. This ensures that the effects of the transaction are preserved even in the event of a crash.
	- **Příklad:** After a transaction that updates a customer's address is committed, the new address is stored permanently, even if the system crashes immediately after.

### Uzamykací Protokoly

Locking protocols are strategies used by database management systems to control how transactions interact with data concurrently. They prevent conflicts between transactions by ensuring that only one transaction can modify a piece of data at a time.

- **Types of Locks:**
	- **Shared (S) Lock:** Allows a transaction to read a data item. Multiple transactions can hold shared locks on the same data item simultaneously, promoting read concurrency while preventing writes.
	- **Exclusive (X) Lock:** Allows a transaction to both read and write a data item. If a transaction holds an exclusive lock on a data item, no other transaction can acquire any lock (shared or exclusive) on that item.

- **Locking Protocols:**
	- **Two-Phase Locking (2PL):** Ensures serializability of transactions by dividing the execution into two phases: the growing phase, where locks are acquired and no locks are released, followed by the shrinking phase, where locks are released and no new locks are acquired. This protocol guarantees that the lock conflicts form a serializable schedule, although it may lead to deadlocks.
		- **Strict 2PL:** A variant where all exclusive locks are held until the transaction commits or aborts, ensuring recoverability and cascadeless schedules.
	- **Intention Locks:** Used in hierarchical locking to indicate a transaction's intention to acquire locks on finer-grained items (like rows) within a larger item (like a table). Types include Intention Shared (IS), Intention Exclusive (IX), Shared Intention Exclusive (SIX), and more. This approach supports lock escalation and de-escalation efficiently.

- **Deadlocks and Lock Management:**
	- **Deadlock Detection:** The DBMS periodically checks for cycles in the lock graph, which indicate deadlocks. Upon detecting a deadlock, the system must choose one or more transactions to abort to break the cycle.
	- **Deadlock Prevention:** Algorithms that prevent deadlocks by imposing a total ordering on all data items and ensuring that transactions acquire locks in this order, thereby preventing cycles in the lock graph.
	- **Lock Timeout:** An alternative strategy where transactions automatically release their locks if they cannot acquire additional needed locks within a certain timeframe, reducing the likelihood of deadlocks.

- **Examples:**
	- **Two-Phase Locking Example:** A transaction wanting to update account balances in a banking system first acquires exclusive locks on the rows corresponding to the accounts involved. It performs the updates and then commits, releasing the locks only after all updates are complete.
	- **Deadlock Example:** Transaction A holds a lock on Resource 1 and waits for a lock on Resource 2, while Transaction B holds a lock on Resource 2 and waits for a lock on Resource 1. Without intervention, neither transaction can proceed.

### Zablokování

Deadlocks occur in a database system when two or more transactions hold locks on resources and each waits for the other to release its lock, creating a cycle of dependencies that prevents any of the transactions from proceeding. This situation significantly impacts the efficiency and reliability of database operations.

- **Characteristics of Deadlocks:**
	- **Mutual Exclusion:** Each resource is either currently assigned to one transaction or available.
	- **Hold and Wait:** Transactions holding resources can request additional resources without relinquishing their current holdings.
	- **No Preemption:** Resources cannot be forcibly removed from a transaction before it has completed its operations.
	- **Circular Wait:** A closed chain of transactions exists, where each transaction holds one or more resources that the next transaction in the chain is waiting for.

- **Deadlock Handling Strategies:**
	- **Deadlock Prevention:** Modifying the system's request and allocation strategies to ensure that at least one of the necessary conditions for deadlock cannot hold.
		- **Ordering of Resources:** Imposing a total order on all resource types and requiring that transactions request resources in increasing order of enumeration.
	- **Deadlock Avoidance:** Using additional information about transactions to avoid the deadlock state by careful resource allocation.
		- **Banker’s Algorithm:** Determines the safe sequence of executing transactions to avoid deadlocks, taking into account the maximum potential use of resources by transactions.
	- **Deadlock Detection and Recovery:** Allowing deadlocks to occur but having a mechanism to detect and recover from them.
		- **Detection:** Periodically running an algorithm that checks for cycles in the resource allocation graph.
		- **Recovery:** Once a deadlock is detected, resolving it by aborting one or more transactions to break the cycle, and then rolling back the aborted transactions.

- **Examples:**
	- **Deadlock Example:** Transaction A holds a lock on Resource 1 and waits for a lock on Resource 2, while Transaction B holds a lock on Resource 2 and waits for a lock on Resource 1. Neither transaction can proceed, forming a deadlock.
	- **Recovery Action:** The database system may choose to abort Transaction B, release its lock on Resource 2, allowing Transaction A to proceed, and then Transaction B can be restarted after Transaction A completes.

## Řešení Problému Uváznutí V Databázi

Deadlocks can severely impact database performance and reliability. Understanding how to detect, prevent, and resolve deadlocks is essential for database administrators and developers. This section outlines strategies for managing deadlocks in database systems.

### Detection

Deadlock detection involves monitoring and identifying a set of transactions that are waiting on each other to release locks, forming a cycle that cannot be broken without external intervention.

- **Deadlock Detection Algorithms:** These algorithms scan the lock table or wait-for graph of transactions to find cycles. If a cycle is detected, a deadlock exists.
- **Frequency of Detection:** Running the detection algorithm too frequently can be expensive in terms of system resources, while running it too infrequently may allow deadlocks to persist, degrading performance.

### Prevention

Preventing deadlocks requires altering the database system's behavior to ensure that at least one of the necessary conditions for a deadlock cannot occur.

- **Ordering of Lock Requests:** Require all transactions to request locks in a predetermined order, thereby preventing circular waits.
- **Locking Granularity:** Adjusting the granularity of locking (e.g., row-level versus table-level locks) can reduce the likelihood of deadlocks, though finer granularity may increase overhead.
- **Timeouts:** Setting a maximum duration for a transaction to hold a lock. If the transaction cannot complete in this time, it is rolled back, potentially breaking deadlock cycles.

### Avoidance

Deadlock avoidance algorithms dynamically examine transaction requests to determine whether or not a particular lock allocation will potentially lead to a deadlock, deciding whether the lock should be granted or delayed.

- **Banker’s Algorithm:** A classic example used in operating systems that can also be applied to databases, it evaluates whether granting a request will keep the system in a safe state, where all transactions can complete.

### Recovery

When a deadlock is detected, the system must take action to resolve it, typically by aborting one or more transactions to break the cycle of dependency.

- **Victim Selection:** Choose a transaction to abort based on criteria such as transaction priority, how long the transaction has been running, and the resources it has consumed.
- **Rollback:** The selected transaction(s) are rolled back, releasing all locks and allowing other transactions to proceed.
- **Partial Rollback:** Instead of completely aborting a transaction, the system might roll it back to a safe state, a point where it can release some locks and allow other transactions to continue.

### Examples

- **Example of Detection:** A system periodically checks its wait-for graph and identifies a cycle between transactions T1, T2, and T3, indicating a deadlock.
- **Example of Prevention:** Transactions are required to request locks on all needed resources before starting. If not all locks can be obtained, none are granted, and the transaction must wait.
- **Example of Recovery:** Upon detecting a deadlock, the system chooses the transaction that has consumed the least amount of CPU time to abort and rollback.

## Izolace Transakcí V SQL

Transaction isolation levels in SQL databases are mechanisms that define the degree to which the operations within one transaction are isolated from those in other transactions. Isolation levels balance the need for concurrency with the need for data integrity and accuracy.

### SQL Standard Isolation Levels

SQL standard defines four levels of transaction isolation, each providing a different balance between performance and data integrity:

- **READ UNCOMMITTED:**
	- The lowest level of isolation.
	- Transactions may read changes made by other transactions before they are committed, leading to "dirty reads."
	- Example: A transaction T1 modifies a record. Another transaction T2 reads the modified record before T1 commits the change.

- **READ COMMITTED:**
	- Ensures that a transaction can only read data that has been committed by other transactions, preventing dirty reads.
	- However, it does not prevent non-repeatable reads, where a transaction reads the same record twice and gets different values.
	- Example: Transaction T1 reads a row. Transaction T2 updates or deletes that row and commits. If T1 reads the row again, it sees the changes made by T2.

- **REPEATABLE READ:**
	- Guarantees that if a transaction reads a row, any subsequent reads of that row within the same transaction will see the same data, preventing non-repeatable reads.
	- It does not fully prevent phantom reads, where a transaction reads a set of rows matching a search condition and a subsequent read returns additional rows that match the condition due to another transaction's insert.
	- Example: Transaction T1 reads rows that meet a condition. Transaction T2 inserts a new row that meets T1's condition and commits. If T1 repeats the query, it may see the new row.

- **SERIALIZABLE:**
	- The highest level of isolation.
	- Ensures complete isolation from other transactions, making it appear as if transactions were executed serially.
	- Prevents dirty reads, non-repeatable reads, and phantom reads.
	- Example: Transactions are executed in such a way that it is as if they were processed one after another, rather than concurrently.

### Setting Isolation Levels in SQL

The isolation level can be set at the start of a transaction in SQL using the `SET TRANSACTION ISOLATION LEVEL` command:

```sql
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN TRANSACTION;
-- Transaction operations
COMMIT;
```

### Trade-offs

- Higher isolation levels increase data integrity and consistency but can reduce concurrency and increase the likelihood of locking conflicts and deadlocks.
- Lower isolation levels improve performance and concurrency but at the risk of encountering data anomalies.