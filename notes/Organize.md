- students
- teachers
- transcripts
- attendance
- schedule

Solutions:
- linked list type structure


file = sequence of bytes

## Relational Databases
Student
  - Student ID
  - Student Name
  - Teacher ID
  - Teacher Name
  - Course IDr
  - Course Name
  - Transcript
    - Student ID
    - Teacher ID
    - CourseID
    - Term
    - Grade

* Q(Students,name=Yasmeen)
* Q(Trans,SID=1,Term=2015)
  - CID1
  - CID2
  - CID3
* Q(Teachers,Name=Z)

## Structured Query Language (SQL --> "Sequel")
-Oracle
-Sybase
-IBM DB2
-Postgres (PostgreSQL)
-mySQL
  -no transactions



## SQLite
* .open asdfasd.db
* .databases
* .tables
* CREATE TABLE doughnuts (name TEXT, price REAL, qty INTEGER);
* INSERT INTO doughnuts VALUES ("jelly",2.50,10);
* .schema
* .schema doughnuts
* .dump
* drop table doughnuts
* select name,price from doughnuts;
* select * from doughnuts where name='chocolate';
* select * from doughnuts where name like 'c%';
* select * from doughnuts where qty < 10;
* select * from doughnuts where price >= 2 and price < 3;
* select * from doughnuts where qty < price;
* .read doughnuts.sql
* select rowid,name from doughnuts
* delete from doughnuts where name="caramel"
* update doughnuts set qty=10 where name="chocolate";
* update doughnuts set qty=qty-1 where name="chocolate";
* update doughnuts set qty=20;
* cat classes.sql
* select name from people, doughnuts; --> too ambiguous
* select people.name, doughnuts.name from people, doughnuts where doughnuts.name="glazed" and age<10;
* update...
* select * from people,classes where people.id=classes.id;
* select classes.name from people, classes where people.id=classes.id and grade <= 65;
* order by grade;

## How SQL Databases are Usually Represented
* Index field (usually first one)
* Balanced search tree (O = log n)
* Splay trees
** if you look for something now you're probs gonna want to find it again soon
* Red Black Tree
* 2-3 Tree
** all data stored in leaves
** info in branches about greater and less than
* BTree
** leaf-->511/512 children

<hr>

* CREATE TABLE creates a new table.
* INSERT INTO adds a new row to a table.
* SELECT queries data from a table.
UPDATE edits a row in a table.
ALTER TABLE changes an existing table.
DELETE FROM deletes rows from a table.

SELECT is the clause you use every time you want to query information from a database.
WHERE is a popular command that lets you filter the results of the query based on conditions that you specify.
LIKE and BETWEEN are special operators that can be used in a WHERE clause
AND and OR are special operators that you can use with WHERE to filter the query on two or more conditions.
ORDER BY lets you sort the results of the query in either ascending or descending order.
LIMIT lets you specify the maximum number of rows that the query will return. This is especially important in large tables that have thousands or even millions of rows.

Aggregate functions combine multiple rows together to form a single value of more meaningful information.
COUNT takes the name of a column(s) as an argument and counts the number of rows where the value(s) is not NULL.
GROUP BY is a clause used with aggregate functions to combine data from one or more columns.
SUM() takes the column name as an argument and returns the sum of all the values in that column.
MAX() takes the column name as an argument and returns the largest value in that column.
MIN() takes the column name as an argument and returns the smallest value in that column.
AVG() takes a column name as an argument and returns the average value for that column.
ROUND() takes two arguments, a column name and the number of decimal places to round the values in that column.

Primary Key is a column that serves a unique identifier for row in the table. Values in this column must be unique and cannot be NULL.
Foreign Key is a column that contains the primary key to another table in the database. It is used to identify a particular row in the referenced table.
Joins are used in SQL to combine data from multiple tables.
INNER JOIN will combine rows from different tables if the join condition is true.
LEFT OUTER JOIN will return every row in the left table, and if the join condition is not met, NULL values are used to fill in the columns from the right table.
AS is a keyword in SQL that allows you to rename a column or table in the result set using an alias.
***
