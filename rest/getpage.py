import urllib2

url = "http://www.nytimes.com"

request = urllib2.urlopen(url)
result = request.read()

print result

