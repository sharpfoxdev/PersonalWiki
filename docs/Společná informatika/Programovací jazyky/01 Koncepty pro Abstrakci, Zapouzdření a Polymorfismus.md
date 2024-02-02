---
tags:
  - 
share: "true"
---

# 01 Koncepty pro Abstrakci, Zapouzdření a Polymorfismus

## Související Konstrukty Programovacích Jazyků

### Třídy, Rozhraní, Metody, Datové Položky, Dědičnost, Viditelnost

#### Třídy (Classes)

- **Definice**: Třída je základní stavební jednotkou objektově orientovaných programů, reprezentuje skupinu objektů se společnými vlastnostmi a chováním.
- **Struktura**:
  - **Datové Položky (Attributes/Fields)**: Proměnné definované uvnitř třídy.
  - **Metody (Methods)**: Funkce nebo procedury uvnitř třídy.
- **Příklad**: Třída `Auto` může mít datové položky jako `barva`, `model` a metody jako `start()`, `stop()`.

#### Rozhraní (Interfaces)

- **Definice**: Rozhraní definuje „kontrakt“, který třídy mohou implementovat. Obsahuje deklarace metod bez jejich implementace.
- **Použití**: Používá se pro definici schopností, které musí třída implementovat.
- **Příklad**: Rozhraní `IVozidlo` může deklarovat metodu `jizda()`.

#### Metody (Methods)

- **Definice**: Metody jsou funkce definované uvnitř třídy. Mohou pracovat s datovými položkami třídy a provádět určité operace.
- **Typy**:
  - **Instance Methods**: Metody, které vyžadují vytvoření instance třídy.
  - **Static Methods**: Metody, které mohou být volány na úrovni třídy, bez nutnosti vytvoření instance.

#### Datové Položky (Data Members)

- **Definice**: Proměnné nebo konstanty definované uvnitř třídy.
- **Přístup**:
  - **Private**: Soukromé položky, přístupné pouze uvnitř třídy.
  - **Public**: Veřejné položky, přístupné z vnějšku třídy.
  - **Protected**: Chráněné položky, přístupné v třídě a jejích potomcích.

#### Dědičnost (Inheritance)

- **Definice**: Mechanismus, pomocí kterého třída (potomek) může zdědit vlastnosti a chování od jiné třídy (rodič).
- **Typy**:
  - **Jednoduchá Dědičnost**: Třída dědí od jedné rodičovské třídy.
  - **Víceúrovňová Dědičnost**: Třída dědí od třídy, která sama dědí od jiné třídy.
- **Příklad**: Třída `NakladniAuto` může dědit od třídy `Auto`.

#### Viditelnost (Visibility)

- **Definice**: Určuje, jaké části třídy jsou přístupné z jiných tříd nebo částí programu.
- **Úrovně**:
  - **Public**: Plně přístupné z jakékoliv jiné třídy.
  - **Private**: Přístupné pouze uvnitř třídy, kde jsou definovány.
  - **Protected**: Přístupné v rámci třídy a jejích dědičných tříd.

## (dynamický) Polymorfismus, Statické a Dynamické Typování

### Polymorphism

- **Definition**: The ability of different objects to respond, each in its own way, to identical messages (or methods).
- **Types**:
	- **Static (Compile-time) Polymorphism**: 
		- Determined at compile time.
		- Achieved through method overloading and operator overloading.
		- Example: In C++, you can have two functions with the same name but different number or types of parameters.
	- **Dynamic (Run-time) Polymorphism**: 
		- Determined at run time.
		- Achieved through method overriding, not overloading.
		- Example: In Java, a base class reference can point to a child class object. The method call through this reference will be resolved at runtime.

### Static and Dynamic Typing

- **Static Typing**:
	- Type checking is done at compile time.
	- Once a variable is declared to be of a certain data type, it cannot hold values of other data types.
	- Example: C++, Java (to an extent).
	- Pros: Early error detection, optimization by compiler, clearer code.
	- Cons: Less flexibility.
- **Dynamic Typing**:
	- Type checking is done at run time.
	- Variables can hold values of any type and are not bound to a specific type at compile time.
	- Example: Python, JavaScript.
	- Pros: More flexibility, easier to use.
	- Cons: Higher chances of run-time errors, slower due to on-the-fly type checking.

### Examples and Use Cases

- **Static Polymorphism in C++ (Method Overloading)**:

  ```cpp
  class Shape {
  public:
      void draw() { /*...*/ }
      void draw(int color) { /*...*/ }
  };


```
- **Dynamic Polymorphism in Java (Method Overriding)**:
```java
class Animal {
    void sound() { System.out.println("Some sound"); }
}
class Dog extends Animal {
    void sound() { System.out.println("Bark"); }
}
```

- A reference of `Animal` can hold an object of `Dog`, and the correct `sound` method (of `Dog`) is called at runtime.

## Jednoduchá Dědičnost

- **Definice**: Jednoduchá dědičnost umožňuje třídě dědit vlastnosti a metody z jedné nadřazené třídy.
- **Použití**: Umožňuje sdílet kód a funkčnost mezi třídami, přičemž odvozená třída rozšiřuje nebo upravuje chování základní třídy.
- **Příklad**: Třída `Auto` může dědit z třídy `Vozidlo`, získává tak všechny její vlastnosti a metody.

### Ⓥ Virtuální a Nevirtuální Metody V C\#

- **Virtuální Metody**
	- **Definice**: Metoda označená klíčovým slovem `virtual` v nadřazené třídě, která může být přepsána v odvozené třídě pomocí klíčového slova `override`.
	- **Příklad**:

    ```csharp
    class Vozidlo {
        public virtual void ZobrazTyp() {
            Console.WriteLine("Jsem vozidlo.");
        }
    }

    class Auto : Vozidlo {
        public override void ZobrazTyp() {
            Console.WriteLine("Jsem auto.");
        }
    }
    ```

	- **Použití**: Umožňuje polymorfismus, kde odvozené třídy mohou upravit chování metod definovaných v nadřazené třídě.

- **Nevirtuální Metody**
	- **Definice**: Standardní metody bez klíčového slova `virtual`. Tyto metody nelze v odvozených třídách přepsat.
	- **Příklad**:

    ```csharp
    class Vozidlo {
        public void ZobrazTyp() {
            Console.WriteLine("Jsem vozidlo.");
        }
    }

    class Auto : Vozidlo {
        // Tato metoda nemůže přepsat ZobrazTyp v Vozidlo, protože není virtuální
    }
    ```

	- **Použití**: Používá se, když chceme zabránit odvozeným třídám v přepisování určité metody.

### Ⓥ Virtuální a Nevirtuální Metody V C++

- **Virtuální Metody**:
	- Deklarovány pomocí klíčového slova `virtual`.
	- Umožňují přetížení (override) v odvozených třídách.
	- Podporují pozdní vazbu (runtime polymorfismus).
	- Použití:
		- Vytvoření ukazatele typu `Base*`, který ukazuje na objekt `Derived`.
		- Volání `show()` vypíše "Derived class".

```cpp
class Base {
public:
	virtual void show() {
		std::cout << "Base class\n";
	}
};

class Derived : public Base {
public:
	void show() override {
		std::cout << "Derived class\n";
	}
};
```

- **Nevirtuální Metody**:
	- Standardní metody bez klíčového slova `virtual`.
	- Neumožňují přetížení v odvozených třídách.
	- Podporují časnou vazbu (compile-time polymorfismus).
	- Použití:
		- Vytvoření ukazatele typu `Base*`, který ukazuje na objekt `Derived`.
		- Volání `display()` vypíše "Base class display".

```cpp
class Base {
public:
	void display() {
		std::cout << "Base class display\n";
	}
};

class Derived : public Base {
public:
	void display() {
		std::cout << "Derived class display\n";
	}
};
```

- **Kdy Použít Virtuální Metody**:
	- Když je potřeba umožnit odvozeným třídám změnit chování metody.
	- Pro podporu polymorfismu.
- **Kdy Použít Nevirtuální Metody**:
	- Pro metody, které by neměly být přetíženy.
	- Když je důležitý výkon (virtuální metody mohou být mírně pomalejší kvůli vazbě za běhu).

## Vícenásobná Dědičnost a Její Problémy

Multiple inheritance can lead to various issues in object-oriented programming. One of the most notable issues is the Diamond Problem, where a class inherits from two classes that both inherit from a common base class. This can cause ambiguity and complications in the class hierarchy.

### Ⓥ Interfaces V C#

In C#, multiple inheritance of classes is not supported. However, C# allows a class to implement multiple interfaces, which is a way to achieve polymorphism and avoid the problems associated with multiple inheritance.

- **Definition of Interface**: An interface in C# is a contract that defines a set of methods and properties that the implementing class must provide.
    - Syntax: `interface IExample { void Method(); }`
- **Implementing Interfaces**: A class can implement multiple interfaces.
    - Syntax: `class MyClass : IFirstInterface, ISecondInterface { ... }`
- **Avoiding Diamond Problem**: By using interfaces, C# avoids the Diamond Problem as interfaces do not have implementation, only declarations.
- **Example of Interface Implementation**:

    ```csharp










interface IShape {
	double Area();
}

class Circle : IShape {
	private double radius;
	public Circle(double r) { radius = r; }
	public double Area() { return Math.PI * radius * radius; }
}

class Rectangle : IShape {
	private double length, width;
	public Rectangle(double l, double w) { length = l; width = w; }
	public double Area() { return length * width; }
}
    ```

    In this example, both `Circle` and `Rectangle` implement the `IShape` interface, each providing a specific implementation for the `Area` method.

- **Interface Segregation Principle**: C# promotes adhering to the Interface Segregation Principle, which suggests that no client should be forced to depend on methods it does not use. Thus, interfaces should be small and specific.

- **Properties in Interfaces**: Interfaces can include properties, which must be implemented by the classes.
    - Example: `interface IIdentity { string Name { get; set; } }`

- **Interface Inheritance**: Interfaces can inherit from other interfaces, allowing for a hierarchy of interfaces.
    - Example: `interface IAdvancedShape : IShape { double Perimeter(); }`

Remember, while interfaces provide a way to achieve polymorphism in C#, they do not contain any implementation. The implementing class must provide the code for the methods and properties defined in the interface.

## Implementace Rozhraní (interface)

- **Definition and Purpose**
	- An interface is a contract or a blueprint for a class.
	- It defines a set of methods that the implementing class must provide.
	- Interfaces are used to achieve abstraction and polymorphism in object-oriented programming.
	- They allow different classes to be treated uniformly based on the methods they implement.
- **Declaration and Implementation**
	- In most programming languages, interfaces are declared using the `interface` keyword.
	- A class implements an interface by providing concrete implementations of all its methods.
	- Syntax varies by language, e.g., `class MyClass implements MyInterface` in Java.
- **Usage Example**
	- Suppose we have an interface `IVehicle` with a method `drive()`.
	- A class `Car` implementing `IVehicle` would provide the specific implementation of `drive()`.
	- This allows different types of vehicles to be driven in a standardized way.
- **Polymorphism with Interfaces**
	- Interfaces support polymorphism; a single interface reference can point to multiple types of objects.
	- This is useful in scenarios like creating a uniform set of operations on various objects.
	- Example: An array of `IVehicle` can hold `Car`, `Bike`, etc., if they all implement `Vehicle`.
- **Advantages**
	- Increases the flexibility and maintainability of code.
	- Enables loose coupling between classes.
	- Facilitates testing by allowing mock implementations.
- **Common Practices**
	- Naming conventions often suggest interfaces with names like `IReadable`, `IFlyable`.
	- It's common to use interfaces when multiple classes share the same method signatures but have different behaviors.
- **Interface vs. Inheritance**
	- Unlike inheritance, interfaces do not provide code reuse; they provide a form of behavior standardization.
	- A class can implement multiple interfaces, overcoming the limitation of single inheritance in some languages
- **Language-Specific Notes**
	- In Java, interfaces can contain default methods with a default implementation.
	- C# supports extension methods allowing adding methods to an interface outside of its declaration.

## Vhodné Použití Uvedených Konceptů

### Abstrakce

- Abstrakce je proces, při kterém se definují klíčové charakteristiky nějakého objektu, oddělujíce ho od méně podstatných detailů.
	- V C#, abstrakce se dosahuje pomocí tříd a rozhraní.
	- Příklad: Vytvoření rozhraní `IVehicle` s metodami `Drive()` a `Stop()`, které mohou být implementovány různými typy vozidel.

### Zapouzdření

- Zapouzdření je princip, který udržuje data a metody bezpečné před vnějším přístupem a zneužitím.
	- V C#, zapouzdření se dosahuje pomocí modifikátorů přístupu, jako jsou `public`, `private`, `protected`.
	- Příklad: Deklarace privátní proměnné `int speed` v třídě `Car`, která není přímo přístupná z vnějšku, ale může být upravována pomocí veřejných metod `Accelerate()` a `Brake()`.

### Polymorfismus

- Polymorfismus umožňuje objektům různých tříd být manipulováno stejným způsobem.
	- V C#, polymorfismus se dosahuje pomocí zdědění a přepsání metod (method overriding) nebo implementací rozhraní.
	- Příklad: Třída `ElectricCar` a `GasolineCar` obě dědí z rozhraní `IVehicle` a implementují metodu `Drive()`. Objekty obou tříd mohou být použity polymorfně jako `IVehicle`.

#### Příklad Kódu pro Abstrakci, Zapouzdření a Polymorfismus V C\#

```csharp
interface IVehicle
{
    void Drive();
    void Stop();
}

public class Car : IVehicle
{
    private int speed;

    public void Drive()
    {
        Console.WriteLine("Car is driving.");
    }

    public void Stop()
    {
        Console.WriteLine("Car has stopped.");
    }

    public void Accelerate()
    {
        speed++;
    }

    public void Brake()
    {
        speed--;
    }
}

public class ElectricCar : IVehicle
{
    public void Drive()
    {
        Console.WriteLine("Electric car is driving.");
    }

    public void Stop()
    {
        Console.WriteLine("Electric car has stopped.");
    }
}
```

- V tomto příkladu, `Car` a `ElectricCar` implementují rozhraní `IVehicle`, demonstrujíc polymorfismus.
- `speed` je zapouzdřená v třídě `Car`.
- `IVehicle` poskytuje abstraktní rozhraní pro různé typy vozidel.