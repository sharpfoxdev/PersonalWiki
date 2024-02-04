---
tags:
  - 
share: "true"
---

# 08 Principy WWW, HTTP, URL, Statické Webové Stránky

## Tvorba Statické Webové Stránky Pomocí HTML a HTML5 (sémantické HTML tagy)

Creating a static web page involves using HTML (HyperText Markup Language), the standard markup language for documents designed to be displayed in a web browser. HTML5, the latest version, introduces more semantic tags that allow for a better-structured and accessible web.

### Basic Structure of an HTML Document

An HTML document has a basic structure that includes the `<!DOCTYPE html>` declaration, the `<html>` element, and within it, the `<head>` and `<body>` sections.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
</body>
</html>
```

### Semantic HTML Tags in HTML5

Semantic HTML tags clearly describe their meaning to both the browser and the developer. HTML5 introduced several of these tags, enhancing the ability to create more accessible and structured content.

- **`<header>`**: Represents introductory content or a set of navigational links.
- **`<nav>`**: Designates a section of a page intended for navigation links.
- **`<section>`**: Defines a section in a document, typically with a heading.
- **`<article>`**: Specifies independent, self-contained content.
- **`<aside>`**: Marks content that is tangentially related to the content around it.
- **`<footer>`**: Represents the footer of a document or section.
- **`<figure>` and `<figcaption>`**: Used together to associate a caption with a figure.
- **`<main>`**: Specifies the main content of a document.

### Benefits of Using Semantic HTML

- **Accessibility**: Helps screen readers and other assistive technologies to understand the structure and navigate the content.
- **SEO**: Improves website search engine optimization by giving search engines clear signals about the page content structure.
- **Maintainability**: Makes the code easier to read and maintain, both for the original developer and others.

### Tips for Creating Static Web Pages

- **Use semantic tags where appropriate**: Choose the tag that most accurately describes the content.
- **Keep it simple**: Start with a simple structure and add complexity as needed.
- **Validate your HTML**: Use the W3C Markup Validation Service to check for errors or issues.

## HTML Formuláře, Vstupní Prvky a Validace

### HTML Forms

Forms in HTML are used to collect user inputs, which can range from text fields to file uploads. A form is defined using the `<form>` element, with the action attribute specifying where to send the form data when submitted.

```html
<form action="/submit-registration" method="post">
    <label for="username">Username:</label><br>
    <input type="text" id="username" name="username" required minlength="4" maxlength="15" placeholder="Your username"><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" required placeholder="Your email address"><br><br>

    <label for="password">Password:</label><br>
    <input type="password" id="password" name="password" required minlength="8" placeholder="Create a password"><br><br>

    <label for="birthdate">Birthdate:</label><br>
    <input type="date" id="birthdate" name="birthdate" required><br><br>

    <label for="gender">Gender:</label><br>
    <select id="gender" name="gender" required>
        <option value="">Please select</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
    </select><br><br>

    <label for="newsletter">Subscribe to newsletter:</label>
    <input type="checkbox" id="newsletter" name="newsletter"><br><br>
    <input type="submit" value="Register">
</form>

```

### Common Input Elements

- **`<input>`**: The backbone of most forms, capable of being configured for various data types using the `type` attribute.
- **`<textarea>`**: Allows for multiline text input.
- **`<select>`**: Creates a dropdown list of options.
- **`<button>`**: Defines a clickable button.

### New HTML5 Input Types

HTML5 introduced several new input types for more specific data, including:

- **`email`**: For email addresses, with built-in validation to check for an email format.
- **`date`**, **`time`**, **`datetime-local`**: For selecting dates and times.
- **`number`**: For numerical input, with attributes to specify range (`min` and `max`) and step values.
- **`url`**: For URL input, with built-in validation for URL format.
- **`range`**: Displays a slider to select a value within a range.

### Validation Attributes

HTML5 also introduced attributes to simplify the validation of form inputs:

- **`required`**: Indicates that the input must be filled out before submitting the form.
- **`pattern`**: Defines a regular expression that the input's value must match.
- **`min`** and **`max`**: Specify the minimum and maximum values for numerical inputs.
- **`maxlength`**: Limits the number of characters in an input field.
- **`placeholder`**: Provides a hint to the user about what to enter in the input.

### Implementing Validation

Validation can be performed both on the client-side using HTML5 attributes and JavaScript, and on the server-side after the data is submitted. Client-side validation improves the user experience by providing immediate feedback, but server-side validation is essential for security and reliability.

```html
<input type="email" name="userEmail" required placeholder="Enter your email">
```

### Best Practices

- **Accessibility**: Use `<label>` elements to associate text labels with form inputs for accessibility.
- **Feedback**: Provide clear error messages or feedback when validation fails.
- **Security**: Always validate and sanitize form inputs on the server side to prevent security vulnerabilities such as SQL injection and XSS attacks.

## Interpretace HTML Prohlížečem, DOM

### Interpretation of HTML by a Web Browser

When a web browser loads an HTML document, it goes through several steps to render the page for the user:

1. **Parsing HTML**: The browser reads the HTML document as a text file, then parses it to understand the structure and content. During parsing, the browser identifies HTML tags, attributes, and text content.
2. **Creating the DOM Tree**: Based on the parsed information, the browser constructs the Document Object Model (DOM), a tree-like structure that represents the document in memory. Each element, attribute, and piece of text in the HTML document becomes a DOM node in the tree.
3. **CSSOM Construction**: Simultaneously, the browser processes any Cascading Style Sheets (CSS) linked or included in the HTML document to create the CSS Object Model (CSSOM), which defines styles for the various elements.
4. **Render Tree Construction**: The browser then combines the DOM and CSSOM to create the render tree, which contains the visible parts of the document. The render tree knows what content is to be displayed and with which styles.
5. **Layout Process**: With the render tree constructed, the browser calculates the layout, determining the size and position of each element on the page.
6. **Painting**: Finally, the browser paints the content on the screen, following the layout and styles determined in the previous steps.

### Document Object Model (DOM)

The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; thus, programming languages can interact with the page.

- **Dynamic Interaction**: JavaScript can be used to manipulate the DOM, allowing for dynamic changes to the content, structure, and style of the page without needing to reload the document. This capability is the foundation of dynamic and interactive web applications.
- **Event Handling**: The DOM also provides an interface for event handling, such as user inputs or page lifecycle events. JavaScript can listen for and respond to these events, enabling rich user interactions.
- **Accessing Elements**: JavaScript can access and manipulate DOM elements using methods like `document.getElementById()`, `document.getElementsByTagName()`, and `document.querySelector()`, allowing developers to dynamically change the content and presentation of a page.

### Importance for Web Developers

- **Performance Considerations**: Manipulating the DOM can be expensive in terms of performance. Understanding how the DOM works can help developers make optimizations, like minimizing reflows and repaints.
- **Creating Interactive Applications**: Knowledge of the DOM is crucial for creating interactive web applications. Developers use the DOM to respond to user actions, dynamically update content, and create engaging user experiences.

## Vložení CSS Do Stránky

There are three primary methods to include CSS in a web page: Inline styles, Internal stylesheets, and External stylesheets.

### Inline Styles

Inline styles apply CSS rules directly within an HTML element using the `style` attribute.

```html
<p style="color: blue; font-size: 16px;">This is a paragraph with inline styling.</p>
```

- **Use Cases**: Best used for small, one-off style changes that don't require reuse across multiple elements.
- **Advantages**: Quick to add, no need to separate HTML and CSS.
- **Disadvantages**: Increases HTML complexity, not reusable, and can lead to maintenance challenges.

### Internal Stylesheets

Internal stylesheets are defined within the `<head>` section of an HTML document, using the `<style>` tag.

```html
<head>
    <style>
        body { background-color: #f0f0f0; }
        p { color: blue; font-size: 16px; }
    </style>
</head>
```

- **Use Cases**: Suitable for single-page websites or small projects where external stylesheets might be overkill.
- **Advantages**: All styles are contained within the HTML document, eliminating the need for additional HTTP requests.
- **Disadvantages**: Styles are not reusable across multiple pages, contributing to redundancy and larger HTML files.

### External Stylesheets

External stylesheets are separate `.css` files linked from the HTML document. This is the most common and recommended method for including CSS.
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```
- **Use Cases**: Ideal for most websites, especially those with multiple pages requiring consistent styling.
- **Advantages**:
    - Styles are reusable across multiple HTML documents.
    - Separation of concerns: keeps HTML and CSS code separate.
    - Reduces redundancy and facilitates easier maintenance and updates.
- **Disadvantages**: Requires an additional HTTP request (though this is mitigated with HTTP/2 and browser caching).

### Best Practices

- **Prefer External Stylesheets**: For maintainability and performance, especially for larger, multi-page websites.
- **Use Internal Stylesheets Sparingly**: For small projects or specific styles that are unique to a single page.
- **Avoid Inline Styles**: Except for very specific cases where quick, one-time styling is needed.

## CSS Selektory a Jejich Specificita

### CSS Selektory

Selectors allow you to target HTML elements based on their name, id, class, attributes, and more. Here are some common types of selectors:

- **Type Selector (Element Selector)**: Selects all elements of a specified type.

  ```css
  p { color: blue; }


```
- **Class Selector**: Targets elements by their class attribute.
```css
.highlight { background-color: yellow; }
```

- **ID Selector**: Selects a single element with a specific id attribute.

```css
#header { background-color: gray; }
```

- **Attribute Selector**: Selects elements based on an attribute or attribute value.

```css
input[type="text"] { border-color: red; }
```

- **Pseudo-class Selector**: Specifies a special state of an element.

```css
a:hover { color: green; }
```

- **Pseudo-element Selector**: Targets specific parts of an element.

```css
p::first-line { font-weight: bold; }
```

- **Combinators**: Combine multiple selectors in various ways to achieve more specific targeting.
	- **Descendant combinator** (space) `div p { color: red; }`
	- **Child combinator** (>) `div > p { color: red; }
	- **Adjacent sibling combinator** (+) `h1 + p { margin-top: 20px; }`
	- **General sibling combinator** (~) `h1 ~ p { font-size: 18px; }`

### Specificita

Specificity is a measure of how specific a selector is, determining which styles are applied when there is a conflict between multiple rules.

- **Calculation**: Specificity is calculated based on the number of each type of selector present in a given rule, with the following weight from highest to lowest:
    1. Inline styles (added directly to an element's `style` attribute) – highest specificity.
    2. ID selectors.
    3. Class selectors, pseudo-classes, and attribute selectors.
    4. Type selectors and pseudo-elements – lowest specificity.
- **!important**: Overrides any other declarations, but its use is discouraged except in very specific cases due to maintainability issues.
- **Universal Selector** (`*`), combinators, and negation pseudo-class (`:not()`) do not affect specificity.

### Best Practices

- **Minimize Use of ID Selectors**: Due to their high specificity, ID selectors can make it challenging to override styles.
- **Leverage Class Selectors**: They offer a good balance between specificity and reusability.
- **Avoid `!important`**: Except in cases where it is absolutely necessary, as it breaks the natural cascading of styles.

## Využití CSS Ke Stylování Webové Stránky

CSS can be used to style web pages in numerous ways, from basic text formatting to complex animations. Here are key concepts and techniques in using CSS for web design:

### Basic Styling

- **Text Properties**: Customize fonts, sizes, colors, and spacing. For example:

  ```css
  p {
      font-family: Arial, sans-serif;
      font-size: 16px;
      color: #333;
  }


```
- **Colors and Backgrounds**: Set colors and background images for elements.
```css
body {
    background-color: #f8f8f8;
    color: #333;
}
```

### Layout and Positioning

- **Box Model**: Control spacing and borders around elements. Includes `margin`, `border`, `padding`, and the element's content.
- **Flexbox**: A layout model for arranging elements in rows or columns, providing a more efficient way to distribute space and align content.

```css
.container {
    display: flex;
    justify-content: space-between;
}
```

- **Grid**: CSS Grid Layout offers a grid-based layout system, enabling complex responsive layouts.

```css
.grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
}
```

### Responsiveness and Media Queries

- **Media Queries**: Adapt the layout of web pages to different screen sizes, orientations, and resolutions.

```css
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}
```

### Advanced Techniques

- **Transitions and Animations**: Add visual effects when CSS properties change.

```css
button:hover {
    transition: background-color 0.3s ease;
    background-color: #007bff;
}
```

- **Custom Properties (CSS Variables)**: Reuse values throughout a document.

```css
:root {
    --primary-color: #007bff;
}
.header {
    background-color: var(--primary-color);
}
```

### Best Practices

- **Separation of Concerns**: Keep your CSS separate from HTML to maintain clarity and organization. Use external stylesheets linked in the `<head>` section of your HTML document.
- **Consistency**: Use consistent naming conventions and organize your CSS to make it easy to maintain and update.
- **Performance**: Optimize CSS for performance by minimizing its size, using shorthand properties, and reducing complexity.
- **Accessibility**: Ensure that your styling does not compromise the accessibility of your web content. Use adequate contrasts, scalable units like `em` or `rem` for fonts, and avoid using styles that make content inaccessible.

## Využití HTTP (hlavičky Určující Obsah, Stavové Kódy, Struktura HTTP požadavku) a URL pro Přístup K Webové Stránce

### HTTP Headers

HTTP headers are key-value pairs sent between the client and server in the request and response messages, providing essential information about the data being transferred.

- **Common Request Headers:**
  - `Accept`: Specifies the media types that the client is willing to receive.
  - `User-Agent`: Identifies the client software making the request to the server.
  - `Cookie`: Sends stored cookies from the client to the server.

- **Common Response Headers:**
  - `Content-Type`: Specifies the media type of the response content.
  - `Set-Cookie`: Tells the client to store a cookie.
  - `Cache-Control`: Directives for caching mechanisms in both requests and responses.

### HTTP Status Codes

Status codes are part of the HTTP response, indicating the result of the requested action. They are grouped into categories:

- **1xx (Informational)**: Communicates transfer protocol-level information.
- **2xx (Successful)**: Indicates that the client's request was successfully received, understood, and accepted.
  - `200 OK`: The request has succeeded.
- **3xx (Redirection)**: Indicates that further action needs to be taken by the client to fulfill the request.
  - `301 Moved Permanently`: The requested resource has been permanently moved to a new URL.
- **4xx (Client Error)**: Indicates that the client seems to have erred.
  - `404 Not Found`: The server can't find the requested resource.
- **5xx (Server Error)**: Indicates that the server failed to fulfill a valid request.
  - `500 Internal Server Error`: The server encountered an unexpected condition.

### Structure of an HTTP Request

An HTTP request consists of a request line, headers, and an optional body:

- **Request Line**: Includes the method (GET, POST, etc.), the request URL, and the HTTP version.
- **Headers**: Key-value pairs providing information about the request.
- **Body**: Optional data sent with POST and PUT requests.

```http
GET /index.html HTTP/1.1
Host: www.example.com
```

### URLs for Accessing Web Pages

URLs specify the location of a resource on the internet. A URL consists of several parts, including:

- **Scheme**: Indicates the protocol to be used (e.g., `http`, `https`).
- **Host**: Specifies the domain name or IP address of the server.
- **Port**: Optionally specifies the port number to connect to at the host.
- **Path**: Identifies a specific resource within the host (e.g., `/index.html`).
- **Query String**: Optional key-value pairs providing additional information (e.g., `?search=query`).
- **Fragment**: An optional anchor identifying a specific part of the resource (e.g., `#section1`).

```
https://www.example.com:80/index.html?search=query#section1
```