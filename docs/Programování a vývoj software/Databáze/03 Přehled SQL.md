---
tags:
  - 
share: "true"
---

# 03 Přehled SQL

## Základní SQL Dotazy

SQL enables you to interact with relational databases by performing tasks such as querying data, inserting new records, updating existing data, and deleting records. Below are some of the foundational SQL query types that are crucial for database operations.

### Data Types in SQL

Understanding data types is crucial for defining columns in tables accurately.
- **INT:** Represents an integer.
- **VARCHAR(n):** A variable-length string with a maximum length of n characters.
- **BOOLEAN:** Stores TRUE or FALSE values.
- **DATE, TIME, DATETIME:** Store dates, times, and both respectively.
- **FLOAT, DECIMAL(m, d):** Represent real numbers. DECIMAL(m, d) specifies the maximum number of digits (m) that can be stored, with d digits to the right of the decimal point.

### SELECT Statement

The SELECT statement is used to select data from a database. The data returned is stored in a result table, sometimes called the result set.

- **Syntax:**

	```sql
	SELECT column1, column2, ...
	FROM table_name;
	```

- **Example:** To select the name and age of all students from the "Students" table:

	```sql
	SELECT Name, Age FROM Students;
	```

### WHERE Clause

The WHERE clause is used to filter records that fulfill a specified condition.

- **Syntax:**

	```sql
	SELECT column1, column2, ...
	FROM table_name
	WHERE condition;
	```

- **Example:** To select all students who are older than 18:

	```sql
	SELECT * FROM Students WHERE Age > 18;
	```

### ORDER BY Clause

The ORDER BY keyword is used to sort the result set in ascending or descending order.

- **Syntax:**

	```sql
	SELECT column1, column2, ...
	FROM table_name
	ORDER BY column1 [ASC|DESC], column2 [ASC|DESC], ...;
	```

- **Example:** To select all students and sort the result by the "Name" column in ascending order:

	```sql
	SELECT * FROM Students
	ORDER BY Name ASC;
	```

### INSERT INTO Statement

The INSERT INTO statement is used to insert new records into a table.

- **Syntax:**

	```sql
	INSERT INTO table_name (column1, column2, column3, ...)
	VALUES (value1, value2, value3, ...);
	```

- **Example:** To add a new student record into the "Students" table:

	```sql
	INSERT INTO Students (Name, Age, Major)
	VALUES ('John Doe', 22, 'Computer Science');
	```

### UPDATE Statement

The UPDATE statement is used to modify existing records in a table.

- **Syntax:**

	```sql
	UPDATE table_name
	SET column1 = value1, column2 = value2, ...
	WHERE condition;
	```

- **Example:** To update the major of a student named John Doe:

	```sql
	UPDATE Students
	SET Major = 'Data Science'
	WHERE Name = 'John Doe';
	```

### DELETE Statement

The DELETE statement is used to delete existing records from a table.

- **Syntax:**

	```sql
	DELETE FROM table_name WHERE condition;
	```

- **Example:** To delete the record of a student named John Doe:

	```sql
	DELETE FROM Students WHERE Name = 'John Doe';
	```

### Limiting Query Results

The LIMIT clause is used to constrain the number of rows returned by a query. It is especially useful in large datasets.
- **Syntax:**

	```sql
	SELECT column_name
	FROM table_name
	LIMIT number;
	```

- **Example:** Get the top 5 youngest students.

	```sql
	SELECT * FROM Students
	ORDER BY Age ASC
	LIMIT 5;
	```

These additional SQL queries and concepts build upon the foundational knowledge required for effective database management and manipulation. For computer science students, especially those preparing for the bachelor state exams at Matfyz, mastering these queries is crucial for navigating relational databases efficiently.

## Seskupování Dat a Agregace

Grouping data and performing aggregations are powerful SQL features used to summarize and analyze data. This section covers key concepts and functions related to these operations.

### GROUP BY Clause

The `GROUP BY` clause groups rows that have the same values into summary rows, like "find the number of customers in each country."

- **Syntax:**

	```sql
	SELECT column_name, AGGREGATE_FUNCTION(column_name)
	FROM table_name
	WHERE condition
	GROUP BY column_name;
	```

- **Example:** Counting the number of students in each major.

	```sql
	SELECT Major, COUNT(*) AS NumberOfStudents
	FROM Students
	GROUP BY Major;
	```

### Aggregate Functions

Aggregate functions perform a calculation on a set of values and return a single value. Common aggregate functions include:

- **COUNT():** Returns the number of rows that match the specified criteria.
	- **Example:** Counting the total number of courses.

		```sql
		SELECT COUNT(*) FROM Courses;
		```

- **SUM():** Returns the sum of a numeric column.
	- **Example:** Calculating the total credits of all courses.

		```sql
		SELECT SUM(Credits) FROM Courses;
		```

- **AVG():** Returns the average value of a numeric column.
	- **Example:** Finding the average age of students.

		```sql
		SELECT AVG(Age) FROM Students;
		```

- **MIN() and MAX():** Return the minimum and maximum values of a column.
	- **Example:** Finding the youngest and oldest students.

		```sql
		SELECT MIN(Age), MAX(Age) FROM Students;
		```

### HAVING Clause

The HAVING clause is used to filter data groups based on a condition, especially after aggregation.

- **Syntax:**

	```sql
	SELECT column_name, AGGREGATE_FUNCTION(column_name)
	FROM table_name
	GROUP BY column_name
	HAVING condition;
	```

- **Example:** Finding majors with more than 10 students.

	```sql
	SELECT Major, COUNT(*) AS NumberOfStudents
	FROM Students
	GROUP BY Major
	HAVING COUNT(*) > 10;
	```

### Combining GROUP BY and HAVING

Combining these clauses allows for sophisticated analyses, such as identifying trends or anomalies within grouped data.

- **Example:** Identifying courses with an average grade lower than 3.0.

	```sql
	SELECT CourseID, AVG(Grade) AS AverageGrade
	FROM Grades
	GROUP BY CourseID
	HAVING AVG(Grade) < 3.0;
	```

## Spojování Tabulek

SQL joins are used to retrieve data from multiple tables by establishing a logical connection between them. This section explores various types of joins and their uses.

### INNER JOIN

The INNER JOIN selects records that have matching values in both tables.

- **Syntax:**

	```sql
	SELECT columns
	FROM table1
	INNER JOIN table2
	ON table1.common_field = table2.common_field;
	```

- **Example:** Joining `Students` and `Courses` tables to list all students and their enrolled courses.

	```sql
	SELECT Students.Name, Courses.CourseName
	FROM Students
	INNER JOIN Courses
	ON Students.CourseID = Courses.ID;
	```

### LEFT JOIN (or LEFT OUTER JOIN)

The LEFT JOIN returns all records from the left table (table1), and the matched records from the right table (table2). The result is NULL from the right side if there is no match.

- **Syntax:**

	```sql
	SELECT columns
	FROM table1
	LEFT JOIN table2
	ON table1.common_field = table2.common_field;
	```

- **Example:** Listing all students and their courses, including students who haven't enrolled in any course.

	```sql
	SELECT Students.Name, Courses.CourseName
	FROM Students
	LEFT JOIN Courses
	ON Students.CourseID = Courses.ID;
	```

### RIGHT JOIN (or RIGHT OUTER JOIN)

The RIGHT JOIN returns all records from the right table (table2), and the matched records from the left table (table1). The result is NULL from the left side if there is no match.

- **Syntax:**

	```sql
	SELECT columns
	FROM table1
	RIGHT JOIN table2
	ON table1.common_field = table2.common_field;
	```

- **Example:** Listing all courses and any students enrolled in them.

	```sql
	SELECT Students.Name, Courses.CourseName
	FROM Students
	RIGHT JOIN Courses
	ON Students.CourseID = Courses.ID;
	```

### FULL JOIN (or FULL OUTER JOIN)

The FULL JOIN returns all records when there is a match in either left (table1) or right (table2) table. Records that do not match are also included, with NULL in the place of unmatched columns.

- **Syntax:**

	```sql
	SELECT columns
	FROM table1
	FULL JOIN table2
	ON table1.common_field = table2.common_field;
	```

- **Example:** Listing all students and all courses, including students without courses and courses without students.

	```sql
	SELECT Students.Name, Courses.CourseName
	FROM Students
	FULL JOIN Courses
	ON Students.CourseID = Courses.ID;
	```

### CROSS JOIN

The CROSS JOIN returns a Cartesian product of the two tables, combining each row of the first table with all rows in the second table.

- **Syntax:**

	```sql
	SELECT columns
	FROM table1
	CROSS JOIN table2;
	```

- **Example:** Listing all possible combinations of students and courses.

	```sql
	SELECT Students.Name, Courses.CourseName
	FROM Students
	CROSS JOIN Courses;
	```

## Vnořené Dotazy, Operátory, Testy Na NULL Hodnotu

### Vnořené Dotazy

Nested queries (subqueries) are queries placed inside another SQL query. They can be used in SELECT, INSERT, UPDATE, or DELETE statements, and in WHERE or HAVING clauses.

- **Types of Nested Queries:**
	- **Scalar Subqueries:** Return a single value and can be used where single value expressions are valid.
	- **Row Subqueries:** Return a single row and can be compared with single-row operators.
	- **Table Subqueries:** Return a table (multiple rows and columns) and can be used in the FROM clause.

- **Example of a Scalar Subquery:**

	```sql
	SELECT Name, Age 
	FROM Students 
	WHERE Age > (SELECT AVG(Age) FROM Students);
	```

	This query selects the names and ages of students who are older than the average age of all students.

- **Example of a Row Subquery:**

	```sql
	SELECT Name, Major 
	FROM Students 
	WHERE (Name, Major) IN (SELECT Name, Major FROM ScholarshipRecipients);
	```

	This query selects the names and majors of students who are also scholarship recipients.

- **Example of a Table Subquery:**

	```sql
	SELECT S.Name, C.CourseName 
	FROM Students S, (SELECT CourseID, CourseName FROM Courses) C 
	WHERE S.CourseID = C.CourseID;
	```

	This query joins a table of students with a subquery table of courses to list student names with their course names.

### Operátory

SQL includes various operators for performing arithmetic, comparison, and logical operations. Key operators include:

- **Arithmetic Operators:** `+`, `-`, `*`, `/` for basic arithmetic operations.
- **Comparison Operators:** `=`, `!=`, `<`, `>`, `<=`, `>=` for comparing values.

#### Logical Operators

Used to combine boolean conditions.

- **AND**: True if both conditions are true.

	```sql
	SELECT * FROM Orders WHERE Quantity > 10 AND Date < '2022-01-01';
	```

- **OR**: True if at least one condition is true.

	```sql
	SELECT * FROM Orders WHERE Quantity > 10 OR Date < '2022-01-01';
	```

- **NOT**: Inverts the truth value.

	```sql
	SELECT * FROM Students WHERE NOT Age < 18;
	```

#### Special Operators

Specialized operators for particular types of operations.

- **IN**: Checks if a value matches any in a list.

	```sql
	SELECT Name FROM Students WHERE Major IN ('Math', 'Science');
	```

- **LIKE**: Pattern matching with wildcards `%` and `_`.

	```sql
	SELECT Name FROM Students WHERE Name LIKE 'Jo%';
	```

- **BETWEEN**: Range check (inclusive).

	```sql
	SELECT Name FROM Employees WHERE Salary BETWEEN 50000 AND 100000;
	```

- **IS NULL**: Checks for NULL values.

	```sql
	SELECT Name FROM Students WHERE GraduationDate IS NULL;
	```

- **EXISTS**: Checks if a subquery returns any rows.

	```sql
	SELECT Name FROM Students WHERE EXISTS (SELECT * FROM Scholarships WHERE Students.StudentID = Scholarships.StudentID);
	```

### Testy Na NULL Hodnotu

Handling NULL values is crucial in SQL since NULL represents missing or unknown data.

- **IS NULL:** Checks if a column value is NULL.

	```sql
	SELECT Name FROM Students WHERE GraduationDate IS NULL;
	```

- **IS NOT NULL:** Checks if a column value is not NULL.

	```sql
	SELECT Name FROM Students WHERE GraduationDate IS NOT NULL;
	```

- **COALESCE:** Returns the first non-NULL value in the list of arguments.

	```sql
	SELECT Name, COALESCE(PhoneNumber, 'No Phone') FROM Students;
	```

## Uložené Procedury

Stored procedures are a powerful SQL feature allowing the encapsulation of complex operations into a single callable routine. They are stored in the database and can be invoked to perform actions, including data manipulation and transaction management.

### Advantages of Stored Procedures

- **Performance:** Since stored procedures are compiled once and stored in executable form, they can be executed quickly, reducing the time and network traffic involved in sending multiple queries from the client to the server.
- **Security:** Stored procedures provide an additional layer of security, allowing users to execute complex operations without granting them access to the underlying tables.
- **Maintainability:** Encapsulating business logic in stored procedures makes it easier to maintain and update the application logic without changing the application code.
- **Reduced Network Traffic:** By minimizing the amount of data sent over the network, stored procedures can significantly improve application performance, especially in bandwidth-sensitive environments.

### Creating a Stored Procedure

- **Syntax:**

	```sql
	CREATE PROCEDURE procedure_name
	AS
	BEGIN
		-- SQL statements
	END;
	```

- **Example:** A stored procedure to add a new student record.

	```sql
	CREATE PROCEDURE AddStudent
	@Name VARCHAR(100),
	@Age INT,
	@Major VARCHAR(100)
	AS
	BEGIN
		INSERT INTO Students (Name, Age, Major) VALUES (@Name, @Age, @Major);
	END;
	```

### Executing a Stored Procedure

- **Syntax:**

	```sql
	EXECUTE procedure_name;
	```

- **Example:** Executing the `AddStudent` procedure to insert a new student.

	```sql
	EXECUTE AddStudent @Name = 'Jane Doe', @Age = 22, @Major = 'Computer Science';
	```

### Modifying and Deleting Stored Procedures

- **Modifying:** Use the `ALTER PROCEDURE` command followed by the procedure name and the new SQL statements.

	```sql
	ALTER PROCEDURE AddStudent
	-- New SQL statements or modifications
	```

- **Deleting:** Use the `DROP PROCEDURE` command followed by the procedure name.

	```sql
	DROP PROCEDURE AddStudent;
	```

### Parameterized Stored Procedures

Stored procedures can accept parameters, making them more flexible and reusable. Parameters can be used to pass values into stored procedures and return values to the calling program.

- **Example with Output Parameter:**

	```sql
	CREATE PROCEDURE GetStudentCount
	@Major VARCHAR(100),
	@StudentCount INT OUTPUT
	AS
	BEGIN
		SELECT @StudentCount = COUNT(*) FROM Students WHERE Major = @Major;
	END;
	```

To execute and retrieve the count:

```sql
DECLARE @Count INT;
EXECUTE GetStudentCount @Major = 'Computer Science', @StudentCount = @Count OUTPUT;
SELECT @Count AS StudentCount;
```

## Triggery

Triggers are special types of stored procedures that automatically execute or fire when specific actions occur in the database, such as INSERT, UPDATE, or DELETE operations.

### Types of Triggers

- **AFTER Triggers (also known as FOR Triggers):** Execute after the triggering SQL statement completes. They are often used for auditing, enforcing business rules, or maintaining complex integrity constraints that cannot be enforced through foreign keys and checks.
- **BEFORE Triggers:** Execute before the triggering SQL statement is executed. They are useful for validating or modifying data before it is committed to the database.
- **INSTEAD OF Triggers:** Replace the triggering SQL statement. They are commonly used in views to provide a way to update data, since views do not typically support updates directly.

### Creating a Trigger

- **Syntax:**

    ```sql
    CREATE TRIGGER trigger_name
    ON table_name
    AFTER|BEFORE|INSTEAD OF INSERT|UPDATE|DELETE
    AS
    BEGIN
        -- SQL statements to execute
    END;
    ```

- **Example:** A trigger to audit changes to the `Students` table.

    ```sql
    CREATE TRIGGER trg_StudentAudit
    ON Students
    AFTER UPDATE
    AS
    BEGIN
        INSERT INTO StudentAudits(StudentID, AuditType, ChangeDate)
        SELECT i.StudentID, 'UPDATE', GETDATE()
        FROM inserted i;
    END;
    ```

### Important Concepts in Triggers

- **inserted and deleted Tables:** Special tables used within triggers to capture the state of data before and after the DML operation. The `inserted` table stores the new values for INSERT and UPDATE operations, while the `deleted` table stores the old values for UPDATE and DELETE operations.
- **Disabling and Enabling Triggers:** You can temporarily disable a trigger using the `DISABLE TRIGGER` statement and re-enable it with the `ENABLE TRIGGER` statement. This can be useful during bulk data operations where triggers might significantly slow down processing.

### Considerations When Using Triggers

- **Performance Impact:** Triggers can impact database performance due to their automatic execution. It's important to ensure that the code within triggers is optimized for performance.
- **Complexity and Maintenance:** Triggers can make the database behavior more complex and harder to predict. Adequate documentation and careful testing are essential.
- **Recursive Triggers:** Triggers that cause other triggers to fire can lead to recursive loops. SQL Server allows for control over recursion depth to prevent infinite loops.

### Deleting a Trigger

- **Syntax:**

    ```sql
    DROP TRIGGER trigger_name;
    ```

- **Example:**

    ```sql
    DROP TRIGGER trg_StudentAudit;
    ```

## Funkce

SQL functions are predefined operations that perform specific tasks and return a value. They are vital for data analysis, manipulation, and transformation within SQL databases.

### Built-in SQL Functions

SQL offers a wide range of built-in functions that can be divided into several categories:

#### String Functions

- **UPPER() / LOWER():** Converts a string to uppercase or lowercase.

	```sql
	SELECT UPPER('Matfyz'), LOWER('Matfyz');
	```

- **CONCAT() / CONCAT_WS():** Concatenates two or more strings into one string. `CONCAT_WS()` allows a separator to be specified.

	```sql
	SELECT CONCAT('Matfyz', ' is great'), CONCAT_WS('-', '2021', 'Matfyz');
	```

- **LENGTH() / CHAR_LENGTH():** Returns the length of a string.

	```sql
	SELECT LENGTH('Matfyz');
	```

- **SUBSTRING() / SUBSTR():** Extracts a substring from a string.

	```sql
	SELECT SUBSTRING('Matfyz', 1, 3);
	```

#### Numeric Functions

- **ROUND() / FLOOR() / CEIL():** Rounds a number to a specified number of decimal places, rounds down, or rounds up.

	```sql
	SELECT ROUND(123.456, 2), FLOOR(123.456), CEIL(123.456);
	```

- **ABS():** Returns the absolute value of a number.

	```sql
	SELECT ABS(-123);
	```

#### Date and Time Functions

- **CURRENT_DATE() / CURRENT_TIME() / NOW():** Returns the current date, time, or both.

	```sql
	SELECT CURRENT_DATE(), CURRENT_TIME(), NOW();
	```

- **DATEDIFF() / DATE_ADD():** Calculates the difference between two dates or adds a specified time interval to a date.

	```sql
	SELECT DATEDIFF('2022-12-31', '2022-01-01'), DATE_ADD('2022-01-01', INTERVAL 1 MONTH);
	```

### User-Defined Functions (UDFs)

UDFs allow for the creation of custom functions to encapsulate frequently used or complex calculations, improving code reusability and readability.

- **Creating a UDF:**

	```sql
	CREATE FUNCTION GetFullName (@FirstName VARCHAR(100), @LastName VARCHAR(100))
	RETURNS VARCHAR(200)
	AS BEGIN
		RETURN CONCAT(@FirstName, ' ', @LastName);
	END;
	```

- **Using a UDF:**

	```sql
	SELECT GetFullName('John', 'Doe') AS FullName;
	```

### Aggregate Functions

Aggregate functions perform a calculation on a set of values and return a single value, often used with the `GROUP BY` clause.

- **SUM() / AVG() / MIN() / MAX():** Calculates the sum, average, minimum, or maximum of a set of values.

	```sql
	SELECT SUM(Grade) FROM Grades WHERE StudentID = 1;
	```

- **COUNT():** Counts the number of rows that match a specified condition.

	```sql
	SELECT COUNT(*) FROM Students WHERE Major = 'Computer Science';
	```