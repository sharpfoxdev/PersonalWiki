---
tags:
  - 
share: "true"
---

# 12 Základy Bezpečnosti Webových Aplikací

# 12 Základy Bezpečnosti Webových Aplikací

## SQL Injection

SQL Injection exploits vulnerabilities in an application's software by inserting or "injecting" malicious SQL commands into queries, manipulating the database to execute unintended actions.

### How SQL Injection Works

- **User Input as Part of SQL Query:** If user input is directly included in SQL queries without proper sanitization or validation, attackers can insert SQL commands that the database will execute.
- **Manipulating Queries:** Attackers can manipulate queries to bypass authentication, access, modify, or delete data, and perform administrative operations on the database.
- **Example Vulnerability:** Consider a login form where the application checks the database for a username and password match:

  ```sql
  SELECT * FROM users WHERE username = 'inputUsername' AND password = 'inputPassword';


```
An attacker can input a username as `admin' --` (assuming 'admin' is a username), turning the SQL command into:
```sql
SELECT * FROM users WHERE username = 'admin' --' AND password = 'inputPassword';
```

The `--` comments out the rest of the SQL command, bypassing the password check and potentially granting unauthorized access.

### Prevention Strategies

- **Use Prepared Statements (Parameterized Queries):** These separate SQL code from data, ensuring that user input is treated as a value rather than executable code.

```csharp
// Example in C#
var command = new SqlCommand("SELECT * FROM users WHERE username = @Username AND password = @Password", connection);
command.Parameters.AddWithValue("@Username", inputUsername);
command.Parameters.AddWithValue("@Password", inputPassword);

```

- **Use Stored Procedures:** Encapsulating the SQL code in the database and calling it from the application can reduce exposure to injection, as long as the stored procedure does not concatenate queries with user input.
- **Whitelist Input Validation:** Validate user inputs against a list of permitted values, especially for fields that require only alphanumeric characters.
- **Escape All User Inputs:** If you must include user input in SQL queries, ensure that the input is properly escaped to prevent it from being interpreted as part of the SQL command.
- **Least Privilege:** Ensure that the database connection from the application uses an account with the least privileges necessary, reducing the potential impact of a successful injection attack.

### Tools and Practices

- **Regularly Update and Patch:** Keep all your software up-to-date to protect against known vulnerabilities that could be exploited via SQL Injection.
- **Security Testing:** Employ tools like SQL injection scanners and conduct penetration testing to identify and fix vulnerabilities.

## Cross-side Scripting

Cross-Site Scripting (XSS) vulnerabilities arise when an application includes untrusted data in a web page without proper validation or escaping, allowing attackers to execute malicious scripts in the context of the victim's browser.

### Types of XSS Attacks

- **Reflected XSS:** The malicious script comes from the current HTTP request. Often, the user is tricked into clicking a link that contains the script.
- **Stored XSS:** The malicious script is permanently stored on the target servers, such as in a database, message forum, visitor log, or comment field, and is then retrieved and executed when the user accesses the stored content.
- **DOM-based XSS:** The vulnerability exists in the client-side code rather than the server-side code. The attacker manipulates the Document Object Model (DOM) of the web page, causing the client-side code to run differently.

### Prevention Strategies

- **Encode Data on Output:** Use HTML entity encoding on any output that is included in an HTML page to ensure that it is treated as data, not executable code.
- **Validate Input:** Implement strict input validation to ensure that only expected data is accepted. This includes validating all headers, cookies, query strings, form fields, and hidden fields against a specific expected pattern.
- **Use Appropriate Response Headers:** Set HTTP response headers to prevent browsers from interpreting files as something else than declared. For example, `X-Content-Type-Options: nosniff`.
- **Content Security Policy (CSP):** Use CSP to specify which sources are trusted, effectively preventing the browser from loading malicious assets.
- **Sanitize Data:** Use libraries or modules designed to sanitize input and remove potentially malicious scripts.
- **Use HttpOnly Cookies:** Mark sensitive cookies as `HttpOnly` to prevent access to cookie values via client-side scripts.

### Tools and Practices for Detecting XSS Vulnerabilities

- **Automated Scanning:** Utilize automated tools and vulnerability scanners that can help identify potential XSS vulnerabilities in web applications.
- **Penetration Testing:** Conduct regular penetration testing using skilled testers who attempt to exploit XSS and other vulnerabilities.
- **Security Awareness:** Educate developers about secure coding practices and the importance of preventing XSS vulnerabilities.

## HTTPS, Digitální Certifikáty

### HTTPS (Hypertext Transfer Protocol Secure)

- **Definition:** HTTPS is an extension of HTTP that uses SSL/TLS protocols to provide encrypted communication and secure identification of a network web server. It is the foundation for secure communication on the World Wide Web.
- **Functionality:** HTTPS encrypts the data exchanged between the client (browser) and the server, preventing eavesdropping, tampering, and message forgery.
- **Benefits:**
	- **Data Encryption:** Ensures that the data transferred between the user and the website cannot be read or modified by anyone who intercepts the communication.
	- **Authentication:** Verifies that the website the user is communicating with is the intended website, which builds user trust.
	- **Data Integrity:** Guarantees that the data sent and received has not been altered.

### Digital Certificates

- **Definition:** Digital certificates, also known as SSL/TLS certificates, are digital files used to certify the ownership of a public key by the named subject of the certificate. They are issued by Certificate Authorities (CAs).
- **Components:**
	- **Subject's name:** The entity (person, organization, device) the certificate represents.
	- **Subject's public key:** Used for encrypting messages and digital signatures.
	- **Issuer's information:** The Certificate Authority (CA) that issued the certificate.
	- **Digital signature of the issuer:** Verifies the certificate's authenticity.
	- **Validity period:** The timeframe during which the certificate is considered valid.
- **Functionality:** When a browser connects to an HTTPS-secured server, the server presents its digital certificate for verification. The browser checks the certificate against a list of trusted CAs and validates the digital signature. If the certificate is valid, a secure connection is established.
- **Benefits:**
	- **Trust and Credibility:** Users can trust that their information is encrypted and securely communicated to the intended server.
	- **Compliance:** Many regulations and policies require the use of HTTPS for transmitting sensitive information.
	- **SEO Advantage:** Search engines like Google favor HTTPS websites, potentially improving search ranking.

### Best Practices for Implementing HTTPS and Digital Certificates

- **Use Strong Encryption:** Utilize strong encryption protocols (like TLS 1.2 or higher) and cipher suites.
- **Obtain Certificates from Reputable CAs:** Ensure that your digital certificates are issued by trusted and reputable Certificate Authorities.
- **Keep Private Keys Secure:** Protect the private key associated with your digital certificate from unauthorized access.
- **Regularly Renew Certificates:** Keep track of certificate expiry dates and renew them before they expire to avoid service disruptions.
- **Implement HSTS (HTTP Strict Transport Security):** Force browsers to only use HTTPS connections for your site by implementing HSTS.

## Autentizace a Autorizace

### Autentizace (Authentication)

Authentication is the process of verifying the identity of a user, device, or entity. It ensures that the individual or entity attempting to access a system is who they claim to be.

- **Methods:**
	- **Passwords:** The most common method, requiring users to enter a secret password.
	- **Multi-factor Authentication (MFA):** Enhances security by requiring two or more verification factors, which could include something the user knows (password), something the user has (security token, phone), or something the user is (biometric verification).
	- **Biometrics:** Uses unique physical characteristics, such as fingerprints or facial recognition, for identification.
	- **Single Sign-On (SSO):** Allows users to log in once and gain access to multiple related systems without being prompted to log in again.

### Autorizace (Authorization)

Authorization occurs after authentication and determines what resources a user can access or what operations they can perform. It involves granting or denying permissions to authenticated users.

- **Methods:**
	- **Role-Based Access Control (RBAC):** Assigns permissions to roles, and users are granted roles that provide them with the necessary permissions.
	- **Attribute-Based Access Control (ABAC):** Determines access based on a set of policies and attributes of the user, resource, and environment.
	- **Access Control Lists (ACLs):** Specifies which users or system processes can access resources and what operations they can perform.

### Implementing Authentication and Authorization

- **Secure Storage of Credentials:** Use strong hashing algorithms to store passwords securely. Never store plain-text passwords.
- **Session Management:** Once authenticated, maintain user sessions securely. Use tokens (such as JWT) that can be validated for user actions without requiring re-authentication.
- **Least Privilege Principle:** Grant users only the access they need to perform their tasks. Start with minimal permissions and grant additional permissions as necessary.
- **Continuous Monitoring and Logging:** Keep detailed logs of authentication attempts and user activities. Monitor these logs for unusual or unauthorized activities.

