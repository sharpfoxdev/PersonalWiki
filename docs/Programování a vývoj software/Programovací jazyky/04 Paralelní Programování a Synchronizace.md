---
tags:
  - 
share: "true"
---

# 04 Paralelní Programování a Synchronizace

## Vlákna, Explicitní a Implicitní Vznik a Zánik Vláken

Threads are a fundamental unit of CPU utilization that form the basis of multithreaded processing. In the context of programming, threads can be created explicitly by the programmer or implicitly by certain libraries or runtime environments.

### Explicit Creation and Termination of Threads

- **Explicit Creation:** In many programming languages, threads are created explicitly using specific API calls. For example, in C++11 and beyond, threads can be created using the `std::thread` class.

    ```cpp
    #include <thread>
    #include <iostream>

    void threadFunction() {
        std::cout << "Hello from thread!" << std::endl;
    }

    int main() {
        std::thread t(threadFunction);
        t.join(); // Wait for the thread to finish
        return 0;
    }
    ```

  This example demonstrates the explicit creation of a thread that executes `threadFunction`. The `join` method is used to wait for the thread to complete, which is a form of explicit termination management.

- **Explicit Termination:** Threads can be explicitly terminated by returning from the thread function or by calling exit methods provided by the language or framework. It's crucial to ensure resources are properly released and synchronized upon thread termination.

### Implicit Creation and Termination of Threads

- **Implicit Creation:** Certain high-level operations, libraries, or runtime environments implicitly create threads. For example, parallel algorithms in C++17, Java's Fork/Join framework, or using asynchronous operations in .NET may handle thread creation behind the scenes.

    ```cpp
    #include <vector>
    #include <algorithm>
    #include <execution>

    int main() {
        std::vector<int> vec = {1, 2, 3, 4, 5};
        std::for_each(std::execution::par, vec.begin(), vec.end(), [](int& n){ n *= 2; });
        return 0;
    }
    ```

  In this C++ example, `std::for_each` with `std::execution::par` policy implicitly uses threads to parallelize the operation.

- **Implicit Termination:** Threads created implicitly are usually managed by the environment that spawned them, including their termination. The programmer might not need to explicitly join or manage these threads, as the runtime ensures they are correctly synchronized and terminated.

### Considerations for Using Threads

- **Resource Management:** Both explicit and implicit thread management require careful consideration of resources and synchronization to avoid issues like deadlocks, race conditions, and data corruption.
- **Performance vs. Complexity:** While threading can significantly improve application performance, it also increases complexity and the potential for bugs. It's essential to balance the need for parallelism with the added complexity.
- **Synchronization Mechanisms:** Proper synchronization mechanisms (e.g., mutexes, semaphores, condition variables) are crucial for managing access to shared resources and ensuring thread-safe operations.

## Prostředky pro Implicitní (synchronized, atomic) Synchronizaci

Implicit synchronization mechanisms are designed to simplify the development of thread-safe programs by managing access to shared resources without requiring explicit lock management by the programmer.

### Synchronized Blocks

- **Overview:** A `synchronized` block restricts access to a particular section of code or resource to one thread at a time. In languages like Java, `synchronized` can be applied to methods or blocks of code.
- **Usage in Java:**

    ```java
    public synchronized void updateSharedResource() {
        // Only one thread can execute this at a time
    }

    public void someMethod() {
        synchronized(this) {
            // Code here is synchronized on the instance
        }
    }
    ```

  `synchronized` ensures that once a thread enters a synchronized method or block, no other thread can enter any other synchronized method or block on the same object.

### Atomic Operations

- **Overview:** Atomic operations are executed in a single step from the point of view of other threads. Operations like reading, writing, incrementing, or comparing and swapping are done atomically to prevent race conditions.
- **Usage in C++:**

    ```cpp
    #include <atomic>

    std::atomic<int> counter(0);

    void incrementCounter() {
        counter.fetch_add(1, std::memory_order_relaxed); // Atomically increments counter
    }
    ```

  Atomic variables in C++ provide a lock-free way to implement thread-safe operations on single variables without the overhead of mutexes.

### Benefits of Implicit Synchronization

- **Simplicity:** Reduces the complexity of writing thread-safe code by abstracting away the explicit locking mechanisms.
- **Safety:** Minimizes the risk of deadlocks and other synchronization-related bugs by managing the lock lifecycle automatically.
- **Performance:** Especially with atomic operations, can offer better performance compared to explicit locking in certain scenarios due to reduced overhead.

### Considerations

- **Overhead:** While simpler, using `synchronized` can lead to performance bottlenecks if overused or used inappropriately due to locking overhead.
- **Atomicity Limits:** Atomic operations are generally limited to single variables. Complex operations involving multiple variables or objects still require careful synchronization.
- **Correct Usage:** Misuse of implicit synchronization features can still lead to concurrency issues. Understanding the underlying model (e.g., memory visibility in Java with `synchronized`, memory order with C++ atomics) is crucial.

## Prostředky pro Explicitní (mutex, condition_variable, semaphore) Synchronizaci

Explicit synchronization mechanisms are essential in parallel programming for coordinating thread interactions to ensure safe access to shared resources and proper sequencing of operations.

### Mutex (Mutual Exclusion)

- **Purpose:** A mutex is used to protect shared data by ensuring that only one thread can access the data at any given time. When a thread locks a mutex, other threads are blocked from accessing the protected section until the mutex is unlocked.
- **Usage in C++:**

    ```cpp
    #include <mutex>

    std::mutex mtx; // Mutex for protecting shared data

    void updateSharedResource() {
        mtx.lock(); // Acquiring the mutex
        // Code to modify shared resource
        mtx.unlock(); // Releasing the mutex
    }
    ```

  C++ also supports `std::lock_guard` and `std::unique_lock` for exception-safe mutex management.

### Condition Variable

- **Purpose:** Condition variables are used for thread synchronization, allowing threads to wait for certain conditions to become true. They are typically used in conjunction with a mutex to synchronize access to a shared variable.
- **Usage in C++:**

    ```cpp
    #include <mutex>
    #include <condition_variable>

    std::mutex mtx;
    std::condition_variable cv;
    bool ready = false;

    void worker() {
        std::unique_lock<std::mutex> lck(mtx);
        cv.wait(lck, []{ return ready; }); // Wait until 'ready' becomes true
        // Proceed when condition is met
    }

    void signal() {
        {
            std::lock_guard<std::mutex> lck(mtx);
            ready = true;
        }
        cv.notify_all(); // Notify waiting threads
    }
    ```

### Semaphore

- **Purpose:** A semaphore controls access to a resource by maintaining a set of permits. Threads can acquire a permit to proceed and release it when done. It's useful for limiting the number of threads accessing a particular resource.
- **Usage in C++ (C++20 and later):**

    ```cpp
    #include <semaphore>

    std::counting_semaphore<5> sem(5); // Semaphore with 5 permits

    void accessResource() {
        sem.acquire(); // Acquire a permit
        // Access the shared resource
        sem.release(); // Release the permit
    }
    ```

### Benefits of Explicit Synchronization

- **Control and Flexibility:** Provides fine-grained control over thread synchronization and resource access, allowing for more flexible and efficient multithreaded designs.
- **Scalability:** Facilitates the development of scalable multithreaded applications by managing the execution flow and resource access among numerous concurrent threads.

### Considerations

- **Complexity:** Proper use of explicit synchronization mechanisms requires a deep understanding of concurrency concepts, which can increase the complexity of the code.
- **Deadlocks and Starvation:** Incorrect usage can lead to deadlocks, where two or more threads are waiting indefinitely for each other to release resources, or starvation, where some threads are never able to acquire the necessary resources.
- **Performance Overhead:** Synchronization primitives introduce overhead, which can impact the performance of the application, especially if not used judiciously.

## Paralelní Cykly, Paralelně Implementované Knihovní Funkce

Parallel loops and parallel library functions allow for the distribution of computational tasks across multiple threads, taking advantage of multi-core and multi-threaded processing units to enhance performance and reduce execution time.

### Parallel Loops

- **Overview:** Parallel loops divide the iteration space of a loop into segments that can be executed concurrently. Each segment of iterations can be processed by a separate thread.
- **Usage in C++ with OpenMP:**

    ```cpp
    #pragma omp parallel for
    for(int i = 0; i < N; ++i) {
        // Parallel loop body
    }
    ```

  This OpenMP directive instructs the compiler to execute the loop iterations in parallel, automatically handling thread creation, execution, and synchronization.

### Parallel Library Functions

- **Overview:** Many modern programming languages and libraries offer functions that are implemented to run in parallel, abstracting the complexity of manually managing threads.
- **C++ Standard Library (since C++17):** The C++ Standard Library includes parallel algorithms that can be used to perform standard operations (e.g., sort, for_each) in parallel.

    ```cpp
    #include <algorithm>
    #include <vector>
    #include <execution>
    
    std::vector<int> vec = { /* ... */ };
    std::sort(std::execution::par, vec.begin(), vec.end());
    ```

  This example uses the parallel execution policy to sort a vector in parallel, potentially reducing the sort time significantly on multi-core systems.

### Benefits of Parallel Execution

- **Performance Gains:** The most significant advantage is the potential for substantial performance improvements, especially for compute-intensive tasks that can be easily parallelized.
- **Efficiency:** Efficient utilization of available hardware resources by spreading work across multiple cores or processors.
- **Simplicity:** High-level abstractions for parallel execution, such as parallel loops and library functions, simplify the development of parallel applications by abstracting thread management and synchronization.

### Considerations

- **Data Dependencies:** Care must be taken to manage data dependencies between iterations or function calls to avoid race conditions and ensure correctness.
- **Overhead:** Parallel execution introduces overhead due to thread management and synchronization. The benefits of parallelization must outweigh these costs, which is typically the case for large, compute-intensive tasks.
- **Scalability:** The scalability of parallel applications can be limited by factors such as the algorithm's nature, the problem size, and the hardware architecture.

## Další Abstrakce Paralelismu (task, future/promise)

### Tasks

- **Overview:** A task represents an asynchronous operation. Instead of manually creating threads, tasks allow you to define a unit of work that runs concurrently with the main program flow.
- **Benefits:** Simplifies thread management by abstracting away the explicit creation and synchronization of threads. It allows for easier composition of concurrent operations.
- **Usage in C++:**

```cpp
#include <future>

int compute() {
	// Expensive computation
	return 42;
}

int main() {
	auto future = std::async(compute);
	// Continue with other work
	int result = future.get(); // Wait for the compute task to finish
	return 0;
}
```

### Futures and Promises

- **Futures:** Provide a mechanism to access the result of asynchronous operations. A future represents the read-end of a value that is computed asynchronously.
- **Promises:** Act as the write-end of the asynchronous operation. A promise is used to set the value or exception that the future will hold.
- **Benefits:** Facilitate communication and data transfer between asynchronous tasks, allowing tasks to produce results that can be consumed by other parts of the program once they are ready.
- **Usage in C++:**

    ```cpp
    #include <future>
    #include <iostream>

    void producer(std::promise<int> promise) {
        // Simulate work
        promise.set_value(42); // Set the result of computation
    }

    void consumer(std::future<int> future) {
        std::cout << "Result: " << future.get() << std::endl; // Access the result
    }

    int main() {
        std::promise<int> promise;
        std::future<int> future = promise.get_future();
        std::thread t1(producer, std::move(promise));
        std::thread t2(consumer, std::move(future));
        t1.join();
        t2.join();
        return 0;
    }
    ```

### Considerations

- **Synchronization Overhead:** While futures and promises abstract away many synchronization details, they still introduce overhead. Use them judiciously, especially in performance-critical sections.
- **Error Handling:** Futures and promises provide mechanisms for propagating exceptions from producer tasks to consumer tasks, which must be properly handled to prevent runtime errors.
- **Task Granularity:** The efficiency of using tasks depends on the granularity of the work being performed. Fine-grained tasks may introduce more overhead than the performance gain from parallel execution.

