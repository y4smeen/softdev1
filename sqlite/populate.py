import sqlite3
import csv

conn = sqlite3.connect("demo.db")
c = conn.cursor()

q = "INSERT INTO people VALUES ('%(name)s',%(age)s,%(id)s)"
reader = csv.DictReader(open("people.csv"))
for item in reader:
    q = TEMPLATE%item
    print q
    c.execute(q)

q = "DELETE FROM classes"
c.execute(q)
TEMPLATE = """
INSERT INTO classes
    VALUES ("%(name)s",%(grade)s,%(id)s)
"""

conn.commit()
