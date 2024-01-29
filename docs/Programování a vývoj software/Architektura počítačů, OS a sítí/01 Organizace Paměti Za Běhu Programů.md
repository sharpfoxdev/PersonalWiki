---
tags:
  - 
share: "true"
---

# 01 Organizace Paměti Za Běhu Programů

## Paměť Procesu

### Process Memory Overview

- Represents the allocated space in memory for a running program.
- Divided into several segments, each with a specific purpose.

### Memory Segments

- **Text Segment (Code Segment)**
	- Contains the executable code of the program.
	- Read-only to prevent program self-modification.
- **Data Segment**
	- Stores global and static variables.
	- Divided into initialized (`.data`) and uninitialized (`.bss`) sub-segments.
- **Heap**
	- Used for dynamic memory allocation during program runtime.
	- Grows upwards towards higher memory addresses.
	- Managed via functions like `malloc()` and `free()` in C, or `new` and `delete` in C++.
- **Stack**
	- Stores local variables, function parameters, return addresses.
	- LIFO (Last In, First Out) structure, growing downwards towards lower memory addresses.
	- Facilitates function calls and returns.

### Dynamic Vs Static Memory Allocation

- **Static Allocation**
	- For global and static variables, decided at compile time.
	- Resides in the data segment.
- **Dynamic Allocation**
	- Allocated at runtime on the heap.
	- Offers flexibility but requires explicit management.

### Stack Vs Heap

- **Stack**
	- Fast access, automatically managed memory (allocation/deallocation).
	- Limited size, risk of stack overflow.
- **Heap**
	- Flexible, manual control of size and lifetime.
	- Slower access, risk of fragmentation, memory leaks.

### Memory Management Techniques

- Includes garbage collection, reference counting, and explicit deallocation.
- Varies based on programming language and runtime environment.

### Virtual Memory

- Provides an abstraction of physical memory.
- Allows processes to have a view of a contiguous memory space, irrespective of the actual physical memory.

### Example Usage in Programming

- C++: `int* ptr = new int;` allocates memory on the heap.
- Java: All objects are dynamically allocated on the heap.

## Dynamická Alokace Paměti

### Concept of Dynamic Memory Allocation

- The process of allocating memory at runtime.
- Used when the amount of memory needed is not known at compile time.

### Heap Memory

- Area of memory used for dynamic allocation.
- Unlike the stack, the size is not fixed and can grow as needed.

### Allocation Mechanisms

- **`malloc()` and `free()` in C**
	- `malloc()` allocates a specified amount of memory.
	- `free()` deallocates memory, making it available again.
- **`new` and `delete` in C++**
	- `new` allocates memory and optionally calls a constructor.
	- `delete` deallocates memory and calls the destructor.

### Memory Management

- Responsibility of the programmer to manage memory correctly.
- Failure to release memory leads to memory leaks.

### Garbage Collection

- Some languages (like Java, C#) use garbage collection to automatically manage memory.
- Garbage collector reclaims memory that is no longer in use.

### Best Practices

- Initialize allocated memory before use.
- Ensure every allocation has a corresponding deallocation.
- Be cautious of memory leaks and dangling pointers.

### Common Errors

- **Memory Leak**: Failing to free memory, causing wasted resources.
- **Dangling Pointer**: A pointer that references a deallocated memory area.
- **Buffer Overflow**: Writing data beyond the allocated memory bounds.

### Example Usage

- Allocating an array dynamically in C:

	```c
	int* arr = malloc(n * sizeof(int));
	// Use the array
	free(arr);
	```

- Creating a new object in C++:

	```cpp
	MyClass* obj = new MyClass();
	// Use the object
	delete obj;
	```

### Importance in Programming

- Essential for applications that require flexible use of memory.
- Understanding dynamic allocation is crucial for writing efficient and bug-free code.

## Aktivační Záznam Funkce

### Overview of Function Activation Record

- Also known as a stack frame.
- Represents the memory layout for a single execution of a function.
- Contains all necessary information for the function execution and its return.

### Components of an Activation Record

- **Function Arguments**
	- Passed values or references to the function.
- **Return Address**
	- The point in the program to return control after function execution.
- **Local Variables**
	- Variables that are declared within the function.
- **Control Information**
	- Data required for managing calls and returns, such as frame pointer.

### Stack Allocation for Activation Records

- When a function is called, its activation record is pushed onto the stack.
- When the function returns, its activation record is popped off the stack.

### Frame Pointer (FP)

- Points to the start of the current activation record.
- Used to access function arguments and local variables.

### Stack Pointer (SP)

- Points to the top of the stack (end of the current activation record).
- Moves as items are pushed to or popped from the stack.

### Example of Function Call

- In a language like C:

	```c
	void function(int arg) {
		int localVar = 10;
		// Function body
	}
	```

- Activation record includes `arg`, return address, `localVar`, and control information.

### Dynamic Chain

- Links each activation record to its caller’s activation record.
- Helps in navigating back through the function calls.

### Static Chain

- Used in nested functions (functions defined within other functions).
- Points to the frame of the outer function to access its scope.

### Importance in Programming

- Understanding activation records is crucial for debugging and understanding program execution flow.
- Vital for grasping concepts like recursion and stack-based memory management.

## Volací Konvence, Předávání Parametrů

### Calling Conventions Overview

- Rules that define how functions receive parameters and return values.
- Determine how the call stack is used during function calls.

### Types of Calling Conventions

- **CDECL (C Declaration)**
	- Caller cleans the stack.
	- Arguments are pushed onto the stack in reverse order.
- **STDCALL**
	- Callee cleans the stack.
	- Common in Windows API.
- **FASTCALL**
	- First few arguments are passed in registers.
	- Remaining arguments are passed on the stack.

### Parameter Passing Methods

- **Pass by Value**
	- A copy of the argument is passed.
	- Modifications do not affect the original variable.
- **Pass by Reference**
	- A reference to the argument is passed.
	- Allows the function to modify the original variable.
- **Pass by Pointer**
	- Similar to pass by reference, but using pointers.
	- Used in C to achieve pass-by-reference semantics.

### Stack Frame in Function Calls

- Consists of return address, base pointer, parameters, and local variables.
- Order and method depend on the calling convention.

### Register Usage

- Some conventions use registers for the first few arguments (e.g., FASTCALL).
- Registers can be faster than memory (stack) access.

### Caller Vs Callee Responsibilities

- **Caller**
	- Places arguments and stores the return address.
	- In CDECL, also responsible for cleaning up arguments from the stack.
- **Callee**
	- Retrieves arguments and returns the result.
	- In STDCALL, cleans up arguments from the stack.

### Example of CDECL Calling Convention

- In C:

	```c
	void function(int arg1, int arg2) {
		// Function body
	}
	// Caller
	function(10, 20);
	```

- The caller will push `20`, then `10` onto the stack and clean it after the call.

### Importance in Software Development

- Understanding calling conventions is critical for interfacing different languages and libraries.
- Essential for low-level programming and debugging.

## Uložení Proměnných, Heap

### Variable Storage in Memory

- Variables in a program are stored in different memory segments based on their type and duration.
- **Stack**
	- Local variables declared inside functions are stored here.
	- Automatically allocated and deallocated as functions are called and return.
- **Data Segment**
	- Global and static variables are stored in this segment.
	- Divided into initialized and uninitialized parts.
- **Heap Memory**
	- A region of memory used for dynamic memory allocation.
	- Variables are allocated at runtime and need manual management.
	- Heap allows for flexible memory allocation, unlike the stack.

### Heap Allocation

- **Dynamic Allocation**
	- Memory is allocated during runtime using allocation functions.
	- Common functions include `malloc`, `calloc`, `new`, etc.
- **Deallocation**
	- Memory allocated on the heap must be explicitly freed or deallocated.
	- Common functions include `free`, `delete`, etc.

### Heap Vs Stack Memory

- **Heap**
	- More flexible, can allocate and deallocate memory at any time.
	- Slower access than stack memory.
	- Prone to fragmentation and memory leaks.
- **Stack**
	- Fast memory allocation and deallocation.
	- Limited by its size, can lead to stack overflow.
	- Automatically managed memory lifecycle.

### Usage of Heap Memory

- For large data structures or variables whose size is not known at compile time.
- Example in C:

	```c
	int* dynamicArray = malloc(100 * sizeof(int));
	// Use the array
	free(dynamicArray);
	```

### Memory Management Techniques

- **Garbage Collection**
	- Automatic memory management found in languages like Java or Python.
- **Manual Memory Management**
	- In languages like C and C++, the programmer is responsible for memory management.

### Common Errors and Best Practices

- **Memory Leaks**
	- Occurs when dynamically allocated memory is not freed.
- **Dangling Pointers**
	- Pointers that reference deallocated memory.
- **Best Practices**
	- Always pair each allocation with deallocation.
	- Use tools like Valgrind to detect memory leaks.
