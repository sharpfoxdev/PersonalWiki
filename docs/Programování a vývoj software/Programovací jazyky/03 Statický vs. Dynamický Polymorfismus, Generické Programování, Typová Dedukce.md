---
tags:
  - 
share: "true"
---

# 03 Statický vs. Dynamický Polymorfismus, Generické Programování, Typová Dedukce

## Výkonové Důsledky Různých Implementací Polymorfismu

Polymorphism in programming allows objects of different types to be treated as objects of a common super type. The choice between static and dynamic polymorphism, as well as the use of generic programming and type deduction, can have profound effects on the performance of an application.

### Static Polymorphism

- **Implemented through:** Templates in C++ and and function overloading.
- **Performance Implications:** Generally offers better performance than dynamic polymorphism because method calls are resolved at compile time, leading to inline function calls and eliminating the overhead of virtual function calls at runtime.
- **Use Case Example:** Compile-time polymorphism is ideal for operations that are type-specific but need to be applied across types that share a common interface, without the overhead of runtime decision making.
- **Example:** Template functions or classes in C++ that are determined at compile time. The compiler generates a separate version of the function or class for each type used with the template, which can lead to faster execution but potentially larger binary sizes.

```cpp
    template<typename T>
    T max(T a, T b) {
        return a > b ? a : b;
    }
    // Usage
    int result = max(5, 10); // The specific function instantiation is resolved at compile time.
```

  This template function `max` is an example of static polymorphism where the compiler generates code for each type used, leading to direct function calls without runtime overhead.

### Dynamic Polymorphism

- **Implemented through:** Virtual functions in C++ and interfaces in languages like Java.
- **Performance Implications:** Introduces a runtime overhead due to the necessity of looking up the correct method to call in the virtual table. This can impact performance, especially in tight loops or performance-critical sections of code.
- **Use Case Example:** Dynamic polymorphism is suited to scenarios where the exact types of objects are not known until runtime, and a program needs to dynamically decide which method to invoke.
- **Example:** Using base class pointers or references to call overridden methods in derived classes. The exact method that gets called is determined at runtime based on the actual object type.

```cpp
    class Animal {
    public:
        virtual void speak() const = 0;
    };

    class Dog : public Animal {
    public:
        void speak() const override {
            cout << "Woof!" << endl;
        }
    };

    void makeAnimalSpeak(const Animal& animal) {
        animal.speak(); // Resolved at runtime
    }
    // Usage
    Dog dog;
    makeAnimalSpeak(dog);
```

  In this example, `speak` is a virtual function. The call to `animal.speak()` is resolved at runtime using the virtual table, allowing `Dog`'s version of `speak` to be executed.

### Generické Programování (Generic Programming)

- **Characteristics:** Involves writing algorithms and data structures in a way that they work across different data types.
- **Performance Implications:** Enables the compiler to generate optimized code for each specific type, often leading to performance similar to or better than static polymorphism. However, it can lead to code bloat if not used judiciously, as a new instance of the function or class is generated for each type used.
- **Use Case Example:** Generic programming is extensively used in the Standard Template Library (STL) in C++, allowing for efficient and type-safe collections and algorithms.

### Conclusion on Performance Implications

- Generic programming, when used wisely, can offer performance benefits similar to static polymorphism but requires careful consideration to avoid excessive code generation.
- Type deduction improves code maintainability and readability, indirectly affecting performance by facilitating optimization and reducing errors.
- **Memory and Cache Impact:** Dynamic polymorphism can increase memory usage due to the storage of vtables and possibly lead to cache misses, which further degrade performance. Static polymorphism avoids these issues by resolving method calls at compile time.
- **Code Bloat vs. Flexibility:** Static polymorphism can lead to code bloat because the compiler generates code for every type used with a template. While this can increase the binary size, it eliminates the vtable lookup, offering a trade-off between speed and memory usage.
- **Predictability:** The performance of statically polymorphic code is more predictable since the method calls are resolved at compile time. Conversely, dynamic polymorphism's performance can vary depending on the depth of the inheritance hierarchy and the complexity of the object graph.

## Typová Dedukce (Type Deduction)

- **Characteristics:** The compiler automatically deduces the type of a variable or the return type of a function.
- **Performance Implications:** Type deduction itself does not directly impact performance but can lead to cleaner code that is easier to maintain and optimize. It reduces the need for explicit type declarations, making the code more readable and less prone to errors, which indirectly contributes to better overall performance.
- **Use Case Example:** Automatic type deduction with `auto` in C++ or var in C# simplifies the usage of generic programming by reducing the syntactic overhead and making the code more adaptable to changes.

```cpp
    auto result = add(5, 10); // The compiler deduces that T is int
```

## Parametrizace Generického Kódu

Parametrization in generic programming involves defining functions, classes, or interfaces that can operate on a variety of data types specified as parameters. This approach enables code reusability and type safety across different data types.

### Concepts of Generic Code Parametrization

- **Generic Functions and Classes:** Write functions and classes to work with any data type. In C++, this is achieved using templates.
- **Type Parameters:** Specify placeholders for the types that a generic function or class can operate on. These parameters are replaced with actual types at compile time in static languages or at runtime in dynamic languages.

### C++ Template Parametrization

- **Syntax:** 

    ```cpp
    template <typename T>
    T add(T a, T b) {
        return a + b;
    }
    ```

- **Usage:** This function can add numbers of any type (int, float, double, etc.) that supports the `+` operator.
- **Benefits:** Increases code reuse and maintainability by abstracting the operation from specific data types.

### Dynamic Languages Approach

- **Dynamic Typing:** Languages like Python inherently support generic code through dynamic typing, allowing functions to naturally operate on any type without explicit parametrization.

    ```python
    def add(a, b):
        return a + b
    ```

- **Duck Typing:** Supports the use of objects of any type, as long as they implement the expected interface or methods, without needing explicit type parameters.
    

### Constraints and Concepts in Generic Programming

- **Constraints:** Define requirements for the type parameters to ensure that they support certain operations or interfaces.
- **C++20 Concepts:** Allow specifying more precise constraints for template parameters, improving code readability and compiler error messages.

    ```cpp
    template <typename T>
    requires std::integral<T>
    T add(T a, T b) {
        return a + b;
    }
    ```

### Best Practices for Parametrizing Generic Code

- **Use Clear, Descriptive Naming:** For type parameters to enhance code readability and maintainability.
- **Minimize Assumptions:** Write generic code that makes minimal assumptions about the type parameters, increasing its applicability.
- **Test with Diverse Types:** Ensure generic code is thoroughly tested with various types to catch any type-specific issues or limitations.

## Politiky

Policies in generic programming provide a mechanism for defining and applying customizable behaviors to templates or generic functions/classes. This approach enables developers to select or change the behavior of a component at compile-time in statically typed languages like C++, or dynamically in languages that support runtime type flexibility.

### Understanding Policy-Based Design

- **Definition:** Policy-based design involves creating software components that separate interface and implementation, allowing the behavior of these components to be altered by specifying different policies.
- **Components:** Typically consists of a core template or class that accepts one or more policies as template parameters.

### Implementing Policies in C++

- **Policy Classes:** Each policy is defined as a class or struct, potentially with its own set of methods and attributes.
- **Template Parameters:** The generic component (e.g., a class or function template) accepts these policy classes as template parameters.

    ```cpp
    template <typename SortPolicy>
    class Sorter {
    public:
        template <typename Container>
        void sort(Container& container) {
            SortPolicy::sort(container.begin(), container.end());
        }
    };
    ```

- **Usage Example:** Users can define and use different sorting policies (e.g., QuickSort, MergeSort) with the `Sorter` class without altering its code.

### Benefits of Policy-Based Design

- **Flexibility and Reusability:** Enables the creation of highly flexible and reusable components by mixing and matching different policies.
- **Compile-Time Selection:** Policies are selected at compile-time, allowing the compiler to optimize the resulting code, leading to efficient implementations.
- **Separation of Concerns:** Decouples the implementation details of behaviors (policies) from the core functionality of components, adhering to the principle of separation of concerns.

### Design Considerations

- **Complexity:** While policy-based design increases flexibility, it can also introduce complexity and make the code harder to understand and maintain.
- **Documentation:** Thorough documentation of available policies and their expected interfaces is crucial for effective use.
- **Compile-Time Errors:** Errors in policy-based design often manifest as compile-time errors, which can be challenging to diagnose due to template metaprogramming's complexity.

### Examples in Dynamic Languages

Although policy-based design is most commonly associated with statically typed languages like C++, dynamic languages can implement similar concepts using higher-order functions, duck typing, or dynamic dispatch mechanisms to achieve flexibility in behavior customization.

## Použití Šablon V C++

### Typově Parametrizovaný Kontejner

C++ templates enable the creation of type-parameterized containers, which are containers that can store objects of any type specified by the user at compile time. This flexibility allows for the design of versatile and reusable data structures.

#### Implementation of a Simple Type-Parameterized Container

Here's an example of how to implement a basic type-parameterized vector-like container in C++ using templates:

```cpp
template <typename T>
class MyVector {
private:
    T* arr; // Pointer to the array of elements
    size_t capacity; // Maximum capacity of the container
    size_t current; // Current number of elements

public:
    MyVector() : arr(new T[1]), capacity(1), current(0) {}

    void push(const T& item) {
        if (current == capacity) {
            // If the container is full, increase the capacity
            capacity *= 2;
            T* temp = new T[capacity];
            for (size_t i = 0; i < current; i++) {
                temp[i] = arr[i]; // Copy elements to the new array
            }
            delete[] arr;
            arr = temp;
        }
        arr[current] = item; // Insert the item
        current++;
    }

    T get(size_t index) const {
        if (index < current) {
            return arr[index]; // Return the item at the specified index
        }
        throw std::out_of_range("Index out of range");
    }

    size_t size() const { return current; } // Return the current size

    ~MyVector() {
        delete[] arr; // Destructor to free the allocated memory
    }
};

// usage
MyVector<int> intVector;
intVector.push(10);
intVector.push(20);

MyVector<std::string> stringVector;
stringVector.push("Hello");
stringVector.push("World");

std::cout << "intVector[0]: " << intVector.get(0) << std::endl;
std::cout << "stringVector[1]: " << stringVector.get(1) << std::endl;

```

This example demonstrates how to define and use a custom `MyVector` class template that can adapt to store elements of any type, showcasing the power of C++ templates for creating flexible and type-safe containers.

#### Benefits

- **Type Safety:** Ensures that all elements in the container are of the same type, detected at compile time.
- **Flexibility:** Can be used with any type that supports the operations used within the container (e.g., assignment for the `push` method).
- **Reusability:** The same container implementation can be reused for different data types, reducing code duplication.

#### Considerations

- **Memory Management:** Care must be taken to manage dynamic memory correctly, especially in constructors, destructors, and when copying objects.
- **Performance:** Templates can lead to code bloat if not used judiciously, as the compiler generates separate instances of the template for each type used.

### Datový Typ S Operátory

C++ templates enable the creation of custom data types with operators, enhancing code readability and efficiency by allowing these types to be used in a manner similar to built-in types. This section outlines how to define a generic data type with overloaded operators using C++ templates.

#### Implementing a Generic Data Type with Operators

Consider a simple template for a `Point` class that represents a point in a two-dimensional space and supports basic arithmetic operations:

```cpp
template <typename T>
class Point {
private:
    T x, y;

public:
    // Constructor
    Point(T x, T y) : x(x), y(y) {}

    // Getter methods for x and y
    T getX() const { return x; }
    T getY() const { return y; }

    // Operator overloading
    // Addition of two Points
    Point operator+(const Point& other) const {
        return Point(x + other.x, y + other.y);
    }

    // Equality comparison
    bool operator==(const Point& other) const {
        return x == other.x && y == other.y;
    }

    // Stream insertion operator for printing
    friend std::ostream& operator<<(std::ostream& os, const Point& p) {
        os << "(" << p.x << ", " << p.y << ")";
        return os;
    }
};

Point<int> p1(1, 2);
Point<int> p2(3, 4);
Point<int> sum = p1 + p2;

std::cout << p1 << " + " << p2 << " = " << sum << std::endl;  // Outputs: (1, 2) + (3, 4) = (4, 6)

if (p1 == p2) {
    std::cout << "Points are equal." << std::endl;
} else {
    std::cout << "Points are not equal." << std::endl;
}
```

#### Benefits

- **Expressiveness:** Overloading operators for custom types makes the code more intuitive and easier to understand.
- **Type Safety:** Leveraging templates ensures that operations on these custom types are performed with type safety in mind, reducing runtime errors.
- **Reusability:** The generic nature of the implementation allows the same class template to be used with different data types, enhancing code reusability.

#### Considerations

- **Complexity:** Overloading operators can make the code harder to read and maintain, especially for those not familiar with the custom type's implementation.
- **Performance:** Care must be taken to ensure that overloaded operators do not introduce unnecessary performance overhead, particularly in copy operations.