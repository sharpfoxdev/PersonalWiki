---
tags:
  - 
share: "true"
---

# 09 Principy Webových Aplikací

## Klient-server Architektura

Client-server architecture is a distributed application structure that partitions tasks or workloads between providers of a resource or service, called servers, and service requesters, called clients. This model is widely used in network applications, including the web, email, and file transfer services.

### Key Concepts

- **Client:** A client is an application or system that accesses services provided by a server through the network. In web applications, the client is typically a web browser that requests web pages from the server.
- **Server:** The server hosts the application, processes requests from the client, performs operations (such as database queries, computations, etc.), and sends responses back to the client. Web servers, database servers, and mail servers are common examples.
- **Request-Response Model:** Communication between clients and servers is based on the request-response model. The client sends a request to the server, and the server processes the request and returns a response.

### Advantages

- **Centralized Management:** The server is the central point where resources are managed, making it easier to control access and updates to the application.
- **Scalability:** It's easier to scale applications by adding more servers or upgrading existing ones without changing client-side code.
- **Security:** Centralizing data on servers allows for better control over security measures, such as firewalls, encryption, and access controls.

### Types of Client-Server Architecture

- **Two-Tier Architecture:** Involves a direct communication between the client and server. It's simple but can become unmanageable as applications grow.
- **Three-Tier Architecture:** Introduces an intermediate layer between the client and server, often called the application layer, which can handle business logic, authentication, and more. This makes the application more scalable and secure.
- **N-Tier Architecture:** Extends the three-tier model by adding more layers, such as separate layers for data access, business logic, and presentation. This offers even greater separation of concerns and scalability.

### Best Practices

- **Statelessness:** Servers should ideally be stateless, meaning they do not store information about the client session on the server between requests. This makes the server simpler and more scalable.
- **RESTful Services:** For web applications, adopting REST principles for client-server communication can make the application more scalable and maintainable.
- **Security Measures:** Implementing HTTPS, using secure authentication tokens, and validating inputs are essential for protecting the client-server communication.

## Principy Single-page a Multiple-page Aplikací

### Single-page Applications (SPAs)

SPAs are web applications that load a single HTML page and dynamically update that page as the user interacts with the app. SPAs use AJAX and HTML5 to create fluid and responsive web applications, without requiring page reloads.

- **Advantages:**
	- **User Experience:** SPAs can offer a more fluid, desktop-like experience, with instantaneous feedback and transitions.
	- **Performance:** Reduced server load and faster interactions after the initial page load, as only data, not the entire page, is exchanged with the server.
	- **Development:** Simplified development and debugging process with a more unified and component-based approach.

- **Challenges:**
	- **SEO:** Historically, SPAs faced challenges with search engine optimization, though advancements like server-side rendering have mitigated these issues.
	- **Initial Load Time:** The first load might take longer as the entire application framework and assets must be downloaded.
	- **Complexity:** Managing the application state and routing in a SPA can be complex.

- **Technologies:** Angular, React, Vue.js.

### Multiple-page Applications (MPAs)

MPAs work in a traditional way where each change in the application involves loading a new webpage from the server. This approach is typical for websites with a wide range of features and content.

- **Advantages:**
	- **SEO:** Easier to optimize for search engines as each page can be indexed separately.
	- **Scalability:** Easier to scale in terms of development and management, as different teams can work on separate pages.
	- **Simplicity:** Easier to understand and implement, especially for small websites or when using standard server-side technologies.

- **Challenges:**
	- **Performance:** Each page request reloads the entire page from the server, which can lead to slower user experiences compared to SPAs.
	- **Consistency:** Ensuring a consistent look and feel across multiple pages can be more challenging.
	- **Development:** Might require more effort to maintain the codebase as the application grows, due to the redundancy of templates, scripts, and stylesheets across pages.

- **Technologies:** Traditional server-side languages (PHP, Ruby on Rails, ASP.NET), along with client-side scripting for enhancements.

### Making the Choice

The decision between SPA and MPA depends on the specific needs of the project:
- **SPAs** are well-suited for applications requiring dynamic interactions with users, complex state management, or the feel of a "desktop app."
- **MPAs** are preferable for content-rich websites, applications requiring robust SEO, or when building large-scale applications where dividing work among teams is necessary.

## Správa Stavu Webové Aplikace

State management in web applications refers to the techniques and strategies used to preserve the state of an application across user interactions. The state can include user inputs, data models, configuration settings, and more. Effective state management is crucial for maintaining application consistency, especially in Single-page Applications (SPAs) where traditional page reloads do not occur.

### Challenges in State Management

- **State Synchronization:** Ensuring the UI reflects the current application state accurately.
- **State Persistence:** Keeping state consistent across page reloads, browser sessions, and navigation.
- **Complexity:** Managing complex dependencies and interactions within the application state.

### Techniques for State Management

- **Client-Side State Management:**
	- **Cookies:** Small pieces of data stored in the client's browser, useful for tracking session state and simple data persistence.
	- **Local Storage and Session Storage:** Web storage solutions for storing data locally in the browser, with more capacity than cookies.
	- **State Libraries/Frameworks:** Many modern JavaScript frameworks and libraries (e.g., React's Context API and Redux, Vue's Vuex, Angular's RxJS) offer robust solutions for managing state in a more organized and scalable way.

- **Server-Side State Management:**
	- **Session Variables:** Data stored on the server, linked to a client session identifier (session ID) that is typically kept in a cookie.
	- **Database:** Storing user state and session data in a database allows for persistence across sessions and scalability.

- **URL State Management:**
	- **Query Parameters and Routes:** Using the URL to store state can be useful for bookmarking, sharing links, and maintaining state across page reloads without needing server or client storage.

### Best Practices

- **Minimize Client-Side State:** Keep client-side state management as simple as possible to reduce complexity and improve performance.
- **Use Appropriate Scoping:** Global state should be used sparingly. Most state should be scoped as closely as possible to where it's used.
- **Synchronize State and UI:** Ensure that the UI is always a reflection of the current application state, minimizing direct DOM manipulation in favor of declarative UI updates.
- **State Immutability:** Treat state as immutable to simplify tracking changes and debugging.
- **Secure State Management:** Protect sensitive data by using HTTPS for transmission, sanitizing input to prevent XSS attacks, and encrypting sensitive state stored in cookies or web storage.
