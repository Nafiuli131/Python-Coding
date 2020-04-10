class User:
      # Constructor
  def __init__(self, name, email, age):
    self.name = name
    self.email = email
    self.age = age

  def greeting(self):
    return f'My name is {self.name} and I am {self.age}'

class Customer(User):
      # Constructor
  def __init__(self, name, email, age):
    self.name = name
    self.email = email
    self.age = age
    self.balance = 0

  def set_balance(self, balance):
    self.balance = balance




nafiul =User('Nafiul Islam','nafiuli131@gmail.com',23)
print(nafiul.greeting())

c = Customer('aa','vv',23)
c.set_balance(2222)
print(c.set_balance)