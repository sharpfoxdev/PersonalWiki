---
tags:
  - 
share: "true"
---

# 11 API Webových Aplikací

## Návrh REST API

When designing a RESTful API, the goal is to provide an efficient, flexible, and developer-friendly way to access and manipulate web resources. Here are key principles and best practices to consider:

### Use HTTP Methods Appropriately

- **GET** for retrieving resources.
- **POST** for creating new resources.
- **PUT** or **PATCH** for updating existing resources (PUT for full updates; PATCH for partial updates).
- **DELETE** for removing resources.

### Resource Naming

- **Be Consistent:** Use a consistent naming convention that follows web standards.
- **Use Nouns for Resources:** Represent resources with nouns (e.g., `/users`, `/orders`) and not verbs.
- **Use Plural Nouns:** To indicate collections (e.g., `/users` for a collection of users).
- **Hierarchical Structure for Relationships:** Use paths to indicate a hierarchy or relationship (e.g., `/users/123/orders` for orders belonging to user 123).

### Response Status Codes

- Utilize HTTP status codes to indicate the outcome of API requests:
    - **200 OK** for successful read operations.
    - **201 Created** for successful resource creation.
    - **204 No Content** for successful requests with no content to return.
    - **400 Bad Request** for invalid request formats.
    - **401 Unauthorized** for access requests without authentication.
    - **403 Forbidden** for authenticated requests lacking permissions.
    - **404 Not Found** for non-existent resources.
    - **500 Internal Server Error** for server-side issues.

### Versioning

- **Version Your API:** Ensure backward compatibility by versioning your API, either through the URL path (`/v1/users`), query parameters, or custom request headers.

### Pagination, Filtering, and Sorting

- **Support Pagination:** To limit the response size and support browsing through large collections.
- **Enable Filtering and Sorting:** Allow clients to filter (e.g., `/users?status=active`) and sort (e.g., `/orders?sort=created_at`) resources to enhance usability.

### Use JSON for Data Formats

- **JSON (JavaScript Object Notation):** Use JSON as the primary data exchange format for its simplicity and compatibility with web technologies.

### Security

- **HTTPS:** Secure your API using HTTPS to encrypt data in transit.
- **Authentication and Authorization:** Implement robust authentication and authorization mechanisms (e.g., OAuth 2.0, JWT).

### Documentation

- **Provide Comprehensive Documentation:** Offer detailed documentation that includes endpoints, methods, request/response examples, status codes, and error messages to enhance developer experience.

### Statelessness

- Ensure the API is stateless, meaning each request from the client must contain all the information the server needs to fulfill the request. The server should not rely on stored context or session data.

