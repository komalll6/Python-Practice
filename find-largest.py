#find largest number in array
arr = [20,43,65,12,56,78]

largest = arr[0]
smallest = arr[0]
second_largest = arr[0]

for num in arr: 
    if num>largest:
        largest=num

for num in arr:
    if num<smallest:
        smallest=num

# for num in arr:
#     if num>largest:
#         largest=num
#     elif num<smallest:
#         smallest=num  

for num in arr:
    if num>second_largest and num<largest:
        second_largest=num              

print("The largest number in the array is:",largest)
print("The smallest number in the array is:",smallest)
# print("The difference between largest and smallest number is:",largest-smallest)
print("The second largest number in the array is:",second_largest)