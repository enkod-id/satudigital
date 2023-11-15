class Node:
    def __init__(self, value):
        self.value = value 
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert(self, values):
        # insert your code here
        return

    def delete(self, values):
        # insert your code here
        return 

    def display(self, values):
        # insert your code here
        return

def linked_list_function(list, deleted_node):
   ll = LinkedList()
   ll.insert(list)

   ll.delete(deleted_node)

   return ll.display()

result = linked_list_function(list=[1, 2, 3, 2, 4], deleted_node=2)
print(result)                     
