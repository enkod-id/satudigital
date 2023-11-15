class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def max_tree_depth(tree: []) -> int:
    # insert your code here
    pass

def run_tree_depth(input_tree):
    return max_tree_depth(input_tree)

input_tree = [3, 9, 20, None, None, 15, 7]
result = run_tree_depth(input_tree)
print(result)
