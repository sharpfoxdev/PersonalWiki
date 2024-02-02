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

### JOIN Clauses

JOIN clauses are used to combine rows from two or more tables, based on a related column between them.

- **Types of JOINs:**
	- **INNER JOIN:** Selects records that have matching values in both tables.
	- **LEFT (OUTER) JOIN:** Selects all records from the left table, and the matched records from the right table.
	- **RIGHT (OUTER) JOIN:** Selects all records from the right table, and the matched records from the left table.
	- **FULL (OUTER) JOIN:** Selects all records when there is a match in either left or right table.

- **Example:** To select all students and their corresponding course names:

	```sql
	SELECT Students.Name, Courses.CourseName
	FROM Students
	INNER JOIN Courses ON Students.CourseID = Courses.ID;
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

### Aggregate Functions

SQL aggregate functions return a single value, calculated from values in a column. Useful functions include COUNT(), AVG(), SUM(), MIN(), and MAX().

- **COUNT():** Returns the number of rows that matches a specified criterion.
	- **Example:** To count the number of students in the "Students" table:

		```sql
		SELECT COUNT(*) FROM Students;
		```

- **AVG():** Returns the average value of a numeric column.
	- **Example:** To find the average age of students:

		```sql
		SELECT AVG(Age) FROM Students;
		```

- **SUM():** Returns the total sum of a numeric column.
	- **Example:** To sum the total number of credits of all courses:

		```sql
		SELECT SUM(Credits) FROM Courses;
		```

- **MIN() and MAX():** Return the smallest/largest value of the selected column.
	- **Example:** To find the youngest and oldest student:

		```sql
		SELECT MIN(Age), MAX(Age) FROM Students;
		```

### GROUP BY Clause

The GROUP BY statement groups rows that have the same values in specified columns into summary rows, like "find the number of students in each major".

- **Syntax:**

	```sql
	SELECT column_name, AGGREGATE_FUNCTION(column_name)
	FROM table_name
	WHERE condition
	GROUP BY column_name;
	```

- **Example:** To count the number of students by major:

	```sql
	SELECT Major, COUNT(*) 
	FROM Students 
	GROUP BY Major;
	```

### Handling NULL Values

NULL values represent missing or unknown data.
- **IS NULL:** Checks if the value is NULL.

	```sql
	SELECT * FROM Students WHERE GraduationDate IS NULL;
	```

- **IS NOT NULL:** Checks if the value is not NULL.

	```sql
	SELECT * FROM Students WHERE GraduationDate IS NOT NULL;
	```


### Filtering Aggregated Data with HAVING

The HAVING clause is used to filter data groups based on a condition, especially after aggregation.
- **Syntax:**

	```sql
	SELECT column_name, AGGREGATE_FUNCTION(column_name)
	FROM table_name
	GROUP BY column_name
	HAVING condition;
	```

- **Example:** Find majors having more than 10 students.

	```sql
	SELECT Major, COUNT(*) AS NumberOfStudents
	FROM Students
	GROUP BY Major
	HAVING COUNT(*) > 10;
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

## Seskupování Dat a Agregace.

## Spojování Tabulek.

## Vnořené Dotazy, Operátory, Testy Na NULL Hodnotu

## Uložené Procedury, Triggery, Funkce