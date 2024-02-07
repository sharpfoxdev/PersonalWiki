---
tags:
  - 
share: "true"
---

# 07 Návrhové Vzory

Notes based on www.refactoring.guru
*Aggregation*: object A contains objects B; B can live without A.  
*Composition*: object A consists of objects B; A manages life cycle of B; B can’t live without A.

## Creational Patterns

### Factory Method

Provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. 

#### Structure

![[Pasted image 20240204203819.png|Pasted image 20240204203819.png]]
![[Pasted image 20240204205105.png|Pasted image 20240204205105.png]]

#### When to Use

- **Use the Factory Method when you don’t know beforehand the exact types and dependencies of the objects your code should work with.**
	- The Factory Method separates product construction code from the code that actually uses the product. Therefore it’s easier to extend the product construction code independently from the rest of the code. For example, to add a new product type to the app, you’ll only need to create a new creator subclass and override the factory method in it.
- **Use the Factory Method when you want to provide users of your library or framework with a way to extend its internal components.**
	- Inheritance is probably the easiest way to extend the default behavior of a library or framework. But how would the framework recognize that your subclass should be used instead of a standard component? The solution is to reduce the code that constructs components across the framework into a single factory method and let anyone override this method in addition to extending the component itself.
-  **Use the Factory Method when you want to save system resources by reusing existing objects instead of rebuilding them each time.**
	- createProduct() can return already existing Product instead of a new one

### Abstract Factory

Lets you produce families of related objects without specifying their concrete classes.

#### Structure

![[Pasted image 20240204210420.png|Pasted image 20240204210420.png]]
![[Pasted image 20240204210550.png|Pasted image 20240204210550.png]]

#### When to Use

 - **Use the Abstract Factory when your code needs to work with various families (windows, mac) of related products (button, checkbox), but you don’t want it to depend on the concrete classes of those products—they might be unknown beforehand or you simply want to allow for future extensibility.**
	 - The Abstract Factory provides you with an interface for creating objects from each class of the product family. As long as your code creates objects via this interface, you don’t have to worry about creating the wrong variant of a product which doesn’t match the products already created by your app.
-  **Consider implementing the Abstract Factory when you have a class with a set of [Factory Methods](https://refactoring.guru/design-patterns/factory-method) that blur its primary responsibility.**
	-  In a well-designed program *each class is responsible only for one thing*. When a class deals with multiple product types, it may be worth extracting its factory methods into a stand-alone factory class or a full-blown Abstract Factory implementation.

### Builder

Lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

#### Structure

![[Pasted image 20240204211607.png|Pasted image 20240204211607.png]]
![[Pasted image 20240204212048.png|Pasted image 20240204212048.png]]
![[Pasted image 20240204212608.png|Pasted image 20240204212608.png]]

#### When to Use

-  **Use the Builder pattern to get rid of a “telescoping constructor”.**
	- Say you have a constructor with ten optional parameters. Calling such a beast is very inconvenient; therefore, you overload the constructor and create several shorter versions with fewer parameters. These constructors still refer to the main one, passing some default values into any omitted parameters.

```java
class Pizza {
    Pizza(int size) { ... }
    Pizza(int size, boolean cheese) { ... }
    Pizza(int size, boolean cheese, boolean pepperoni) { ... }
    // ...
```

- The Builder pattern lets you build objects step by step, using only those steps that you really need. After implementing the pattern, you don’t have to cram dozens of parameters into your constructors anymore.
-  **Use the Builder pattern when you want your code to be able to create different representations of some product (for example, stone and wooden houses).**
-  **Use the Builder to construct [Composite](https://refactoring.guru/design-patterns/composite) trees or other complex objects.**

### Prototype

Lets you copy existing objects without making your code dependent on their classes.

#### Structure

![[Pasted image 20240204213106.png|Pasted image 20240204213106.png]]
A prototype class must define the alternative constructor that accepts an object of that class as an argument. The constructor must copy the values of all fields defined in the class from the passed object into the newly created instance. If you’re changing a subclass, you must call the parent constructor to let the superclass handle the cloning of its private fields.
![[Pasted image 20240204213336.png|Pasted image 20240204213336.png]]
![[Pasted image 20240204213529.png|Pasted image 20240204213529.png]]

#### When to Use

- **Use the Prototype pattern when your code shouldn’t depend on the concrete classes of objects that you need to copy.**
	- This happens a lot when your code works with objects passed to you from 3rd-party code via some interface. The concrete classes of these objects are unknown, and you couldn’t depend on them even if you wanted to. The Prototype pattern provides the client code with a general interface for working with all objects that support cloning. This interface makes the client code independent from the concrete classes of objects that it clones.
-  **Use the pattern when you want to reduce the number of subclasses that only differ in the way they initialize their respective objects.**
	- Suppose you have a complex class that requires a laborious configuration before it can be used. There are several common ways to configure this class, and this code is scattered through your app. To reduce the duplication, you create several subclasses and put every common configuration code into their constructors. You solved the duplication problem, but now you have lots of dummy subclasses. The Prototype pattern lets you use a set of pre-built objects configured in various ways as prototypes. Instead of instantiating a subclass that matches some configuration, the client can simply look for an appropriate prototype and clone it.

### Singleton

Lets you ensure that a class has only one instance, while providing a global access point to this instance. Goals:
- Howto:
	- Make the default constructor private, to prevent other objects from using the `new` operator with the Singleton class.
	- Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cached object.

#### Structure

![[Pasted image 20240204214147.png|Pasted image 20240204214147.png]]

#### When to Use

-  **Use the Singleton pattern when a class in your program should have just a single instance available to all clients; for example, a single database object shared by different parts of the program.**
	-  The Singleton pattern disables all other means of creating objects of a class except for the special creation method. This method either creates a new object or returns an existing one if it has already been created.
-  **Use the Singleton pattern when you need stricter control over global variables.**
	- Unlike global variables, the Singleton pattern guarantees that there’s just one instance of a class. Nothing, except for the Singleton class itself, can replace the cached instance. Note that you can always adjust this limitation and allow creating any number of Singleton instances. The only piece of code that needs changing is the body of the `getInstance` method.
- Con - Violates the *Single Responsibility Principle*. The pattern solves two problems at the time.

## Structural Patterns

### Adapter

Allows objects with incompatible interfaces to collaborate.

#### Structure

##### Object Adapter

This implementation uses the object composition principle: the adapter implements the interface of one object and wraps the other one. It can be implemented in all popular programming languages.
![[Pasted image 20240204214913.png|Pasted image 20240204214913.png]]
![[Pasted image 20240204215249.png|Pasted image 20240204215249.png]]

##### Class Adapter

This implementation uses inheritance: the adapter inherits interfaces from both objects at the same time. Note that this approach can only be implemented in programming languages that support multiple inheritance, such as C++.
![[Pasted image 20240204215155.png|Pasted image 20240204215155.png]]

#### When to Use

-  **Use the Adapter class when you want to use some existing class, but its interface isn’t compatible with the rest of your code.**
	-  The Adapter pattern lets you create a middle-layer class that serves as a translator between your code and a legacy class, a 3rd-party class or any other class with a weird interface.
-  **Use the pattern when you want to reuse several existing subclasses that lack some common functionality that can’t be added to the superclass.**
	- You could extend each subclass and put the missing functionality into new child classes. However, you’ll need to duplicate the code across all of these new classes, which [smells really bad](https://refactoring.guru/smells/duplicate-code). The much more elegant solution would be to put the missing functionality into an adapter class. Then you would wrap objects with missing features inside the adapter, gaining needed features dynamically. For this to work, the target classes must have a common interface, and the adapter’s field should follow that interface. This approach looks very similar to the [Decorator](https://refactoring.guru/design-patterns/decorator) pattern.

### Bridge

Lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

#### Structure

![[Pasted image 20240204215915.png|Pasted image 20240204215915.png]]
![[Pasted image 20240204220113.png|Pasted image 20240204220113.png]]

#### When to Use

-  **Use the Bridge pattern when you want to divide and organize a monolithic class that has several variants of some functionality (for example, if the class can work with various database servers).**
	- The Bridge pattern lets you split the monolithic class into several class hierarchies. After this, you can change the classes in each hierarchy independently of the classes in the others. This approach simplifies code maintenance and minimizes the risk of breaking existing code.
-  **Use the pattern when you need to extend a class in several orthogonal (independent) dimensions.**
	-  The Bridge suggests that you extract a separate class hierarchy for each of the dimensions. The original class delegates the related work to the objects belonging to those hierarchies instead of doing everything on its own.
-  **Use the Bridge if you need to be able to switch implementations at runtime.**
	-  Although it’s optional, the Bridge pattern lets you replace the implementation object inside the abstraction. It’s as easy as assigning a new value to a field. By the way, this last item is the main reason why so many people confuse the Bridge with the [Strategy](https://refactoring.guru/design-patterns/strategy) pattern. Remember that a pattern is more than just a certain way to structure your classes. It may also communicate intent and a problem being addressed.

### Composite

Lets you compose objects into tree structures and then work with these structures as if they were individual objects.

#### Structure

![[Pasted image 20240204220627.png|Pasted image 20240204220627.png]]
![[Pasted image 20240204220805.png|Pasted image 20240204220805.png]]

#### When to Use

-  **Use the Composite pattern when you have to implement a tree-like object structure.**
	-  The Composite pattern provides you with two basic element types that share a common interface: simple leaves and complex containers. A container can be composed of both leaves and other containers. This lets you construct a nested recursive object structure that resembles a tree.
-  **Use the pattern when you want the client code to treat both simple and complex elements uniformly.**
	-  All elements defined by the Composite pattern share a common interface. Using this interface, the client doesn’t have to worry about the concrete class of the objects it works with.

### Decorator/Wrapper

Lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

#### Structure

![[Pasted image 20240206215426.png|Pasted image 20240206215426.png]]
![[Pasted image 20240206215655.png|Pasted image 20240206215655.png]]

#### When to Use

- **Use the Decorator pattern when you need to be able to assign extra behaviors to objects at runtime without breaking the code that uses these objects.**
	- The Decorator lets you structure your business logic into layers, create a decorator for each layer and compose objects with various combinations of this logic at runtime. The client code can treat all these objects in the same way, since they all follow a common interface.

- **Use the pattern when it’s awkward or not possible to extend an object’s behavior using inheritance.**
	- Many programming languages have the `final` keyword that can be used to prevent further extension of a class. For a final class, the only way to reuse the existing behavior would be to wrap the class with your own wrapper, using the Decorator pattern.

### Facade

Provides a simplified interface to a library, a framework, or any other complex set of classes.

#### Structure

![[Pasted image 20240206220615.png|Pasted image 20240206220615.png]]
![[Pasted image 20240206220721.png|Pasted image 20240206220721.png]]

#### When to Use

- **Use the Facade pattern when you need to have a limited but straightforward interface to a complex subsystem.**
	- Often, subsystems get more complex over time. Even applying design patterns typically leads to creating more classes. A subsystem may become more flexible and easier to reuse in various contexts, but the amount of configuration and boilerplate code it demands from a client grows ever larger. The Facade attempts to fix this problem by providing a shortcut to the most-used features of the subsystem which fit most client requirements.

- **Use the Facade when you want to structure a subsystem into layers.**
	- Create facades to define entry points to each level of a subsystem. You can reduce coupling between multiple subsystems by requiring them to communicate only through facades.
	- For example, let’s return to our video conversion framework. It can be broken down into two layers: videoand audio-related. For each layer, you can create a facade and then make the classes of each layer communicate with each other via those facades. This approach looks very similar to the [Mediator](https://refactoring.guru/design-patterns/mediator) pattern.

### Flyweight

Lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

#### Structure

![[Pasted image 20240206221450.png|Pasted image 20240206221450.png]]
![[Pasted image 20240206221909.png|Pasted image 20240206221909.png]]

#### When to Use

**Use the Flyweight pattern only when your program must support a huge number of objects which barely fit into available RAM.**

The benefit of applying the pattern depends heavily on how and where it’s used. It’s most useful when:

- an application needs to spawn a huge number of similar objects
- this drains all available RAM on a target device
- the objects contain duplicate states which can be extracted and shared between multiple objects

### Proxy

Lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

#### Structure

![[Pasted image 20240206222200.png|Pasted image 20240206222200.png]]
![[Pasted image 20240206222400.png|Pasted image 20240206222400.png]]

#### When to Use

**Lazy initialization (virtual proxy). This is when you have a heavyweight service object that wastes system resources by being always up, even though you only need it from time to time.**

 Instead of creating the object when the app launches, you can delay the object’s initialization to a time when it’s really needed.

 **Access control (protection proxy). This is when you want only specific clients to be able to use the service object; for instance, when your objects are crucial parts of an operating system and clients are various launched applications (including malicious ones).**

 The proxy can pass the request to the service object only if the client’s credentials match some criteria.

 **Local execution of a remote service (remote proxy). This is when the service object is located on a remote server.**

 In this case, the proxy passes the client request over the network, handling all of the nasty details of working with the network.

 **Logging requests (logging proxy). This is when you want to keep a history of requests to the service object.**

 The proxy can log each request before passing it to the service.

 **Caching request results (caching proxy). This is when you need to cache results of client requests and manage the life cycle of this cache, especially if results are quite large.**

 The proxy can implement caching for recurring requests that always yield the same results. The proxy may use the parameters of requests as the cache keys.

 **Smart reference. This is when you need to be able to dismiss a heavyweight object once there are no clients that use it.**

 The proxy can keep track of clients that obtained a reference to the service object or its results. From time to time, the proxy may go over the clients and check whether they are still active. If the client list gets empty, the proxy might dismiss the service object and free the underlying system resources.

The proxy can also track whether the client had modified the service object. Then the unchanged objects may be reused by other clients.

## Behavioral Patterns

### Chain of Responsibility

Lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

#### Structure

![[Pasted image 20240206233432.png|Pasted image 20240206233432.png]]
![[Pasted image 20240206233651.png|Pasted image 20240206233651.png]]
The GUI classes are built with the Composite pattern. Each element is linked to its container element. At any point, you can build a chain of elements that starts with the element itself and goes through all of its container elements.

#### When to Use

**Use the Chain of Responsibility pattern when your program is expected to process different kinds of requests in various ways, but the exact types of requests and their sequences are unknown beforehand.**

 The pattern lets you link several handlers into one chain and, upon receiving a request, “ask” each handler whether it can process it. This way all handlers get a chance to process the request.

 **Use the pattern when it’s essential to execute several handlers in a particular order.**

 Since you can link the handlers in the chain in any order, all requests will get through the chain exactly as you planned.

 **Use the CoR pattern when the set of handlers and their order are supposed to change at runtime.**

 If you provide setters for a reference field inside the handler classes, you’ll be able to insert, remove or reorder handlers dynamically.

### Command

Turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request's execution, and support undoable operations.

#### Structure

![[Pasted image 20240206234319.png|Pasted image 20240206234319.png]]
![[Pasted image 20240206234640.png|Pasted image 20240206234640.png]]

#### When to Use

**Use the Command pattern when you want to parametrize objects with operations.**

 The Command pattern can turn a specific method call into a stand-alone object. This change opens up a lot of interesting uses: you can pass commands as method arguments, store them inside other objects, switch linked commands at runtime, etc.

Here’s an example: you’re developing a GUI component such as a context menu, and you want your users to be able to configure menu items that trigger operations when an end user clicks an item.

 **Use the Command pattern when you want to queue operations, schedule their execution, or execute them remotely.**

 As with any other object, a command can be serialized, which means converting it to a string that can be easily written to a file or a database. Later, the string can be restored as the initial command object. Thus, you can delay and schedule command execution. But there’s even more! In the same way, you can queue, log or send commands over the network.

 **Use the Command pattern when you want to implement reversible operations.**

 Although there are many ways to implement undo/redo, the Command pattern is perhaps the most popular of all.

To be able to revert operations, you need to implement the history of performed operations. The command history is a stack that contains all executed command objects along with related backups of the application’s state.

This method has two drawbacks. First, it isn’t that easy to save an application’s state because some of it can be private. This problem can be mitigated with the [Memento](https://refactoring.guru/design-patterns/memento) pattern.

Second, the state backups may consume quite a lot of RAM. Therefore, sometimes you can resort to an alternative implementation: instead of restoring the past state, the command performs the inverse operation. The reverse operation also has a price: it may turn out to be hard or even impossible to implement.

### Iterator

Lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

#### Structure

![[Pasted image 20240206235115.png|Pasted image 20240206235115.png]]
![[Pasted image 20240206235323.png|Pasted image 20240206235323.png]]

#### When to Use

 **Use the Iterator pattern when your collection has a complex data structure under the hood, but you want to hide its complexity from clients (either for convenience or security reasons).**

 The iterator encapsulates the details of working with a complex data structure, providing the client with several simple methods of accessing the collection elements. While this approach is very convenient for the client, it also protects the collection from careless or malicious actions which the client would be able to perform if working with the collection directly.

 **Use the pattern to reduce duplication of the traversal code across your app.**

 The code of non-trivial iteration algorithms tends to be very bulky. When placed within the business logic of an app, it may blur the responsibility of the original code and make it less maintainable. Moving the traversal code to designated iterators can help you make the code of the application more lean and clean.

 **Use the Iterator when you want your code to be able to traverse different data structures or when types of these structures are unknown beforehand.**

 The pattern provides a couple of generic interfaces for both collections and iterators. Given that your code now uses these interfaces, it’ll still work if you pass it various kinds of collections and iterators that implement these interfaces.

### Mediator

Lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

#### Structure

#### When to Use

### Memento

Lets you save and restore the previous state of an object without revealing the details of its implementation.

#### Structure

#### When to Use

### Observer

Lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they're observing.

#### Structure

#### When to Use

### State

Lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

#### Structure

#### When to Use

### Strategy

Lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

#### Structure

#### When to Use

### Template Method

Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

#### Structure

#### When to Use

### Visitor

Lets you separate algorithms from the objects on which they operate.

#### Structure

#### When to Use