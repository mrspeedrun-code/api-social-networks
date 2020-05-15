### api-social-networks

This is a school project to make a social network API.

API Blueprint documentation:
https://mysocialnetworkapi.docs.apiary.io/

## Overview
It's CRUDS api for managed user, event, group, thread, photo cover, survey and ticketing.


### [POST] Create user
Allows the creation of a single user.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Member, Organizers and Admin  |
| Response formats           | application/json |

* HTTP request : POST → user/create


### [POST] Create Event
Allows the creation of a single event.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | Yes               |
| Who can use it ?           | Organizers
| Response formats           | application/json |

* HTTP request : POST → event/create



### [POST] Create Group
Allows the creation of a single group.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | Yes               |
| Who can use it ?           | Admin
| Response formats           | application/json |

* HTTP request : POST → Group/create



### [POST] Create Photo Book
Allows the creation of a single photo book.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | Yes               |
| Who can use it ?           | Members
| Response formats           | application/json |

* HTTP request : POST → photoBook/create



### [POST] Create Survey
Allows the creation of a single survey.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | Yes               |
| Who can use it ?           | Organizers
| Response formats           | application/json |

* HTTP request : POST → survey/create


### [POST] Create Ticketing
Allows the creation of a ticketing.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | Yes               |
| Who can use it ?           | Organizers
| Response formats           | application/json |

* HTTP request : POST → ticketing/create


### [POST] Create ShoppingList
Allows the creation of a single event.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | Yes               |
| Who can use it ?           | Members
| Response formats           | application/json |

* HTTP request : POST → shoppingList/create



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
