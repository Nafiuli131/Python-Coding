import json


userJSON = '{"first_name": "John", "last_name": "Doe", "age": 30}'


user = json.loads(userJSON)

print(user)
print(user['first_name'])

'''Json is like an api'''
