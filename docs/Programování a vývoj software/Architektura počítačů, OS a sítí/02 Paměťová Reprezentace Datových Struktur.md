---
tags:
  - 
share: "true"
---

# 02 Paměťová Reprezentace Datových Struktur

## Reprezentace Polí, Struktur a Tříd

- **Arrays (Pole)**
	- Continuous block of memory with elements of the same type.
	- **Memory Allocation**
		- Each element occupies contiguous memory locations.
		- Size is calculated as `element_size * number_of_elements`.
	- **Accessing Elements**
		- Direct access using an index.
		- Computed as `base_address + (index * size_of_element)`.

- **Structures (Struktury)**
	- Collection of variables (possibly of different types) grouped together.
	- **Memory Layout**
		- Variables are laid out in memory in the order they are declared.
		- Padding may be added to align data to word boundaries.
	- **Size Calculation**
		- Sum of the sizes of all members, including any padding.
	- **Example in C**

		```c
		struct Person {
		    char name[50];
		    int age;
		    float height;
		};
		```

- **Classes (Třídy)**
	- Similar to structures but with additional features like methods and access specifiers.
	- **Memory Layout**
		- Members are stored similarly to structures.
		- Additional memory for v-table if virtual functions are used.
	- **Access Specifiers**
		- Private, protected, and public members affect access but not memory layout.
	- **Example in C++**

		```cpp
		class Person {
		private:
		    char name[50];
		public:
		    int age;
		    void setName(const char* newName);
		};
		```

- **Dynamic Allocation**
	- Arrays and objects can be dynamically allocated in heap memory.
	- Provides flexibility for data structures with variable size or lifetime.
- **Pointers and Arrays**
	- Arrays can be accessed via pointers.
	- Pointer arithmetic is based on the size of the array element.
- **Impact on Performance**
	- Continuous memory access (like in arrays) is faster due to locality of reference.
	- Structures and classes may incur additional overhead due to alignment and padding.
- **Polymorphism and Memory Layout**
	- In classes with virtual functions, a pointer to the v-table is included in the memory layout.
	- Enables dynamic method dispatch but adds overhead to each object instance.
- **Best Practices**
	- Understanding the memory layout is crucial for optimizing performance.
	- Avoid unnecessary padding and alignment issues in structures.

## Zarovnání Paměťových Struktur

- **Memory Alignment Overview**
	- Refers to arranging the data in memory at specific addresses.
	- Aims to match the memory addresses to the word size of the CPU for optimal access.

- **Why Alignment is Important**
	- Misaligned data can lead to slower access times or even hardware faults.
	- Properly aligned data is accessed more efficiently by the CPU.

- **How Alignment is Achieved**
	- Compilers automatically add padding bytes to ensure data structures align with word boundaries.
	- Alignment depends on the hardware and compiler.

- **Alignment in Structures**
	- In structures, each member is aligned according to its type.
	- Padding may be added between members or at the end of the structure.
	- Example in C:

		```c
		struct Example {
		    char a; // 1 byte
		    // 3 bytes padding to align the next integer
		    int b;  // 4 bytes
		};
		```

- **Alignment in Arrays**
	- Elements in arrays are aligned in contiguous memory without padding between them.
	- The entire array is aligned based on the alignment requirement of a single element.

- **Data Types and Alignment**
	- Different data types have different alignment requirements.
	- For example, integers often require alignment to 4 or 8 bytes.

- **Alignment Keywords**
	- Languages like C and C++ provide keywords like `alignof` and `alignas` to query and specify alignment.

- **Performance Considerations**
	- Aligned memory accesses are generally faster.
	- Unaligned accesses may require multiple memory operations.

- **Dynamic Memory Allocation and Alignment**
	- Functions like `malloc` typically return memory aligned suitably for any object type.
	- Over-aligned types may require special allocation functions.

- **Alignment in Cache Performance**
	- Aligned data structures are more cache-friendly, reducing cache line misses.
	- Important for high-performance computing.

- **Best Practices**
	- Be aware of the natural alignment of types to avoid unnecessary padding.
	- Align data structures considering how they are accessed in the program.
