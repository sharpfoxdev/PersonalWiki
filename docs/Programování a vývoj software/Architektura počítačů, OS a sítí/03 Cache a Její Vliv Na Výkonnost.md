---
tags:
  - 
share: "true"
---

# 03 Cache a Její Vliv Na Výkonnost

## Asociativní Paměť

### Overview of Associative Memory (Cache)

- A type of fast memory used in computers to bridge the speed gap between the CPU and main memory.
- Stores frequently accessed data to reduce the average time to access data from the main memory.

### Types of Associative Memory

- **Fully Associative Cache**
	- Any block of main memory can be placed in any cache line.
	- Provides high flexibility but requires more complex hardware.
- **Direct-Mapped Cache**
	- Each block of main memory maps to exactly one cache line.
	- Simple to implement but can lead to more cache misses.
- **Set-Associative Cache**
	- A middle ground between fully associative and direct-mapped.
	- Memory blocks can be placed in a limited number of locations in the cache.

### Cache Hit and Miss

- **Cache Hit**
	- Occurs when the data requested by the CPU is found in the cache.
	- Leads to faster data access.
- **Cache Miss**
	- Happens when the requested data is not in the cache.
	- The data must be fetched from slower main memory.

### Cache Miss Types

- **Compulsory Miss**
	- Occurs when data is accessed for the first time.
- **Capacity Miss**
	- Happens when the cache cannot contain all the data needed.
- **Conflict Miss**
	- Occurs in direct-mapped and set-associative caches due to multiple data blocks competing for the same cache line.

### Cache Replacement Policies

- Decides which cache block to replace when a new block needs to be loaded.
- Common policies include Least Recently Used (LRU), First-In-First-Out (FIFO), and Random Replacement.

### Cache Coherence

- Ensures that multiple caches in a multi-processor system maintain a consistent view of the data.
- Crucial in multi-threading and parallel processing environments.

### Example of Cache Usage

- Consider a CPU that frequently accesses certain memory locations.
- These locations are cached, reducing the time taken for subsequent accesses.

### Impact on Performance

- A well-designed cache significantly reduces data access time, improving overall system performance.
- The effectiveness of a cache depends on its size, associativity, replacement policy, and the access patterns of the program.

