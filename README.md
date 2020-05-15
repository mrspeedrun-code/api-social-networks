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

* HTTP request : POST → user/create

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
