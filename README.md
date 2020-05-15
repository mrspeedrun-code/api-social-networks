### api-social-networks

This is a school project to make a social network API.

API Blueprint documentation:
https://mysocialnetworkapi.docs.apiary.io/

## Overview
It's CRUDS api for managed user, event, group, thread, photo cover, survey and ticketing.


### User (CRUDS)

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Member, Organizers and Admin  |
| Response formats           | application/json |

* HTTP request : POST → user/create
* HTTP request : GET → user/show
* HTTP request : PUT → user/update/:id
* HTTP request : DELETE → user/destroy
* HTTP request : GET → user/search


### Event (CRUDS)

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | Yes               |
| Who can use it ?           | Organizers
| Response formats           | application/json |

* HTTP request : POST → event/create
* HTTP request : GET → event/show
* HTTP request : PUT → event/update/:id
* HTTP request : DELETE → event/destroy
* HTTP request : GET → event/search


### Group (CRUDS)

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | Yes               |
| Who can use it ?           | Admin
| Response formats           | application/json |

* HTTP request : POST → group/create
* HTTP request : GET → group/show
* HTTP request : PUT → group/update/:id
* HTTP request : DELETE → group/destroy
* HTTP request : GET → group/search


### Photo Book (CRUDS)

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | Yes               |
| Who can use it ?           | Members
| Response formats           | application/json |

* HTTP request : POST → photoBook/create
* HTTP request : GET → photoBook/show
* HTTP request : PUT → photoBook/update/:id
* HTTP request : DELETE → photoBook/destroy
* HTTP request : GET → photoBook/search


### Survey (CRUDS)

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | Yes               |
| Who can use it ?           | Organizers
| Response formats           | application/json |

* HTTP request : POST → survey/create
* HTTP request : GET → survey/show
* HTTP request : PUT → survey/update/:id
* HTTP request : PUT → survey/update/answer/:id
* HTTP request : DELETE → survey/destroy
* HTTP request : GET → survey/search


### Ticketing (CRUDS)

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | Yes               |
| Who can use it ?           | Organizers
| Response formats           | application/json |

* HTTP request : POST → ticketing/create
* HTTP request : GET → ticketing/show
* HTTP request : PUT → ticketing/update/:id
* HTTP request : DELETE → ticketing/destroy
* HTTP request : GET → ticketing/search


### ShoppingList (CRUDS)

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | Yes               |
| Who can use it ?           | Members
| Response formats           | application/json |

* HTTP request : POST → shoppingList/create
* HTTP request : GET → shoppingList/show
* HTTP request : PUT → shoppingList/update/:id
* HTTP request : DELETE → shoppingList/destroy
* HTTP request : GET → shoppingList/search

### Carpooling (CRUDS)

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | Yes               |
| Who can use it ?           | Members
| Response formats           | application/json |

* HTTP request : POST → carpooling/create
* HTTP request : GET → carpoolinkg/show
* HTTP request : PUT → carpooling/update/:id
* HTTP request : DELETE → carpooling/destroy
* HTTP request : GET → carpooling/search


## Install
```
npm install

```
## Run

```
npm run start

```

## Test

```
npm run test

```
