---
tags:
  - 
share: "true"
---

# 03 Podpora pro Běh Operačního Systému

## Privilegovaný a Neprivilegovaný Režim Procesoru

### Privileged Mode (Privilegovaný Režim)

- **Definition**
	- A mode of operation in which the processor has full access to all system resources and instructions.
- **Characteristics**
	- Access to sensitive instructions: These include control over hardware interfaces, memory management, and interrupt handling.
	- Full access to hardware resources: Ability to directly manage memory, I/O operations, and other hardware components.
- **Use Cases**
	- Operating System Kernel: The kernel operates in privileged mode to manage system resources and control hardware.
	- System-Level Operations: Such as setting up the environment for running user applications, managing system memory, and handling interrupts.

### Unprivileged Mode (Neprivilegovaný Režim)

- **Definition**
	- A restricted mode where the processor is limited in terms of the instructions it can execute and the resources it can access.
- **Characteristics**
	- Limited Instruction Set: Cannot execute instructions that could affect system stability or security.
	- Restricted Resource Access: Limited access to memory and hardware resources, typically restricted to those allocated to the specific process or user.
- **Use Cases**
	- User Applications: Regular applications run in unprivileged mode to prevent them from harming the system or accessing unauthorized data.
	- Ensuring Security and Stability: By restricting access to critical system resources, it prevents accidental or malicious interference with system operations.

### Switching Between Modes

- **Mechanism**
	- System Call: User applications use system calls to request services from the operating system, which then switches to privileged mode to execute the request.
	- Interrupts and Exceptions: When an interrupt or exception occurs, the processor switches to privileged mode to handle it.
- **Examples**
	- A user program executing a file operation would make a system call. The OS, in privileged mode, performs the operation and returns control to the user program in unprivileged mode.
	- An interrupt from a hardware device causes the processor to enter privileged mode to handle the interrupt, after which it returns to unprivileged mode.

### Security Implications

- **Protection of System Integrity**
	- Privileged mode ensures that critical system components are protected from unauthorized access.
- **Isolation of User Processes**
	- Running user processes in unprivileged mode isolates them from each other and from the system, preventing one misbehaving process from affecting others.

### Practical Considerations

- **Designing Secure Systems**
	- Understanding the distinction between these modes is crucial for designing systems that are secure and stable.
- **Development of Operating Systems and Drivers**
	- OS developers and driver writers need to be aware of what operations can be performed in each mode to ensure proper system functioning.

## Jádro Operačního Systému

### Definition of OS Kernel

- **Core Component of an OS**
	- Manages system resources and hardware.
	- Acts as a bridge between software applications and hardware.

### Functions of the Kernel

- **Process Management**
	- Scheduling: Determines which process runs at any given time.
	- Process creation and termination.
- **Memory Management**
	- Manages allocation and deallocation of memory space.
	- Handles memory paging and swapping.
- **Device Management**
	- Manages device communication via drivers.
	- Allocates and releases device resources.
- **File System Management**
	- Manages file creation, deletion, and access.
	- Controls the file system structure and permissions.
- **Networking**
	- Handles network protocol stack and data transmission.

### Types of Kernels

- **Monolithic Kernels**
	- Includes all system services in one large kernel.
	- Example: Linux.
- **Microkernels**
	- Minimalist approach, only essential services included.
	- Example: Minix.
- **Hybrid Kernels**
	- Combination of monolithic and microkernel architectures.
	- Example: Windows NT.

### Kernel Architecture

- **Modularity**
	- Kernel functionality divided into modules.
	- Allows for dynamic loading and unloading of services.
- **Layered Approach**
	- Organizes the kernel into layers, each providing different services.
- **Hardware Abstraction**
	- Abstracts the hardware details from the rest of the OS.

### Kernel Security and Stability

- **Protection Rings**
	- Uses different privilege levels to protect kernel operations.
- **Exception Handling**
	- Manages exceptions and errors to maintain system stability.
- **Access Control**
	- Regulates access to resources and data.

