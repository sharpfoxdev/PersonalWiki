---
tags:
  - 
share: "true"
---

# 04 Provádění Instrukcí Procesorem

## Třídy Instrukčních Sad

### Overview of Instruction Set Classes

- Instruction sets define the operations that a processor can perform.
- Different classes of instruction sets are designed for various computing needs.

### Complex Instruction Set Computer (CISC)

- **Features**
	- Contains a large number of instructions, some of which are very complex.
	- Instructions can execute several low-level operations.
- **Advantages**
	- Rich instruction set to handle complex tasks directly.
	- Potentially more efficient use of memory.
- **Disadvantages**
	- More complex hardware design.
	- Potentially slower instruction execution due to complexity.

### Reduced Instruction Set Computer (RISC)

- **Features**
	- Emphasizes efficiency with a limited number of simple instructions.
	- Instructions typically complete in one clock cycle.
- **Advantages**
	- Simplified processor design leads to faster instruction execution.
	- Easier to optimize and parallelize.
- **Disadvantages**
	- May require more instructions for complex tasks.
	- Higher memory usage due to larger code size.

### Very Long Instruction Word (VLIW)

- **Features**
	- Encodes multiple operations in a single, long instruction word.
	- Relies on the compiler for instruction scheduling and parallelism.
- **Advantages**
	- Can exploit parallelism at the instruction level.
	- Simplifies the hardware by offloading complexity to the compiler.
- **Disadvantages**
	- Requires sophisticated compilers.
	- Less flexible in handling dynamic runtime conditions.

### Explicitly Parallel Instruction Computing (EPIC)

- **Features**
	- Similar to VLIW but provides more explicit parallelism control to the compiler.
	- Used in high-performance computing.
- **Advantages**
	- Maximizes parallel execution of instructions.
	- Efficient for complex and compute-intensive applications.
- **Disadvantages**
	- Highly dependent on advanced compiler technologies.
	- Complex programming model.

### Examples of Instruction Sets

- **CISC**: Intel x86 architecture.
- **RISC**: ARM architecture.
- **VLIW**: Intel Itanium architecture.
- **EPIC**: Also Intel Itanium architecture.

### Choosing an Instruction Set Class

- Depends on the application requirements, such as performance, power efficiency, and complexity.
- RISC architectures are common in mobile devices for their power efficiency.

### Impact on Software Development

- Different instruction sets influence the way programs are written and compiled.
- Assembly language programming requires an understanding of the specific instruction set used.

## Pipeline, Superskalarita, Out-of-order Execution

### Pipeline in Processor Architecture

- **Concept**
	- Divides instruction execution into several stages with different tasks.
	- Each stage processes a part of the instruction, similar to an assembly line.
- **Stages**
	- Typically includes Fetch, Decode, Execute, Memory Access, and Write-back stages.
- **Advantages**
	- Increases instruction throughput by processing multiple instructions simultaneously.
	- Reduces the execution time of individual instructions.
- **Challenges**
	- Pipeline hazards such as data hazards, control hazards, and structural hazards.

### Superscalar Architecture

- **Description**
	- A type of CPU architecture that allows multiple instructions to be executed in parallel.
- **Working Mechanism**
	- Has multiple execution units and can issue more than one instruction per clock cycle.
- **Advantages**
	- Significantly increases performance over scalar (single instruction per cycle) processors.
- **Challenges**
	- Complexity in design and increased power consumption.
	- Dependency and resource conflict resolution.

### Out-of-order Execution

- **Concept**
	- Allows the execution of instructions in an order different from their original program order.
- **Purpose**
	- To utilize CPU resources more effectively and reduce idle time.
- **Process**
	- Instructions are fetched and decoded in order but executed as resources become available.
	- Use of reservation stations and reordering buffers to manage execution.
- **Advantages**
	- Improves performance by overcoming instruction pipeline stalls.
- **Challenges**
	- Complexity in implementation and maintaining data consistency.

### Examples and Practical Implications

- **Pipeline**
	- Most modern CPUs use pipelining to improve instruction throughput.
- **Superscalar**
	- Intel Core and AMD Ryzen series processors.
- **Out-of-order Execution**
	- Common in high-performance processors to optimize resource usage.

### Impact on Software Performance

- Understanding these concepts helps in optimizing software to better utilize processor capabilities.
- Critical for system-level programming and performance optimization.

### Compiler's Role

- Compilers can optimize code to take advantage of pipelining and superscalar architectures.
- Instruction scheduling by compilers can help in reducing pipeline stalls.

