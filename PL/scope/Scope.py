j = 0


def addj(arr):
    global j
    print('j=', j)
    for i in range(len(arr)):
        arr[i] += j


i = 100
iarr = [1, 2, 3]
s2 = ""
j = 99
addj(iarr)
for j in range(len(iarr)):
    s1 = "Hello"
    s2 = s1
    i = j
    print(iarr[j])

s1 = "World"
print(s1, s2)
print("i=", i)
print("j=", j)
