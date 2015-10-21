#f = open("data.dat", "w")
#f.write("Hello\n")
#f.write("world\n")
#f.close()

#f = open("data.dat", "r")
#s = f.read()
#s = f.readline()
#s = f.readlines()
#print s
#for item in s:
#    print item
#f.close()

#d = {}
import shelve
d = shelve.open("shelf.dat")
#d['one'] = 'hello'
#d['two'] = {'a':123, 'b':'stuff'}
#d[3] = 12345
print d
print d[2]
tmp = d['two']
tmp['a'] = 'new data'
d['two'] = tmp
d.close()
