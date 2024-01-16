---
tags:
  - 
share: "true"
---

# 01 Základní Architektura Počítače, Reprezentace Čísel, Dat a Programů

## Reprezentace a Přístup K Datům V Paměti, Adresa, Adresový Prostor

### Data Representation in Memory

- **Binary Representation**: All data in a computer system, including numbers, characters, and more complex data structures, are represented using binary (0s and 1s).
	- **Example**: The decimal number `13` is represented in binary as `1101`.
- **Data Types and Sizes**: Different data types (e.g., `int`, `float`, `char`) are represented using a fixed number of bits (e.g., 32-bit, 64-bit).
	- **Example**: An `int` in a 32-bit system is represented using 32 bits.
- **Character Encoding**: Characters are represented using character encoding standards like ASCII or Unicode.
    - **ASCII Example**: The character `A` is represented as `65` in decimal or `01000001` in binary.
    - **Unicode Example**: The character `Č` in Unicode could be represented as `U+010C`.

### Memory Address and Address Space

- **Memory Address**:
	- Each byte in memory has a unique address.
	- Addresses are usually represented in hexadecimal format.
	- **Example**: An address could be `0x1A2B3C4D`.
- **Address Space**:
	- The range of addresses that a processor can access.
	- Determined by the address bus width (e.g., 32-bit, 64-bit).
	- **32-bit Example**: A 32-bit address bus provides an address space of `2^32` (4 GB).
	- **64-bit Example**: A 64-bit address bus provides a significantly larger address space.

### Accessing Data in Memory

- **Direct Memory Access (DMA)**:
	- Accessing memory directly without CPU intervention.
	- Often used for large data transfers, like disk I/O.
- **Memory Hierarchy**:
	- Data is stored in various types of memory, each with different speed and size characteristics (Registers, Cache, RAM, Disk).
	- **Example**: CPU registers are the fastest, followed by cache, then RAM, and finally disk storage.
- **Endianness**:
	- Refers to the order of byte storage for multi-byte data types (like integers).
	- **Big-Endian**: Most significant byte (MSB) stored first.
		- **Example**: The number `0x1A2B3C4D` in big-endian is stored as `1A 2B 3C 4D`.
	- **Little-Endian**: Least significant byte (LSB) stored first.
		- **Example**: The number `0x1A2B3C4D` in little-endian is stored as `4D 3C 2B 1A`.

### Practical Implications

- **Data Alignment**: 
	- Data is often aligned in memory to match the data size to optimize access speed.
	- **Example**: A 4-byte integer should be aligned to a memory address that is a multiple of 4.
- **Virtual Memory**:
	- An abstraction that allows programs to access a large, uniform array of memory independent of the actual physical memory size.
	- Involves mapping between physical and virtual addresses.
- **Buffer Overflow**:
	- Occurs when a program writes more data to a buffer than it can hold, potentially leading to security vulnerabilities.
	- **Example**: Writing 20 bytes of data into a 10-byte buffer.

## Ukládání Jednoduchých a Složených Datových Typů

### Simple Data Types (Jednoduché Datové Typy)

- **Integer (Celé Číslo)**
	- Stored as a fixed number of bits (commonly 32 or 64 bits).
	- Example: `int x = 5;` in a 32-bit system uses 32 bits.
- **Floating-Point Numbers (Desetinná Čísla)**
	- Represented using IEEE 754 standard.
	- Consists of a sign, exponent, and mantissa.
	- Example: `float y = 3.14;` might be stored as `4048F5C3` in hexadecimal.
- **Character (Znak)**
	- Stored using ASCII or Unicode encoding.
	- Typically uses 1 byte (ASCII) or more (Unicode).
	- Example: `char z = 'A';` is stored as `65` in ASCII.
- **Boolean (Boolean)**
	- Represents true/false values.
	- Typically stored in 1 bit, but often occupies 1 byte for alignment.
	- Example: `bool flag = true;` might be stored as `01`.

### Complex Data Types (Složené Datové Typy)

- **Arrays (Pole)**
	- Contiguous block of memory with elements of the same type.
	- Example: `int arr[3] = {1, 2, 3};` occupies 3 contiguous integers in memory.
- **Structures (Struktury)**
	- Collection of variables under a single name.
	- Memory layout is sequential for each member but might include padding for alignment.
	- Example: `struct {int x; float y;} point;` stores `x` and `y` sequentially.
- **Classes (Třídy)**
	- Similar to structures but also includes methods.
	- Memory layout includes space for member variables and a pointer to a virtual method table if virtual methods are used.
	- Example: `class Point { int x; float y; void move(); };` includes `x`, `y`, and a method `move`.
- **Pointers (Ukazatele)**
	- Stores the memory address of another variable.
	- Size depends on the architecture (e.g., 32-bit, 64-bit).
	- Example: `int* p = &x;` stores the address of `x`.

### Memory Allocation (Alokace Paměti)

- **Static Allocation (Statická Alokace)**
	- Memory size and location are fixed at compile-time.
	- Example: Global variables, `static` variables.
- **Dynamic Allocation (Dynamická Alokace)**
	- Memory size is determined at runtime.
	- Example: `int* arr = new int[10];` allocates an array of 10 integers dynamically.

### Special Considerations

- **Data Alignment (Zarovnání Dat)**
	- Ensures that data boundaries align with architecture's word size for efficient access.
	- Example: On a 32-bit system, data might be aligned to 4-byte boundaries.
- **Endianness (Endianita)**
	- Defines the order of byte storage for multi-byte types (Big-Endian vs Little-Endian).
	- Example: `0x12345678` would be stored differently in Big-Endian vs Little-Endian.

## Základní Aritmetické a Logické Operace

### Arithmetic Operations (Aritmetické Operace)

- **Addition (Sčítání)**
	- Adds two numbers.
	- Example: `3 + 4` results in `7`.
- **Subtraction (Odčítání)**
	- Subtracts one number from another.
	- Example: `5 - 2` results in `3`.
- **Multiplication (Násobení)**
	- Multiplies two numbers.
	- Example: `6 * 3` results in `18`.
- **Division (Dělení)**
	- Divides one number by another.
	- Example: `10 / 2` results in `5`.
- **Modulus (Modulo)**
	- Returns the remainder of division.
	- Example: `7 % 3` results in `1`.

### Logical Operations (Logické Operace)

- **AND**
	- Returns `true` if both operands are true.
	- Example: `true AND false` results in `false`.
- **OR**
	- Returns `true` if at least one operand is true.
	- Example: `true OR false` results in `true`.
- **NOT**
	- Inverts the truth value.
	- Example: `NOT true` results in `false`.
- **XOR**
	- Returns `true` if operands are different.
	- Example: `true XOR false` results in `true`.

### Bitwise Operations (Bitové Operace)

- **Bitwise AND**
	- Performs AND on each pair of bits.
	- Example: `0101 AND 0011` results in `0001`.
- **Bitwise OR**
	- Performs OR on each pair of bits.
	- Example: `0101 OR 0011` results in `0111`.
- **Bitwise XOR**
	- Performs XOR on each pair of bits.
	- Example: `0101 XOR 0011` results in `0110`.
- **Bitwise NOT**
	- Inverts each bit.
	- Example: `NOT 0101` results in `1010`.
- **Shift Operations**
	- **Left Shift**
		- Shifts bits to the left, filling with zeros.
		- Example: `0101 << 2` results in `010100`.
	- **Right Shift**
		- Shifts bits to the right.
		- Example: `0101 >> 2` results in `0001`.

### Special Considerations

- **Overflow and Underflow**
	- Occur when arithmetic operations exceed the storage capacity.
	- Example: Adding two large integers can result in overflow.
- **Precision in Floating-Point Operations**
	- Limited precision can lead to rounding errors.
	- Example: `0.1 + 0.2` may not exactly equal `0.3` due to precision.
- **Short-Circuit Evaluation**
	- Logical operations may not evaluate the second operand if the first is sufficient to determine the result.
	- Example: In `false AND (expression)`, `(expression)` is not evaluated.



