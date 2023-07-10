def isValid(s: str) -> bool:
    stack = []
    bracket_mapping = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for bracket in s:
        if bracket in bracket_mapping:
            if not stack or stack[-1] != bracket_mapping[bracket]:
                return False
            stack.pop()
        else:
            stack.append(bracket)

    return not stack

s = '()'
print(isValid(s)) # True

s = '({)}'
print(isValid(s)) # False