def find_first_duplicate(arr):
    max_len = len(arr)
    visited_element = [0] * mas_len

    for number in arr:
        if number in visited_element:
            return number

        visited_element.append(number)    
    return
arr = [1, 3, 4, 2, 2, 5, 6]
first_duplicate = find_first_duplicate(arr)
print(first_duplicate)    


def find_first_duplicate(arr):
    max_len = len(arr)
    visited_element = set()

    for number in arr:
        if number in visited_element:
            return number

        visited_element.add(number)
    return None  

arr = [1, 2, 3, 4, 5]
first_duplicate = find_first_duplicate(arr)
print(first_duplicate)


def find_first_duplicate(arr):
    max_len = len(arr)
    visited_element = set()

    for number in arr:
        if number in visited_element:
            return number

        visited_element.add(number)
    return -1  

arr = [1, 2, 3, 4, 5]
first_duplicate = find_first_duplicate(arr)
print(first_duplicate)


def find_first_duplicate(arr):
    max_len = len(arr)
    visited_element = set()

    for number in arr:
        if number in visited_element:
            return number

        visited_element.add(number)
    return -1  

arr = [1, 1, 1, 1, 1]
first_duplicate = find_first_duplicate(arr)
print(first_duplicate)