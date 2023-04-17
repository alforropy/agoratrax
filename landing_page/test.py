
f = open("index.html", "r")
t = open("index_generated.html", "w")
data = ""
for line in f.readlines():
	s = line.strip()
	if s != "":
		data += s + "\n"
t.write(data)
t.close()
f.close()
