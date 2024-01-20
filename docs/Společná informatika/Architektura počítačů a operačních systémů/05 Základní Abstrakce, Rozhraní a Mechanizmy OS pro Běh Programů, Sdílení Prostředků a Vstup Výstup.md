---
tags:
  - 
share: "true"
---

# 05 Základní Abstrakce, Rozhraní a Mechanizmy OS pro Běh Programů, Sdílení Prostředků a Vstup Výstup

## Neprivilegované (uživatelské) Procesy

### Definition and Characteristics

- **Unprivileged Processes**
	- Operate with limited system permissions.
	- Cannot directly access hardware or kernel space resources.
- **Security and Stability**
	- Isolation from critical system components to maintain security and system stability.
- **Resource Access**
	- Access resources through system calls, which the kernel mediates.

### Execution and Management

- **Context Switching**
	- OS switches CPU between multiple processes, allowing concurrent execution.
- **Scheduling**
	- OS decides the order of process execution based on scheduling algorithms.
- **Memory Management**
	- Virtual memory and paging techniques are used to allocate memory space.

### System Calls and API

- **System Calls**
	- Interface between unprivileged processes and the OS for resource requests.
- **Standard API**
	- Provides a set of functions for performing common tasks like file I/O, network communication.
- **Examples**
	- `read()`, `write()`: For file I/O operations.
	- `fork()`, `exec()`: For process creation and execution.

### Process Life Cycle

- **Creation**
	- Process is created using system calls like `fork()` or `CreateProcess()`.
- **Execution**
	- Process executes its code, possibly making additional system calls.
- **Termination**
	- Process completes execution or is terminated by the OS or another process.
- **States**
	- New, Ready, Running, Waiting, Terminated.

### Communication and Synchronization

- **Inter-process Communication (IPC)**
	- Mechanisms like pipes, message queues, shared memory for process communication.
- **Synchronization**
	- Tools like mutexes, semaphores, and monitors to manage access to shared resources.

### Resource Sharing

- **File System**
	- Shared access to files with permissions and locks.
- **Shared Memory**
	- Allows processes to access common memory areas.
- **Device Access**
	- Managed through drivers and system calls, ensuring fair and safe access.

### User Process Limitations

- **Restricted Operations**
	- Limited to operations that do not compromise system integrity.
- **Dependency on Kernel**
	- Reliance on the kernel for system-level operations and hardware interactions.

### Practical Example: Web Browser

- **As a User Process**
	- Runs in unprivileged mode, interacting with OS for network access, display rendering.
- **System Calls Usage**
	- Makes system calls for network I/O, file access (like cache management), and user input handling.

## Sdílení Procesoru

### Procesy, Vlákna, Kontext Procesu a Vlákna

- **Processes**
	- Independent execution entities in an operating system.
	- Have their own memory space.
	- Example: A web browser running as a separate process.
- **Threads**
	- Lighter, more granular units of execution within a process.
	- Share the process's memory and resources.
	- Example: Different tabs in a web browser may be different threads within the same process.
- **Process Context**
	- Encompasses all information the OS needs to manage the process.
		- Includes program counter, registers, process state, memory pointers.
	- Stored when a process is not actively executing (during context switch).
- **Thread Context**
	- Subset of the process context.
	- Contains thread-specific data like stack, registers, thread state.
	- Allows for faster context switches than full process context switches.

### Přepínání Kontextu, Kooperativní a Preemptivní Multitasking

- **Context Switching**
	- The act of saving the state of a currently running process or thread so another process or thread can run.
	- Involves storing and restoring register values, program counter, and memory state.
	- Essential for multitasking as it allows the CPU to switch between tasks efficiently.

- **Cooperative Multitasking**
	- Tasks voluntarily yield control to the operating system.
	- The OS waits for the process to reach a stopping point before initiating a context switch.
	- Pros: Simple to implement, tasks have control over their execution.
	- Cons: A single misbehaving process can freeze the entire system.
	- Example: Older versions of Windows (pre-Windows 95).

- **Preemptive Multitasking**
	- The operating system decides when a context switch should occur, typically based on time-slicing.
	- Processes are forcibly paused and resumed to allow sharing of CPU time.
	- Pros: More efficient CPU utilization, no single process can monopolize CPU time.
	- Cons: More complex to implement, requires careful management to prevent issues like race conditions.
	- Example: Modern operating systems like Windows 10, Linux.

- **Practical Considerations**
	- **Performance**: Context switching is resource-intensive and can affect performance.
	- **Resource Sharing**: In a preemptive environment, care must be taken to synchronize access to shared resources.
	- **Real-time Applications**: Require careful handling in preemptive systems to ensure time-critical tasks are executed promptly.

### Plánování Běhu Procesů a Vláken, Stavy Vlákna

- **Scheduling of Processes and Threads**
	- Determines the order in which processes or threads are given CPU time.
	- Balances factors like efficiency, priority, and fairness.
	- Common Scheduling Algorithms:
		- *Round Robin*: Time slices are assigned to each process in equal portions and in a circular order.
		- *First-Come, First-Served (FCFS)*: Processes are scheduled in the order of their arrival.
		- *Shortest Job First (SJF)*: Executes the shortest jobs first to minimize waiting time.
		- *Priority Scheduling*: Processes are scheduled based on priority, with higher priority processes running first.
		- *Multilevel Queue Scheduling*: Multiple queues for different priority levels.

- **Thread States (Stavy Vlákna)**
	- *New*: Thread is created but not yet started.
	- *Runnable*: Thread is ready to run and waiting for CPU time.
	- *Running*: Thread is currently being executed.
	- *Blocked/Waiting*: Thread is waiting for resources or I/O to complete.
	- *Terminated/Dead*: Thread has completed execution or has been stopped.

- **Practical Example: Operating System Kernel**
	- The OS kernel typically contains the scheduler that manages process and thread execution.
	- Example: Linux kernel using a completely fair scheduler (CFS) for process and thread scheduling.

## Sdílení Paměti

### Vysvětlit Rozdíl Mezi Virtuální a Fyzickou Adresou a Identifikovat, Zda Se V Zadaném Kontextu Či Fragmentu Kódu Používá Virtuální Nebo Fyzická Adresa

- **Virtual vs. Physical Address**
	- **Virtual Address**
		- Used by programs and seen by the operating system.
		- Allows each process to have its own address space, improving security and isolation.
		- Mapped to physical addresses through mechanisms like paging.
	- **Physical Address**
		- The actual address in the computer's memory hardware (RAM).
		- Used by the hardware to physically access memory cells.

- **Benefits of Virtual Memory**
	- Provides abstraction of the physical memory.
	- Enables safe memory sharing between processes.
	- Allows larger memory space than physically available (using disk as extended memory).

- **Identifying Virtual and Physical Addresses**
	- In High-Level Code: Addresses used are typically virtual.
		- Example: Pointers in C or C++.
	- In System-Level Code: May access physical addresses directly.
		- Example: Device drivers or operating system kernel code.
	- Indications in Code:
		- Use of memory management functions indicates virtual addresses.
		- Direct manipulation of hardware registers often involves physical addresses.

- **Address Translation**
	- Performed by Memory Management Unit (MMU).
	- Translates virtual addresses to physical addresses during execution.

- **Example: Operating Systems**
	- When a program accesses memory, it uses virtual addresses.
	- The OS, with the help of the MMU, translates these to physical addresses.

- **Example: Embedded Systems**
	- Often use physical addressing due to limited or no operating system support.

### Na Zadaném Příkladu Identifikovat a Vysvětlit Význam Komponent Virtuální a Fyzické Adresy (číslo Stránky, Číslo Rámce, offset)

- **Virtual and Physical Address Components**
	- Virtual and physical addresses are divided into components that facilitate memory management and access.

- **Page Number (Číslo Stránky) in Virtual Address**
	- Refers to the number assigned to a specific page in the virtual memory.
	- A page is a fixed-size block of memory used in paging.
	- Example: In a virtual address `0x1234`, if the page size is `4KB`, the higher-order bits represent the page number.

- **Frame Number (Číslo Rámce) in Physical Address**
	- Similar to the page number but refers to a frame in physical memory.
	- Frames are the physical counterpart of pages.
	- Example: If the physical address is `0x5678` and the frame size is `4KB`, the higher-order bits represent the frame number.

- **Offset**
	- Represents the exact location within a page (virtual) or a frame (physical).
	- The offset is the same in both virtual and physical addresses if the page and frame sizes are equal.
	- Example: In both `0x1234` and `0x5678` addresses, if the offset size is `12 bits`, the lower 12 bits represent the offset within the page or frame.

- **Address Translation Example**
	- When a virtual address needs to be accessed, the memory management unit (MMU) translates the page number to a frame number, keeping the offset the same.
	- Example: A virtual address `0x1234` may be translated to a physical address `0x5678` where `0x12` (page number) is mapped to `0x56` (frame number), and `0x34` is the offset.

- **Significance in OS Memory Management**
	- This division and mapping facilitate efficient memory use, allowing the operating system to manage memory access, swapping, and paging.
	- Enhances system stability and security by abstracting physical memory and preventing unauthorized access.

### Pro Konkrétní Adresy a Obsah Jednoúrovňové Stránkovací Tabulky Řešit Úlohy Překladu Adres

// TODO check that this is correct, it looks iffy
- **Overview of Single-Level Paging**
	- Involves mapping virtual addresses to physical addresses using a paging table.
	- Each entry in the table maps a virtual page to a physical frame.

- **Components of Address Translation**
	- **Page Number**: Identifies the virtual page.
	- **Frame Number**: Identifies the corresponding physical frame.
	- **Offset**: The same in both virtual and physical addresses, indicating the position within the page or frame.

- **Example Address Translation Task**
	- Given:
		- Virtual Address: `0x1234`
		- Page Size: `4KB` (implies 12-bit offset as 4KB = 2^12 bytes)
		- Paging Table: Maps page `0x12` to frame `0x3A`
	- Task:
		- Translate the given virtual address to its corresponding physical address.
	- Solution:
		- Extract Page Number: `0x12` from `0x1234`
		- Find corresponding Frame Number in Paging Table: `0x3A`
		- Combine Frame Number with Offset: Frame `0x3A` + Offset `0x34` = Physical Address `0x3A34`

- **Practical Implications**
	- **Efficiency**: Quick access to the paging table for translation.
	- **Memory Management**: Allows the OS to efficiently manage memory, especially in multi-tasking environments.
	- **Security**: Prevents direct access to physical memory by user processes.

- **Advanced Scenarios**
	- Handling Page Faults: Occurs when a page is not in the memory, requiring loading from disk.
	- Multi-level Paging: Involves multiple levels of paging tables, used in systems with large address spaces.

### Vysvětlit Roli Virtuálních Adresových Prostorů V Ochraně Paměti Procesů a Vláken

- **Virtual Address Spaces**
	- Each process is given its own virtual address space by the operating system.
	- Virtual addresses are mapped to physical memory addresses by the OS.
	- Enhances security and isolation between processes.

- **Memory Protection for Processes and Threads**
	- **Isolation**
		- Prevents one process from accessing the memory of another process.
		- Each process operates as if it has its own private memory.
	- **Security**
		- Protects sensitive data of each process from unauthorized access.
		- Helps prevent attacks like buffer overflow and memory corruption.
	- **Stability**
		- Ensures that a fault in one process does not affect the entire system.
		- Allows the OS to terminate faulty processes without impacting others.

- **Thread-Level Protection**
	- Threads within the same process share the same virtual address space.
	- Isolation between threads is managed at the application level.

- **Address Translation**
	- The OS uses a Memory Management Unit (MMU) to translate virtual addresses to physical addresses.
	- Involves mechanisms like paging and segmentation.

- **Example in Multitasking**
	- Each process in a multitasking environment operates in its own virtual address space.
	- Ensures that processes do not interfere with each other’s memory.

- **Benefits in Modern Computing**
	- Allows for safer execution of multiple applications.
	- Facilitates easier memory management and allocation by the OS.

- **Practical Implications**
	- **Application Development**: Developers can design applications without worrying about physical memory constraints.
	- **Operating System Design**: The OS can efficiently manage memory, allocate resources, and handle process termination.

## Sdílení Úložného Prostoru

### Soubory, Analogie S Adresovým Prostorem

- **Files**
	- Basic unit of storage in an operating system.
	- Used to store data, programs, configurations, etc.
	- Managed by the file system, which organizes and controls access to the files.

- **File Attributes**
	- Name, size, type, permissions, creation/modification dates.
	- Unique identifiers (like inode numbers in UNIX/Linux systems).

- **File Operations**
	- Open, read, write, close, delete, rename, etc.
	- Managed through system calls to the operating system.

- **Analogy to Address Space**
	- Just as the address space is a way to abstract and manage memory, files are an abstraction for storage space.
	- Files in a file system can be thought of as 'memory' in a storage 'address space'.
		- **Address Space**: Represents the entire memory space available.
		- **Files**: Represent blocks of this 'storage memory'.
	- Allows for easier management and allocation of storage, similar to how virtual memory manages physical memory.

- **Filesystem Hierarchy**
	- Organized like a tree, with directories and subdirectories.
	- Similar to how memory is segmented into different regions.

- **File Access Methods**
	- Sequential: Reading or writing data sequentially.
	- Random Access: Randomly accessing data within a file, similar to accessing specific memory addresses.

- **Storage Allocation**
	- Methods like contiguous, linked, indexed allocation are analogous to memory allocation techniques.
	- Deals with how files are physically stored on disk.

- **File System vs. Memory Management**
	- File systems manage long-term storage, memory management handles volatile memory.
	- Both use similar concepts like allocation, addressing, and protection.

- **Practical Example: Database Files**
	- Used to store large amounts of data.
	- Database management systems use files to store, retrieve, and update data, analogous to how applications interact with memory.

### Abstrakce a Rozhraní pro Práci Se Soubory

- **File System Abstraction**
	- Simplifies the complexity of storage hardware into an easy-to-use interface.
	- Files and directories provide a way to store and organize data.
	- Hides details of the underlying storage media (disk sectors, blocks).

- **File Operations Interface**
	- Common operations include creating, reading, writing, closing, and deleting files.
	- Provided through system calls or file API in programming languages.
	- Example: `fopen()`, `fread()`, `fwrite()`, `fclose()` in C.

- **Directory and Path Abstraction**
	- Provides a hierarchical structure for organizing files.
	- Paths (absolute or relative) are used to navigate this structure.
	- Mimics the way memory is segmented and managed.

- **File Access Methods**
	- Sequential Access: Read or write data in a linear fashion.
	- Random Access: Read or write data at arbitrary locations.
	- Indexed Access: Access data using indexes or keys, similar to addressing in memory.

- **File Permissions and Security**
	- Control who can read, write, or execute a file.
	- Similar to access control mechanisms in memory management.

- **File Locking Mechanisms**
	- Prevent simultaneous conflicting operations on a file by different processes.
	- Analogous to mutexes and semaphores in process synchronization.

- **Virtual File Systems (VFS)**
	- Abstraction layer that provides a uniform interface to different types of file systems.
	- Allows the OS to support multiple file systems transparently.

- **Buffered and Unbuffered I/O**
	- Buffered I/O uses a memory buffer to temporarily store data before writing to or reading from the file.
	- Unbuffered I/O involves direct reading or writing to the file without intermediate buffering.

- **Examples in Real-World Applications**
	- Text editors, media players, and databases use file abstractions for data storage and retrieval.
	- Operating systems themselves use files for logs, configuration, and system data.

- **Importance in Application Development**
	- Understanding file abstractions and interfaces is crucial for developing applications that interact with file systems efficiently and securely.

