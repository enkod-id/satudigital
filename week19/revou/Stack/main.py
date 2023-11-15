class Stack:
    def __init__(self):
        self.items = []

    def push(self, val: int):
        # insert your code here
        return

    def pop(self) -> int:
        # insert your code here
        return

    def is_empty(self) -> bool:
        # insert your code here
        return

    def list_to_stack(self, input_list: list) -> None:
        # insert your code here
        return

def run_stack(input_list, pop_time):
    stack = Stack()

    stack.list_to_stack(input_list)

    for i in range(pop_time):
        Stack.pop()

    return stack.items

result = run_stack(input_list=[1, 2, 3], pop_time=2)
print(result)          
