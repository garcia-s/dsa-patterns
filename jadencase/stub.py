import sys

if(len(sys.argv) < 2 or not sys.argv[1].isdigit()): 
    print("Please provide an amount of words you would like to generate")
    exit()


words = ""
for i in range(int(sys.argv[1])):
       words += "fake "

print("%s" % words)

