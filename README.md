### api-social-networks

* list user
  * ```[GET]  http://localhost:3000/show```
* get user
  * ```[GET]  http://localhost:3000/show/{userId}```
* add user
  * ```[POST]  http://localhost:3000/create```
* update user
  * ```[PUT]  http://localhost:3000/update/{userId}```
* delete user
  * ```[DELETE]  http://localhost:3000/delete/{userId}```

A User object has eleven properties: ```first_name```, ```last_name```, ```email```, ```password```, ```age```, ```city```, ```city_code```, ```street_number```, ```street_type```, ```street_name``` and ```phone``` .

```
{
  "first_name": "firstname_1",
  "last_name": "lastname_1",
  "email": "email1@gmail.com",
  "password": "password",
  "age": 1,
  "city": "Paris",
  "city_code": "75000",
  "street_number": "13",
  "street_type": "rue",
  "street_name": "cambrai",
  "phone": "0606060606"
}
```
