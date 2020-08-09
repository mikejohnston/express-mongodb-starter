# Express MongoDB Starter

![screenshot](screenshot.png?raw=true "Screenshot")
Example response in Insomnia

### Description

An Express API starter using Monk to communicate with MongoDB.

### Dependencies

Default:

- [body-parser](https://github.com/expressjs/body-parser)
  - parse incoming body requests
- [cors](https://github.com/expressjs/cors)
  - middleware for enabling cross origin resource sharing
- [dotenv](https://github.com/motdotla/dotenv)
  - module for loading .env variables
- [express](https://github.com/expressjs/express)
  - server framework
- [helmet](https://github.com/helmetjs/helmet)
  - http header security
- [monk](https://github.com/Automattic/monk)
  - tiny mongodb communication layer
- [morgan](https://github.com/expressjs/morgan)
  - request logger middleware

Dev dependencies:

- [mocha](https://www.google.com)
- [nodemon](https://www.google.com)
- [supertest](https://www.google.com)

### Project structure

```
/config
    connection.js -- set the db and port values using dotenv
/controllers
    posts.js -- logic for handling db with monk
/middleware
    404_handler.js -- 404 response handler
    error_handler.js -- general error handler
/routes
    posts.js -- assign endpoints
/test
    app.test.js -- example testing with mocha and supertest
env.sample -- example of environment variables
app.js -- main express app
package.json -- required dependencies
```

### Requirements

- Change .env.sample to .env and edit variables

- NPM, Node, MongoDB

- Global dependencies

```
npm install nodemon mocha -g
```

### Commands

Install dependencies

```
npm install
```

Run application

```
npm run start
```

Run application in development mode

```
npm run dev
```

Run tests

```
npm run test
```
