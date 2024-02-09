---
tags:
  - 
share: "true"
---

# 06 Paralelismus, Vlákna a Rozhraní pro Jejich Správu, Synchronizace Vláken

## Časově Závislé Chyby (race conditions)

- **Definition of Race Conditions**
	- Occur when two or more threads access shared data and try to change it at the same time.
	- The outcome depends on the sequence or timing of the threads’ execution.

- **Causes of Race Conditions**
	- Lack of proper synchronization when accessing shared resources.
	- Multiple threads executing read-modify-write operations simultaneously.

- **Examples of Race Conditions**
	- **Bank Account Transactions**: Two threads simultaneously updating the balance of a bank account can lead to incorrect balance if not properly synchronized.
	- **Counter Increment**: Multiple threads incrementing a shared counter without synchronization can result in a lost update.

- **Identifying Race Conditions**
	- Look for shared data accessed by multiple threads without synchronization.
	- Code segments where the order of execution impacts the outcome.

- **Consequences of Race Conditions**
	- Inconsistent data states.
	- Unpredictable and erroneous program behavior.
	- Difficult to debug due to nondeterministic nature.

- **Preventing Race Conditions**
	- Implement synchronization mechanisms like mutexes, semaphores, or locks.
	- Use atomic operations for critical sections.
	- Design thread-safe algorithms and data structures.

- **Synchronization Mechanisms**
	- **Mutexes (Mutual Exclusion)**
		- Ensure that only one thread accesses a resource at a time.
	- **Semaphores**
		- Can control access to a resource by multiple threads.
	- **Locks**
		- Guard blocks of code to ensure only one thread executes them at a time.

- **Best Practices**
	- Minimize the scope of shared data and critical sections.
	- Prefer higher-level synchronization primitives or language constructs.
	- Regularly review and test multithreaded code for potential race conditions.

- **Practical Implication**
	- Essential consideration in multithreaded and parallel programming environments.
	- Critical for ensuring data integrity and reliable program execution in concurrent applications.

## Kritická Sekce, Vzájemné Vyloučení

- **Critical Section**
	- A part of the code where threads access shared resources (like variables, files).
	- Requires synchronization to prevent concurrent access, which can lead to race conditions.

- **Mutual Exclusion**
	- Concept that ensures only one thread executes in a critical section at a time.
	- Prevents simultaneous access to shared resources.

- **Implementation of Mutual Exclusion**
	- **Locks**
		- Most basic mechanism to protect critical sections.
		- When a thread enters a critical section, it locks it. Other threads must wait until the lock is released.
	- **Mutexes**
		- Similar to locks but provide ownership, i.e., only the thread that locked the mutex can unlock it.
	- **Semaphores**
		- A more flexible mechanism where a counter is used to control access.
		- Binary semaphore (value 0 or 1) is similar to a lock.

- **Example of Critical Section**
	- Updating a shared counter:
		- Without synchronization, two threads incrementing the counter simultaneously might lead to incorrect results.
		- With a mutex lock, the threads will increment the counter safely one after the other.

- **Deadlocks in Mutual Exclusion**
	- A situation where multiple threads are waiting for resources held by each other, leading to a standstill.
	- Requires careful design to avoid, such as acquiring locks in a consistent order.

- **Deadlock Prevention**
	- Implementing lock hierarchies.
	- Using timeout mechanisms for acquiring locks.

- **Starvation and Fairness**
	- Ensuring all threads get a chance to enter their critical sections.
	- Fairness mechanisms may be required to prevent starvation, where a thread never gets access to the critical section.

- **Best Practices**
	- Keep critical sections as short as possible.
	- Use higher-level abstractions like concurrent collections or atomic operations where appropriate.

## Základní Sychronizační Primitiva, Jejich Rozhraní a Použití

### Zámky

- **Definition of Locks**
	- Locks are synchronization primitives used to control access to a shared resource by multiple threads.
	- Ensure that only one thread at a time can execute a particular section of code (critical section).

- **Basic Operations of Locks**
	- **Acquire**: A thread acquires the lock before entering a critical section.
	- **Release**: The lock is released after the thread exits the critical section.

- **Types of Locks**
	- **Simple Locks (Spinlocks)**
		- A basic lock where a thread spins in a loop and checks repeatedly if the lock is available.
	- **Blocking Locks**
		- A thread is put to sleep if the lock is not available, reducing CPU usage compared to spinlocks.

- **Lock Usage**
	- Used to protect data structures or code segments where concurrent access could cause inconsistency.
	- Example: Using a lock to protect a shared counter or a linked list from concurrent modifications.

- **Deadlock and Locks**
	- A deadlock can occur if multiple locks are acquired in an inconsistent order by different threads.
	- Careful lock management and lock ordering strategies are necessary to prevent deadlocks.

- **Starvation and Locks**
	- Starvation happens when a thread is unable to acquire a lock for a prolonged period because other threads are continuously holding the lock.
	- Fair locking mechanisms or lock timeouts can help prevent starvation.

- **Lock Granularity**
	- Refers to the size of the data or code segment being protected by the lock.
	- Fine-grained locks protect small segments, reducing contention but increasing overhead.
	- Coarse-grained locks protect large segments, reducing overhead but increasing contention.

- **Best Practices for Using Locks**
	- Keep the locked section (critical section) as small as possible.
	- Avoid holding a lock during a lengthy operation or I/O.
	- Be mindful of the order in which locks are acquired.

- **Practical Example: Database Transaction**
	- Locks are used in database management systems to ensure that transactions are processed correctly without interference from other transactions.

- **Importance in Multithreading**
	- Locks are essential for ensuring data integrity and consistency in multithreaded environments.

### Aktivní a Pasivní Čekání

- **Active Waiting**
	- Also known as busy-waiting or spinning.
	- A thread in a loop continuously checks if a condition is met or if a resource is available.
	- Consumes CPU cycles while waiting.
	- **Usage**
		- Typically used in scenarios where the wait time is expected to be very short.
		- Common in low-level programming or when dealing with spinlocks.
	- **Pros and Cons**
		- Pros: Immediate response when the condition is met.
		- Cons: Wastes CPU cycles, inefficient for longer wait times.

- **Passive Waiting**
	- Involves putting the thread to sleep, yielding the CPU to other threads.
	- The thread is woken up when the condition is met or the resource becomes available.
	- **Usage**
		- Preferred in high-level applications and multithreading environments.
		- Common with blocking synchronization primitives like mutexes or semaphores.
	- **Pros and Cons**
		- Pros: More efficient use of CPU resources, better for longer wait times.
		- Cons: Slightly slower response time as the thread needs to be woken up.

- **Examples**
	- **Active Waiting**: A thread repeatedly checking the status of a shared flag in a tight loop.
	- **Passive Waiting**: A thread waiting on a condition variable and being put to sleep until another thread signals the condition.

- **Choosing Between Active and Passive Waiting**
	- Depends on the expected wait time and the application's requirements for CPU usage.
	- Active waiting may be suitable for real-time systems where immediate response is critical.
	- Passive waiting is generally preferred for general-purpose computing to allow better CPU utilization.

- **Best Practices**
	- Avoid active waiting in multi-threaded applications unless necessary.
	- Employ passive waiting along with proper synchronization mechanisms to ensure efficient multi-threading.
