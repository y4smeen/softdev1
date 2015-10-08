import sqlite3

conn = sqlite3.connect("demo.db")

c = conn.cursor()

q = "create table people (name text, age integer, id integer)"

q = "create table classes (name text, age integer, id integer)"

c.execute(q)

conn.commit()
