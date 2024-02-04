---
tags:
  - 
share: "true"
---

# 06 Reflexe a Introspekce

- **Introspection** is generally limited to examining objects to understand their capabilities, used for discovering and invoking capabilities that are known to exist.
- **Reflection** extends beyond examination to include modification and creation capabilities, allowing programs to dynamically alter their execution by manipulating types and objects at runtime.

## Ⓥ Run-time Introspekce a Reflexe V C\#

Reflection and introspection in C# allow for the examination and manipulation of assemblies, types, and members at runtime. This capability is essential for scenarios requiring dynamic type discovery and manipulation, providing a high degree of flexibility in how programs interact with and manage objects.

### Key Concepts and Usage

- **Accessing Type Information:**
    Reflection in C# is facilitated by the `System.Reflection` namespace, which includes classes like `Type`, `MethodInfo`, `FieldInfo`, `PropertyInfo`, and `Assembly`.

    ```csharp
    Type typeInfo = typeof(SomeClass);
    Console.WriteLine(typeInfo.Name); // Outputs the class name
    ```

- **Creating Instances Dynamically:**
    Objects can be instantiated at runtime without knowing their type at compile time, using methods like `Activator.CreateInstance`.

    ```csharp
    object instance = Activator.CreateInstance(typeInfo);
    ```

- **Invoking Methods:**
    Methods can be invoked on objects dynamically, even if the method names are only known at runtime.

    ```csharp
    MethodInfo methodInfo = typeInfo.GetMethod("MethodName");
    methodInfo.Invoke(instance, new object[] { methodArguments });
    ```

- **Accessing Fields and Properties:**
    Fields and properties can be read or modified at runtime, bypassing the usual access restrictions.

    ```csharp
    PropertyInfo propertyInfo = typeInfo.GetProperty("PropertyName");
    object value = propertyInfo.GetValue(instance);
    propertyInfo.SetValue(instance, newValue);
    ```

- **Examining Assemblies:**
    Reflection can be used to load and examine assemblies, accessing their types, and members.

    ```csharp
    Assembly assembly = Assembly.Load("AssemblyName");
    Type[] types = assembly.GetTypes(); // Retrieves all types defined in the assembly
    ```

### Benefits of Reflection

- **Flexibility:** Enables the development of generic frameworks and libraries that can operate on any type.
- **Dynamic Behavior:** Facilitates the creation of applications that can adapt their behavior based on the types and objects they encounter at runtime.
- **Introspection:** Allows for detailed inspection of program structure and behavior, useful for debugging, serialization, and dynamic proxy generation.

### Considerations

- **Performance:** Reflection operations can be slower than direct code execution due to the overhead of dynamic type discovery and method invocation.
- **Security:** Care must be taken to avoid exposing sensitive data or functionality through reflection.
- **Complexity:** Improper use of reflection can lead to code that is hard to understand, maintain, and debug.

## Ⓥ Atributy C\#

Attributes in C# are a way to add declarative information to your code elements, making them an integral part of modern C# programming. They are used to specify additional information about classes, methods, properties, and other declarations, which can be queried and used at runtime through reflection.

### Defining and Using Attributes

- **Defining Attributes:**
    Attributes are defined by creating a class that inherits from the `System.Attribute` base class. You can specify what code elements an attribute can be applied to using the `AttributeUsage` attribute.

    ```csharp
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class MyCustomAttribute : Attribute
    {
        public string Description { get; set; }
        public MyCustomAttribute(string description)
        {
            Description = description;
        }
    }
    ```

- **Applying Attributes:**
    Once defined, attributes can be applied to code elements by placing them in square brackets above or beside the element.

    ```csharp
    [MyCustomAttribute("This is a class description")]
    public class MyClass
    {
        [MyCustomAttribute("This is a method description")]
        public void MyMethod() { }
    }
    ```

### Accessing Attributes at Runtime

- **Using Reflection:**
    Attributes are accessed at runtime through reflection. This allows you to inspect attributes and their values on various code elements, enabling dynamic behavior based on those attributes.

    ```csharp
    var attributes = typeof(MyClass).GetCustomAttributes(typeof(MyCustomAttribute), false);
    foreach (MyCustomAttribute attr in attributes)
    {
        Console.WriteLine(attr.Description);
    }
    ```

### Common Uses of Attributes in C\#

- **Serialization:** Attributes can control how objects are serialized to XML or JSON. For example, by marking properties to include or exclude, or specifying property names.
- **Validation:** Data annotations attributes (e.g., `[Required]`, `[StringLength]`) can specify validation rules directly on model properties.
- **Aspect-Oriented Programming:** Attributes can be used to implement cross-cutting concerns, such as logging or transaction management, in a declarative manner.
- **Configuration:** Attributes can define configuration options for classes or methods, often used in frameworks and libraries for specifying behavior or settings.
- **Interoperability:** Attributes can control how .NET types interact with other systems, such as COM components or native code.

### Considerations When Using Attributes

- **Performance:** Accessing attributes through reflection can introduce performance overhead, especially if overused in performance-critical paths.
- **Complexity:** While attributes can make code cleaner by encapsulating metadata, overuse or misuse can lead to a disconnect between the behavior defined by attributes and the actual code, making the codebase harder to understand.

## Použití Introspekce

Introspection allows software to adapt dynamically by inspecting and modifying its execution based on the properties and capabilities of its components at runtime. This feature is instrumental in several programming scenarios.

### Dynamic Configuration and Initialization

- **Scenario:** Dynamically configuring objects or systems based on external metadata, such as configuration files or annotations.
- **Example:** A web application framework might use introspection to automatically instantiate and configure controllers and services based on annotations or XML configuration files.

### Serialization and Deserialization

- **Scenario:** Converting objects to formats like JSON or XML for storage or network transmission and vice versa.
- **Example:** An ORM (Object-Relational Mapping) library may use introspection to serialize objects to database records and deserialize them back to objects without manually mapping fields.

### Plugin Systems and Extension Mechanisms

- **Scenario:** Dynamically discovering and loading plugins or modules to extend application functionality without modifying the original codebase.
- **Example:** An application could inspect a directory for plugin files, load them at runtime, and integrate their functionality based on predefined interfaces.

### Dynamic Proxy Generation

- **Scenario:** Creating proxies for objects to add additional behaviors (like logging, transaction management, or security checks) transparently to method calls.
- **Example:** AOP (Aspect-Oriented Programming) frameworks utilize introspection to weave cross-cutting concerns into objects dynamically.

### Unit Testing and Mocking

- **Scenario:** Automatically generating mock objects that simulate the behavior of complex dependencies during testing.
- **Example:** A testing framework might use introspection to inspect a class for testable methods and automatically inject mock dependencies for isolated testing.

### GUI Binding and Event Handling

- **Scenario:** Binding UI elements to object properties or handling UI events through annotations or conventions.
- **Example:** A GUI framework could use introspection to automatically update the UI when the underlying data model changes, or to bind user actions to event handler methods.

### Advantages of Using Introspection

- **Flexibility:** Enables more generic and adaptable code that can handle unforeseen requirements or variations in data structures.
- **Decoupling:** Reduces dependencies between components, making systems more modular and easier to maintain.
- **Development Efficiency:** Automates repetitive coding tasks, speeding up development and reducing the potential for errors.

### Considerations

- **Performance Impact:** Introspective operations, especially those relying on reflection, can have performance implications due to the overhead of dynamic type checks and method invocations.
- **Complexity and Readability:** Overuse of introspection may lead to code that's difficult to understand and debug, as the behavior becomes less explicit and more determined by runtime state.

