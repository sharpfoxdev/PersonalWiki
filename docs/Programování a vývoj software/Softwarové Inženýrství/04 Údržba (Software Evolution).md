---
tags:
  - 
share: "true"
---

# 04 Údržba (Software Evolution)

## Druhy Údržby Software (Repair, Adapt, Add/Modify Functionality)

Software maintenance is classified into several types, each addressing different needs that arise during the lifecycle of software. These maintenance activities can significantly extend the life and effectiveness of software systems.

### 1. Corrective Maintenance (Repair)

- **Purpose**: To fix bugs that were not discovered during the initial development stages or have emerged over time due to changes in the environment or usage patterns.
- **Activities Include**:
	- Diagnosing and fixing errors reported by users.
	- Correcting errors found by developers through continued testing.
- **Importance**: Ensures the reliability and stability of the software by addressing critical issues that affect its operation.

### 2. Adaptive Maintenance (Adapt)

- **Purpose**: To make the software work in a new or changed environment. This includes modifications due to changes in software dependencies, operating systems, hardware upgrades, or compliance with new regulations.
- **Activities Include**:
	- Updating the software to ensure compatibility with new versions of the operating system or other software components.
	- Modifying software to comply with new regulations or legal requirements.
- **Importance**: Keeps the software relevant and usable in evolving technological landscapes and regulatory environments.

### 3. Perfective Maintenance (Add/Modify Functionality)

- **Purpose**: To add new features or enhance existing functionalities to improve performance or usability. This type of maintenance is driven by user requirements and technological advancements.
- **Activities Include**:
	- Adding new features requested by users to meet emerging needs.
	- Optimizing existing code to improve performance or enhance the user experience.
- **Importance**: Helps the software to remain competitive and meet the evolving needs of its users by continuously adding value.

### 4. Preventive Maintenance

- **Purpose**: To prevent future problems or potential errors by restructuring or optimizing the code without changing its functionality. This is often referred to as "code refactoring."
- **Activities Include**:
	- Restructuring code to improve readability and maintainability.
	- Updating documentation to reflect changes in the system and facilitate future maintenance activities.
- **Importance**: Reduces the likelihood of future errors, decreases maintenance costs over time, and makes the software easier to modify and extend.

### Best Practices for Software Maintenance

- **Establish a Maintenance Plan**: Develop a comprehensive plan that includes scheduling maintenance activities and allocating resources.
- **Use Version Control Systems**: Ensure all changes are tracked to facilitate rollbacks if needed and to understand the evolution of the software.
- **Engage with Stakeholders**: Regularly communicate with users and stakeholders to gather feedback and understand their evolving needs.
- **Invest in Automated Testing**: Implement automated regression testing to ensure that maintenance activities do not introduce new bugs.

## Faktory Ovlivňující Cenu Údržby Software

Several key factors influence the cost of maintaining software. Understanding these can help in devising strategies to minimize maintenance costs over the software's lifecycle.

### 1. Complexity of the Software

- **Impact**: The more complex the software, the more challenging and time-consuming it is to understand, modify, and test it, leading to higher maintenance costs.
- **Management Strategy**: Use modular design and adhere to coding standards to reduce complexity.

### 2. Quality of the Original Codebase

- **Impact**: High-quality, well-documented, and clean code requires less effort to maintain. Conversely, poor code quality can significantly increase maintenance costs.
- **Management Strategy**: Implement code reviews and refactoring as part of the development process to ensure high code quality from the start.

### 3. Dependency on External Systems or Libraries

- **Impact**: Software that relies heavily on external systems, libraries, or APIs may face maintenance challenges if those dependencies are updated or deprecated.
- **Management Strategy**: Carefully manage dependencies, and consider abstraction layers to minimize impact from external changes.

### 4. Technological Advances

- **Impact**: Rapid technological changes can render parts of the software obsolete, necessitating updates or replacements.
- **Management Strategy**: Stay informed about technological trends and plan for periodic updates or technology refresh cycles.

### 5. User Feedback and Changing Requirements

- **Impact**: As user needs evolve, software may require updates or new features, increasing maintenance costs.
- **Management Strategy**: Establish a structured process for managing and prioritizing user feedback and change requests.

### 6. Regulatory and Security Compliance

- **Impact**: Compliance with new regulations or security standards can necessitate unforeseen changes in the software.
- **Management Strategy**: Design software with compliance and security in mind, and monitor relevant regulations for changes.

### 7. Platform Compatibility

- **Impact**: Maintaining software compatibility across multiple platforms (e.g., operating systems, devices) can increase maintenance efforts.
- **Management Strategy**: Utilize cross-platform development tools and frameworks, and prioritize platforms based on user demographics.

### 8. Scalability and Performance Optimization

- **Impact**: As the user base grows, performance optimization and scalability enhancements may be required, adding to maintenance costs.
- **Management Strategy**: Design for scalability from the outset and monitor performance metrics to guide optimizations.

### Best Practices for Controlling Maintenance Costs

- **Proactive Maintenance**: Regularly update and refactor the software to prevent the accumulation of technical debt.
- **Automated Testing**: Use automated testing to quickly identify and address defects introduced during maintenance.
- **Continuous Training**: Ensure that the development and maintenance teams are up-to-date with current technologies and best practices.


- Software costs often dominate computer system costs.
	- The costs of software are often greater than the hardware cost.
- Software costs more to maintain than it does to develop.
	- For systems with a long life, maintenance costs may be several times higher than development costs.
