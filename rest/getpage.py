import urllib2
import json

url = "http://www.nytimes.com"

request = urllib2.urlopen(url)
result = request.read()
r = json.loads(result)


print r
print 
print r.keys()
print r['main']
print r['main']['temp']
#print result

