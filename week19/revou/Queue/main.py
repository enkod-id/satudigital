class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, val: int):
        # insert your code here
        pass

    def dequeue(self) -> int:
        # insert your code here
        pass

    def is_empty(self) -> bool:
        # insert your code here
        pass

    def list_to_queue(self, input_list: list) -> none:
        # insert your code here
        pass

def run_queue(input_list, dequeue_time):
    queue =  Queue()

    queue.list_to_queue(input_list)

    for i in range(dequeue_time):
        queue.dequeue()

    return queue.items

result = run_queue(input_list=[1, 2, 3, 4, 5], dequeue_time=3)
print(result)            