---
tags:
  - 
share: "true"
---

# 04 Moderní Databázové Systémy

## Klasifikace, Specifické Vlastnosti

![[Pasted image 20240206160839.png|Pasted image 20240206160839.png]]
Modern database systems encompass a wide array of technologies designed to store, retrieve, and manage data efficiently in various scenarios. Below is an overview of the main types of modern database systems and their specific properties.

### Relational Database Management Systems (RDBMS)

- **Characteristics:** Based on the relational model, using structured query language (SQL) for data manipulation and definition.
- **Specifické Vlastnosti:** ACID properties (Atomicity, Consistency, Isolation, Durability), table-based structure, strong data integrity, and support for complex queries.
- **Examples:** PostgreSQL, MySQL, Oracle Database.

### NoSQL Databases

Broad category that encompasses several types of databases designed for large-scale data storage and for handling big data and real-time web applications.
- **Types:**
	- **Document Databases:** Store data in document-like structures (JSON, BSON, XML). 
		- **Examples:** MongoDB, CouchDB.
	- **Key-Value Stores:** Store data as key-value pairs, ideal for simple data models or quick access to large data volumes.
		- **Examples:** Redis, Amazon DynamoDB.
	- **Wide-Column Stores:** Store data in tables, rows, and dynamic columns, suitable for analyzing large datasets.
		- **Examples:** Apache Cassandra, Google Bigtable.
	- **Graph Databases:** Designed for data whose relations are well represented as a graph and have querying based on graph theory.
		- **Examples:** Neo4j, Amazon Neptune.
- **Specifické Vlastnosti:** Schema-less, scalability, flexibility, suitable for unstructured data, and support for distributed database architecture.

### NewSQL Databases

- **Characteristics:** Aim to combine the scalability and flexibility of NoSQL systems with the ACID guarantees of traditional RDBMS.
- **Specifické Vlastnosti:** Horizontal scaling, distributed architecture, SQL support, and real-time analytics.
- **Examples:** Google Spanner, CockroachDB.

### In-Memory Databases (IMDB)

- **Characteristics:** Store data in the main memory (RAM) instead of disk storage, resulting in high performance and low latency.
- **Specifické Vlastnosti:** Real-time processing, volatility, primarily used for caching, session storage, and real-time analytics.
- **Examples:** Redis, SAP HANA.

### Time Series Databases (TSDB)

- **Characteristics:** Optimized for storing and querying time-series data - data that is indexed in time order.
- **Specifické Vlastnosti:** Efficient storage and querying of time-series data, support for data retention policies, and time-based aggregation.
- **Examples:** InfluxDB, TimescaleDB.

### Object-Oriented Databases (OODB)

- **Characteristics:** Store data in the form of objects, as used in object-oriented programming.
- **Specifické Vlastnosti:** Support for complex data types, encapsulation of behavior, and direct representation of real-world entities.
- **Examples:** db4o, ObjectDB.

## MapReduce

### Princip

![[Pasted image 20240206191217.png|Pasted image 20240206191217.png]]
![[Pasted image 20240206191232.png|Pasted image 20240206191232.png]]
![[Pasted image 20240206191315.png|Pasted image 20240206191315.png]]
![[Pasted image 20240206191428.png|Pasted image 20240206191428.png]]
![[Pasted image 20240206191514.png|Pasted image 20240206191514.png]]
![[Pasted image 20240206192026.png|Pasted image 20240206192026.png]]
![[Pasted image 20240206192050.png|Pasted image 20240206192050.png]]
MapReduce is a framework used for processing vast amounts of data across many machines in a cluster. It simplifies data processing on large scale, breaking down the tasks into smaller chunks, which are then processed in a parallel manner to improve efficiency and performance.
- **Map Phase:**
	- In the Map phase, the input dataset is divided into smaller sub-datasets. A map function is applied to each sub-dataset, which processes the data and produces key-value pairs as output.
	- **Example:** Consider a dataset containing text documents. The map function processes each document and produces key-value pairs where the key is a word and the value is the number of occurrences of that word in the document.
- **Shuffle and Sort Phase:**
	- After the Map phase, the MapReduce framework collects all key-value pairs and sorts them by key. The sorting process assists in the subsequent Reduce phase, ensuring that all values for a single key are grouped together.
	- **Example:** All key-value pairs produced by the map function are shuffled and sorted, grouping all occurrences of the same word together, making it easier to aggregate in the next step.
- **Reduce Phase:**
	- In the Reduce phase, the framework iterates over the sorted key-value pairs and passes them to the reduce function. The reduce function then aggregates the values for each key, producing a smaller set of key-value pairs as the final output.
	- **Example:** The reduce function takes the key-value pairs for each word and sums up the counts, producing a single key-value pair per word with the total occurrences of that word across all documents.
- **Application:**
	- MapReduce is widely used in applications requiring large-scale data analysis, such as word count, log analysis, and data transformation operations. It is particularly beneficial in environments where the data is too vast to be processed on a single machine, requiring distributed processing to achieve reasonable performance times.
- **Benefits:**
	- **Scalability:** Easily processes petabytes of data by distributing the task across many machines.
	- **Fault Tolerance:** Automatically handles failures in the cluster by rerunning failed tasks.
	- **Simplicity:** Developers can write applications quickly without needing to understand the underlying details of parallel processing or fault tolerance.

### Vlastnosti

MapReduce's architecture is designed to solve problems involving large data sets by distributing the task across multiple computers, offering a parallel processing model that has several defining features:

#### Scalability

- **Horizontal Scaling:** MapReduce is designed to scale out across hundreds or thousands of servers in a cluster. Adding more machines to the cluster linearly increases the processing capacity.
- **Example:** Processing petabytes of data can be efficiently managed by increasing the number of nodes in the cluster, allowing for more parallel execution of Map and Reduce tasks.

#### Fault Tolerance

- **Automatic Task Rerun:** MapReduce automatically reruns tasks that fail due to hardware or software failures, ensuring that the processing completes successfully.
- **Data Replication:** Input data is replicated across multiple nodes. If a node fails, the system can rerun the task on another node that has a copy of the data, minimizing the impact of individual node failures.

#### Data Locality Optimization

- **Moving Computation to Data:** To reduce network congestion, MapReduce tries to execute tasks on nodes where the data is already present. This principle of moving computation to data, rather than data to computation, optimizes performance.
- **Example:** If a node storing a particular data chunk fails, the task can be rerun on another node that contains the replicated chunk, reducing the need for data transfer across the network.

#### Simple Programming Model

- **Abstraction:** The MapReduce model abstracts the complexity of parallel processing, fault tolerance, and data distribution. Programmers only need to focus on writing the Map and Reduce functions.
- **Flexibility:** It can be applied to a wide range of data processing tasks, from simple counting and filtering operations to complex data transformations and analysis.

#### High Throughput

- **Batch Processing:** MapReduce is optimized for high throughput of large datasets rather than low latency of individual tasks. It is well-suited for scenarios where the complete dataset needs to be processed to produce the final result.
- **Example:** Analyzing log files generated by web servers to extract usage patterns or compute statistics such as page views or unique visitor counts.

### Kritika

![[Pasted image 20240206192224.png|Pasted image 20240206192224.png]]
MapReduce has been a pivotal technology in big data processing, but it is not without its limitations and has faced criticism on several fronts:

#### Performance Overhead

- **Disk I/O:** MapReduce relies heavily on writing intermediate results to disk between the Map and Reduce phases, leading to significant disk I/O overhead and increased processing time.
- **Static Data Flow:** The rigid, two-stage data flow (Map, then Reduce) can be inefficient for complex data processing tasks that might benefit from a more dynamic workflow.

#### Lack of Real-Time Processing

- **Batch Processing Model:** MapReduce is inherently designed for batch processing, making it unsuitable for real-time data processing tasks. This limitation has led to the development of alternative technologies like Apache Storm and Apache Flink for stream processing.

#### Complexity in Developing Complex Applications

- **Programming Model:** While the simplicity of the MapReduce programming model is advantageous for certain applications, it becomes cumbersome and less intuitive when dealing with complex data processing tasks that require multiple MapReduce jobs or complex data dependencies.

#### Resource Intensiveness

- **High Resource Consumption:** The need to write intermediate data to disk not only affects performance but also requires significant storage and processing resources, which can be costly in large-scale environments.

#### Limited Iterative Processing Support

- **Iterative Algorithms:** Many machine learning and graph processing algorithms require iterative processing, where the output of one iteration becomes the input of the next. MapReduce's batch-oriented nature makes iterative algorithms less efficient, as each iteration requires reading from and writing to disk.

#### Alternatives and Solutions

- **Apache Spark:** Developed as an alternative to MapReduce, Spark offers in-memory processing, which significantly speeds up iterative algorithms and complex data processing tasks. Spark also supports real-time processing through its streaming module.
- **Apache Hadoop YARN:** The introduction of YARN (Yet Another Resource Negotiator) as a cluster management layer in Hadoop 2.x has allowed for more diverse workloads, including interactive and real-time processing, to run on a Hadoop cluster alongside traditional batch MapReduce jobs.

#### Example of Critique Application

Consider a complex data analysis task that requires multiple transformations and aggregations across a vast dataset. Implementing this task in MapReduce would require chaining several MapReduce jobs, which is not only cumbersome to program but also incurs significant performance overhead due to repeated disk I/O operations. In contrast, using Apache Spark, the same task could be implemented more succinctly and run much faster due to Spark's in-memory processing capabilities.

### Alternativní Přístupy

![[Pasted image 20240206192408.png|Pasted image 20240206192408.png]]
![[Pasted image 20240206192526.png|Pasted image 20240206192526.png]]
![[Pasted image 20240206192559.png|Pasted image 20240206192559.png]]
![[Pasted image 20240206192624.png|Pasted image 20240206192624.png]]
The limitations of MapReduce have led to the development of several alternative data processing frameworks and models, each designed to overcome specific challenges associated with large-scale data processing.

#### Apache Spark

- **Overview:** An in-memory data processing framework that provides a faster alternative to MapReduce. Spark can run tasks up to 100 times faster in memory and 10 times faster on disk.
- **Features:** Supports in-memory data storage for intermediate computations, making it highly efficient for iterative algorithms such as those used in machine learning and graph processing. Spark also offers a rich set of higher-level tools, including Spark SQL for SQL and structured data processing, MLlib for machine learning, GraphX for graph processing, and Spark Streaming for real-time data processing.
- **Use Case:** Ideal for iterative data processing tasks, real-time analytics, and applications requiring fast processing speeds.

#### Apache Flink

- **Overview:** A stream processing framework with true streaming capabilities, not limited to micro-batching like Spark Streaming. Flink is designed to process unbounded and bounded data streams efficiently.
- **Features:** Provides consistent state management and fault tolerance mechanisms, making it suitable for mission-critical real-time analytics applications. Flink’s API supports event time processing, allowing for accurate event ordering and time-based operations.
- **Use Case:** Best suited for applications that require real-time data processing and analytics, such as fraud detection, anomaly detection, and live data monitoring.

#### Apache Storm

- **Overview:** A real-time computation system that processes data streams reliably at scale. Unlike Spark and Flink, Storm processes data one record at a time, making it a true streaming engine.
- **Features:** Guarantees that each unit of data will be processed at least once or exactly once, making it highly reliable. Storm is easy to set up and operate, making it accessible for real-time analytics applications.
- **Use Case:** Ideal for real-time analytics, monitoring systems, and continuous computation applications.

#### Apache Hadoop YARN

- **Overview:** Yet Another Resource Negotiator (YARN) extends Hadoop’s capabilities by separating the resource management and job scheduling/monitoring functions into separate daemons. This architecture provides a more flexible and efficient way to manage cluster resources compared to the traditional MapReduce resource management system.
- **Features:** Enables other data processing frameworks, in addition to MapReduce, to run on Hadoop, transforming it into a multi-application data processing platform.
- **Use Case:** Suitable for organizations looking to consolidate various processing workloads, including batch processing, interactive SQL, real-time streaming, and machine learning on a single platform.

#### Google Cloud Dataflow

- **Overview:** A fully managed service for stream and batch data processing. Dataflow is designed to provide a simplified way to process large amounts of data with minimal operational overhead.
- **Features:** Offers a unified programming model, which abstracts away the differences between batch and streaming data processing. It automatically manages resource allocation and parallelization.
- **Use Case:** Ideal for businesses looking for a managed service that can handle complex data processing pipelines with ease, focusing on both batch and real-time data processing.

## NoSQL Databáze

NoSQL databases are designed to overcome limitations of RDBMS in handling big data and real-time web applications. They support a wide array of data models, including document, key-value, wide-column, and graph formats, offering scalability and performance benefits.
![[Pasted image 20240206161119.png|Pasted image 20240206161119.png]]
![[Pasted image 20240206161231.png|Pasted image 20240206161231.png]]
![[Pasted image 20240206161311.png|Pasted image 20240206161311.png]]
![[Pasted image 20240206161347.png|Pasted image 20240206161347.png]]

### Types of NoSQL Databases

![[Pasted image 20240206165806.png|Pasted image 20240206165806.png]]

#### Document-Oriented Databases
![[Pasted image 20240206193721.png|Pasted image 20240206193721.png]]
![[Pasted image 20240206193854.png|Pasted image 20240206193854.png]]
![[Pasted image 20240206193923.png|Pasted image 20240206193923.png]]
![[Pasted image 20240206194016.png|Pasted image 20240206194016.png]]
![[Pasted image 20240206194059.png|Pasted image 20240206194059.png]]
![[Pasted image 20240206194155.png|Pasted image 20240206194155.png]]
- **Characteristics:** Store data as documents in formats like JSON, BSON, or XML, making them ideal for storing and querying document-based information.
- **Examples:** MongoDB, CouchDB.
- **Use Cases:** Content management systems, cataloging applications, and applications requiring flexible schemas.

#### Key-Value Stores

![[Pasted image 20240206193028.png|Pasted image 20240206193028.png]]
![[Pasted image 20240206193138.png|Pasted image 20240206193138.png]]
![[Pasted image 20240206193222.png|Pasted image 20240206193222.png]]
- **Characteristics:** Store data as a collection of key-value pairs. They are highly partitionable and allow horizontal scaling.
- **Examples:** Redis, DynamoDB, riak
- **Use Cases:** Shopping carts, user sessions, and settings or preference storage for web applications.

#### Wide-Column Stores

![[Pasted image 20240206193258.png|Pasted image 20240206193258.png]]
![[Pasted image 20240206193449.png|Pasted image 20240206193449.png]]
![[Pasted image 20240206193556.png|Pasted image 20240206193556.png]]
![[Pasted image 20240206193630.png|Pasted image 20240206193630.png]]
- **Characteristics:** Store data in tables, rows, and dynamically named columns. They are optimized for queries over large datasets and offer high scalability and performance.
- **Examples:** Apache Cassandra, Google Bigtable, H-Base
- **Use Cases:** Internet search indexing, recommendation engines, and analyzing social media interactions.

#### Graph Databases
- see [[04 Moderní Databázové Systémy#Graph Databases|04 Moderní Databázové Systémy > Graph Databases]]
- **Characteristics:** Use graph structures with nodes, edges, and properties to represent and store data. They are designed for data whose relationships are best represented as a graph.
- **Examples:** Neo4j, Amazon Neptune.
- **Use Cases:** Social networks, fraud detection systems, and graph-based search.

### Specific Characteristics of NoSQL Databases

#### Scalability

- **Horizontal Scaling:** Ability to add more machines or nodes to the database to handle increased load, often without downtime.

#### Flexible Schema

- **Schema-less:** NoSQL databases do not require a predefined schema, allowing for the storage of data without a fixed structure. This flexibility facilitates rapid development and iterations.

#### Performance

- **Optimized for Speed:** Designed to offer quick data retrieval and storage, particularly for specific types of queries and data models.

#### Data Model Support

- **Variety of Data Models:** Support for documents, key-value pairs, wide columns, and graphs to cater to various application needs.

#### High Availability and Durability

- **Replication and Partitioning:** Built-in support for data replication and partitioning, ensuring high availability and durability of data across distributed systems.

### Considerations When Using NoSQL Databases

- **Consistency Models:** NoSQL databases often use eventual consistency rather than strict ACID transactions, which may not be suitable for all applications.
- **Complexity:** Managing and querying data across distributed systems can introduce complexity, particularly for deployments spanning multiple data centers.
- **Data Integrity:** Without rigid schemas, ensuring data integrity requires careful application logic and validation.

## Grafové Databáze
![[Pasted image 20240206194254.png|Pasted image 20240206194254.png]]
![[Pasted image 20240206194331.png|Pasted image 20240206194331.png]]
![[Pasted image 20240206194436.png|Pasted image 20240206194436.png]]
![[Pasted image 20240206194645.png|Pasted image 20240206194645.png]]
![[Pasted image 20240206194726.png|Pasted image 20240206194726.png]]
![[Pasted image 20240206194749.png|Pasted image 20240206194749.png]]
![[Pasted image 20240206194846.png|Pasted image 20240206194846.png]]
![[Pasted image 20240206194930.png|Pasted image 20240206194930.png]]
![[Pasted image 20240206195013.png|Pasted image 20240206195013.png]]
![[Pasted image 20240206195048.png|Pasted image 20240206195048.png]]
Graph databases are designed to handle data whose relationships are naturally represented as a graph and are characterized by their efficiency in traversing complex relationships among data points.

### Core Components

- **Nodes:** Entities in the graph, such as people, items, or categories.
- **Edges:** Relationships between the nodes, which can be directed or undirected.
- **Properties:** Information associated with nodes or edges. For example, a person node might have properties like name, age, and email.

### Advantages of Graph Databases

- **Efficient Relationship Exploration:** Allows for efficient querying of deep relationships in the data, far outperforming relational databases in scenarios where relationships are complex and deeply interconnected.
- **Flexibility:** The schema-free nature of graph databases makes them adaptable to changes, accommodating evolving data models without the need for migrations.
- **Intuitive Data Modeling:** The graph model is often more intuitive for modeling real-world scenarios where entities naturally form a network.

### Use Cases

- **Social Networks:** Managing complex and dynamic relationships between users, their interests, and interactions.
- **Recommendation Engines:** Generating personalized recommendations by analyzing the network of users, products, and interactions.
- **Fraud Detection:** Identifying patterns that indicate fraudulent behavior by analyzing transactions and user networks.
- **Network and IT Operations:** Analyzing network topologies for optimization and monitoring, and managing IT assets and their relationships.

### Popular Graph Database Systems

- **Neo4j:** One of the most popular graph databases, known for its powerful querying capabilities and ease of use.
- **Amazon Neptune:** A fully managed graph database service that supports both property graph and RDF models, making it versatile for different use cases.
- **OrientDB:** Offers the flexibility of document databases with the power of graph databases, supporting complex relationships and deep queries.

### Querying Graph Databases

- **Cypher Query Language (Neo4j):** A declarative graph query language that allows for expressive and efficient querying of the graph.

    ```cypher
    MATCH (u:User)-[:FRIENDS_WITH]->(f)
    WHERE u.name = 'John Doe'
    RETURN f.name
    ```

- **Gremlin (Apache TinkerPop):** A graph traversal language and machine used by various graph databases, including Amazon Neptune and JanusGraph.

    ```gremlin
    g.V().has('name', 'John Doe').out('friends_with').values('name')
    ```

### Challenges and Considerations

- **Complexity:** Implementing and querying graph databases can be complex, especially for those accustomed to relational models.
- **Performance Scaling:** While graph databases excel in data relationship queries, ensuring performance at scale, particularly with very large graphs, requires careful architecture and indexing.


![[Pasted image 20240206165343.png|Pasted image 20240206165343.png]]
![[Pasted image 20240206165404.png|Pasted image 20240206165404.png]]
![[Pasted image 20240206165422.png|Pasted image 20240206165422.png]]
![[Pasted image 20240206165450.png|Pasted image 20240206165450.png]]
![[Pasted image 20240206165514.png|Pasted image 20240206165514.png]]