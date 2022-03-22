import hashlib
from math import log2, ceil

def hash_string(s):
    return hashlib.sha256(s.encode()).hexdigest()

class MerkleTree:
    """
    A naive Merkle tree implementation using SHA256
    """
    def __init__(self, data):
        self.data = data
        print("data:", self.data, '\n')
        next_pow_of_2 = int(2**ceil(log2(len(data))))
        print("pow of 2:", next_pow_of_2, '\n')
        #Add the empty leaf if the leaf is missing
        self.data.extend([0] * (next_pow_of_2 - len(data)))
        #Add empty node and show hash the leaves
        self.tree = ["" for x in self.data] + \
                    [hash_string(str(x)) for x in self.data]
        print("tree:", self.tree, '\n')
        #travese from the last branch toward the root data[1]
        for i in range(len(self.data) - 1, 0, -1):
            self.tree[i] = hash_string(self.tree[i * 2] + self.tree[i * 2 + 1])
        print("finished tree:", self.tree, '\n')

    def get_root(self):
        return  self.tree[1]

    def get_val_and_path(self, id):
        val = self.data[id]
        auth_path = []
        #shift to get the first one in the actual structure
        id = id + len(self.data)
        while id > 1:
            #Plus or minus one to get the pair, ^ meat XOR operation
            auth_path += [self.tree[ id ^ 1]]
            #Move up one dept
            id = id // 2
        return val, auth_path

def verify_merkle_path(root, data_size, value_id, value, path):
    cur = hash_string(str(value))
    tree_node_id = value_id +  int(2**ceil(log2(data_size)))
    for sibling in path:
        assert tree_node_id > 1
        #if left side of the binary tree
        if tree_node_id % 2 == 0:
            cur = hash_string(cur + sibling)
        else:
            cur = hash_string(sibling + cur)
        tree_node_id = tree_node_id // 2
    assert tree_node_id == 1
    return root == cur

tree = MerkleTree(["Yes","Sir","I Can", "Boogie!"])
tree_root = tree.get_root()
tree_val, tree_path = tree.get_val_and_path(3)
tree_size = len(tree.data)
result = verify_merkle_path(tree_root, tree_size, 3, tree_val, tree_path)
print("result:", result)
