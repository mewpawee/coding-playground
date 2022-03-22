import random

def get_witness(problem, assignment):
    """
    Given an instance of a partition problem via a list of numbers (the problem) and a list of
    (-1, 1), we say that the assignment satisfies the problem if their dot product is 0.
    """

    sum = 0
    mx = 0
    side_obfuscator = 1 - 2 * random.randint(0, 1) #result of 1 or -1
    witness = [sum]

    assert len(problem) == len(assignment)
    for num, side in zip(problem, assignment):
        assert side == 1 or side == -1
        sum += side * num * side_obfuscator
        witness += [sum]
        mx = max(mx, num)
    #make sure that it is a satisfying assignment
    assert sum == 0
    shift = random.randint(0, mx)
    witness = [x + shift for x in witness]
    return witness

result = get_witness([4, 11, 8, 1], [1, -1, 1, -1])
print(result)
