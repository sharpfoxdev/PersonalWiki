---
tags:
  - 
share: "true"
---

# 05 Operační Systémy

## Kooperativní a Preemptivní Přepínání Kontextu

### Context Switching Overview

- A process where the CPU switches from executing one process or thread to another.
- Essential for multitasking in operating systems.

### Cooperative (Voluntary) Context Switching

- **Definition**
	- The process voluntarily yields control to the operating system.
- **Mechanism**
	- Occurs when a process is idle or in a waiting state.
- **Advantages**
	- Simpler to implement.
	- Lower overhead as context switches are less frequent.
- **Disadvantages**
	- One misbehaving process can hog the CPU, affecting the whole system.
- **Example**
	- Classic Windows and Mac OS systems.

### Preemptive Context Switching

- **Definition**
	- The operating system forcibly takes control from a running process.
- **Mechanism**
	- Uses a timer interrupt to periodically make decisions about which process to execute next.
- **Advantages**
	- Ensures fair use of the CPU among all processes.
	- More responsive for time-sensitive applications.
- **Disadvantages**
	- Higher complexity and overhead due to frequent context switches.
- **Example**
	- Modern operating systems like Windows 10, Linux, and macOS.

### Comparison of Cooperative and Preemptive

- **Control**
	- Cooperative: Control is with the process.
	- Preemptive: Control is with the operating system.
- **Responsiveness**
	- Cooperative: Less responsive to newly ready tasks.
	- Preemptive: More responsive to task priorities.
- **Stability**
	- Cooperative: Less stable as a single process can affect the whole system.
	- Preemptive: More stable and fair to all processes.

### Context Switching Overhead

- Context switching involves saving and restoring the state (context) of processes, which incurs overhead.
- Includes saving registers, program counters, and other process-specific data.

### Impact on System Performance

- Frequent context switches can lead to a situation called 'thrashing,' where excessive time is spent on context switching.
- Optimal context switching improves CPU utilization and system responsiveness.

### Best Practices for Programmers

- Write efficient code to minimize unnecessary context switches.
- Utilize synchronization primitives effectively in preemptive environments.

## Souborové Systémy

### Overview of File Systems

- Integral part of operating systems, managing how data is stored and retrieved.
- Provide an abstraction to store data in files and directories.

### Basic Concepts

- **File**
	- A collection of data stored on a storage device.
	- Identified by names, extensions, and paths.
- **Directory**
	- A system used to organize files into a hierarchical structure.
- **Path**
	- Specifies the location of a file or directory.

### Types of File Systems

- **Disk-Based File Systems**
	- Stores data on magnetic or solid-state drives.
	- Examples: NTFS (Windows), EXT4 (Linux), HFS+ (macOS).
- **Network File Systems**
	- Enable access to files over a network.
	- Examples: NFS, SMB/CIFS.
- **Virtual File Systems**
	- Provides a uniform interface to various types of file systems.
- **Distributed File Systems**
	- Spread data across multiple physical locations, often in a cloud environment.

### File System Operations

- **Creating, Reading, Writing, and Deleting Files**
- **Creating and Removing Directories**
- **Managing Permissions**
- **Navigating the Directory Structure**

### File Allocation Methods

- **Contiguous Allocation**
	- Stores files as continuous blocks of data.
- **Linked Allocation**
	- Uses pointers to link scattered blocks.
- **Indexed Allocation**
	- Uses an index block to track file fragments.

### File System Integrity and Recovery

- Mechanisms like journaling and versioning to prevent data loss.
- Tools for file recovery and disk repair.

### File System Performance

- Factors like block size, caching mechanisms, and allocation strategies affect performance.
- Modern file systems use advanced techniques like defragmentation, compression, and caching to enhance performance.

### Security and Access Control

- Mechanisms like permissions, user groups, and encryption to secure files.
- Access Control Lists (ACLs) provide fine-grained control.

### Examples and Use Cases

- **NTFS**: Common in Windows, supports large files and advanced security features.
- **EXT4**: Widely used in Linux, known for stability and performance.
- **APFS**: Used in macOS and iOS devices, designed for solid-state drives and encryption.

### Impact on Operating System Performance

- The efficiency of the file system directly impacts the overall performance of the operating system.

### Best Practices for Users and Administrators

- Regular backups and maintenance.
- Understanding the limitations and features of the file system in use.

## Pevný Disk, Plánovací Algoritmy pro Pohyb Hlavy Pevného Disku

### Hard Disk Overview

- A hard disk drive (HDD) is a data storage device used for storing and retrieving digital information.
- Uses rotating disks (platters) coated with magnetic material.

### Components of a Hard Disk

- **Platters**: The circular disks where data is magnetically stored.
- **Read/Write Head**: The tool that reads data from and writes data to the disk platters.
- **Spindle**: A motor that spins the platters.
- **Actuator Arm**: Moves the read/write head over the disk surface.

### HDD Access Time Components

- **Seek Time**: Time to move the heads to the correct track.
- **Rotational Latency**: Time waiting for the rotation of the disk to bring the required sector under the read/write head.
- **Transfer Time**: Time to read or write the actual data.

### Disk Scheduling Algorithms

- Algorithms used to determine the order in which disk I/O requests are processed.
- **First-Come, First-Served (FCFS)**
	- Processes requests in the order they arrive.
	- Simple but can lead to long wait times.
- **Shortest Seek Time First (SSTF)**
	- Selects the request closest to the current head position.
	- Reduces average seek time but can cause starvation of some requests.
- **SCAN (Elevator Algorithm)**
	- Moves the head across the entire disk, servicing requests along the way.
	- Turns around when it reaches the end of the disk.
	- Provides a more uniform wait time compared to SSTF.
- **C-SCAN (Circular SCAN)**
	- Similar to SCAN but only services requests in one direction.
	- After reaching the end, it quickly returns to the beginning and starts the scan again.
	- More consistent wait times compared to SCAN.
- **LOOK and C-LOOK Variants**
	- Similar to SCAN and C-SCAN but the head only goes as far as the furthest request.
	- Reduces unnecessary movement of the disk head.
- **Example of Disk Scheduling**
	- Given a set of disk requests, use these algorithms to determine the order of servicing to minimize total head movement.
- **Factors Influencing Algorithm Choice**
	- Workload characteristics.
	- Importance of reducing latency vs. fairness.
- **Impact on System Performance**
	- Efficient disk scheduling can significantly improve I/O performance and overall system efficiency.
- **Modern Considerations**
	- With the advent of SSDs (Solid State Drives), the relevance of these algorithms has changed, as SSDs don't have moving parts.

## Segmentace, Sdílená Paměť, Paměťově Mapované Soubory

// TODO: maybe make this more thorough

### Segmentation

- **Definition**
	- A memory management technique that divides memory into different segments, each with a specific function or type of data.
- **How It Works**
	- Memory is divided into segments such as code, stack, heap.
	- Each segment is allocated its own address space.
- **Advantages**
	- Simplifies handling different types of data.
	- Can provide protection by limiting access to specific segments.
- **Disadvantages**
	- Can lead to external fragmentation.
	- Overhead of managing segments.

### Shared Memory

- **Concept**
	- A memory sharing technique where multiple processes can access the same physical memory.
- **Uses**
	- Commonly used for inter-process communication (IPC).
- **Advantages**
	- Efficient data sharing between processes without the need for data copying.
	- Faster than other IPC methods like message passing.
- **Challenges**
	- Synchronization is required to manage concurrent access.
	- Potential security risks if not properly managed.

### Memory-Mapped Files

- **Definition**
	- A method of accessing file content as if it were part of the main memory.
- **Mechanism**
	- A file is mapped to a segment of memory, and the file's content can be accessed via pointers.
- **Advantages**
	- Efficient file access and manipulation.
	- Simplifies file I/O by treating file data as part of the program’s memory.
- **Uses**
	- Often used for large file processing, shared memory, and databases.
- **Operating System Support**
	- Most modern operating systems provide APIs for memory-mapped files.

### Example and Application

- **Segmentation**
	- A process might have separate segments for its code and data, with different protection levels.
- **Shared Memory**
	- Two processes communicating via a shared memory area for quick data exchange.
- **Memory-Mapped Files**
	- A large database file is memory-mapped for faster search and retrieval operations.

### Best Practices

- **Segmentation**
	- Properly size and manage segments to minimize fragmentation.
- **Shared Memory**
	- Implement robust synchronization mechanisms.
- **Memory-Mapped Files**
	- Ensure proper file closing and error handling.

