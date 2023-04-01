# Fullstack Express + + React +  MongoDB Server

An easy way to get started with a Express server with MongoDB with Node.js. [Source to original post to read more about it.](https://www.robinwieruch.de/mongodb-express-setup-tutorial/)

## Features

- Express
- REST API
- MongoDB

## Requirements

- [node & npm](https://nodejs.org/en/)
- [git](https://www.javatpoint.com/git-commands)

## Installation

- `git clone git@github.com:adarshddotexe/web-dev-minor-2.git`
- `cd web-dev-minor-2`
- `npm install`
- [start MongoDB](https://www.freecodecamp.org/news/learn-mongodb-a4ce205e7739/)
- `npm start`
- optional: include _.env_ in your _.gitignore_

### GET Routes (Retrieve)

- visit http://localhost:3000
  - /messages
  - /messages/1
  - /users
  - /users/1

### Beyond GET Routes

#### CURL

- Create a message with:
  - `curl -X POST -H "Content-Type:application/json" http://localhost:3000/messages -d '{"text":"Hi again, World"}'`
- Delete a message with:
  - `curl -X DELETE -H "Content-Type:application/json" http://localhost:3000/messages/1`

#### Postman (Recommended for beginners)

- Install [Postman](https://www.getpostman.com/apps) to interact with REST API
- Create a message with:
  - URL: http://localhost:3000/messages
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{ "text": "Hi again, World" }`
- Delete a message with:
  - URL: http://localhost:3000/messages/1
  - Method: DELETE
- Update / Modify a message with:
  - URL: http://localhost:3000/messages/1
  - Method: PUT
