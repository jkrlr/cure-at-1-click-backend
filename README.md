# Cure@1Click [Backend Repo]

Cure@1Click is a telemedicine app.

## REST API Details

### 1. Authentication

### 2. Dashboard/Profile

#### 2.1 Add Patient

### 3. Appointment Booking

### 4. Prescription

### 5. Medicine

### 6. EHR Records

## Setting up the Project

## Dependencies [Why they have added]

- `npm init` To initialize a npm package i.e. it creates the `package.json` file.
- `npm i express --save` To install the express
- `npm i typescript ts-node @types/node prisma --save-dev`
  - `typescript` To install the typescript.
  - `ts-node` to transform it into `js`.
  - `@types/node` to enable the typescript like import.
  - `prism` to install prisma.
  - `--save-dev` To install these dependencies during development environment only.
- `npx prisma init`
  - Run cmd to Create a prisma folder
    - Create a schema file in that folder
  - It also creates `.env` and `.gitignore` files.
  - Since we installed the prisma locally. Hence, by running `prisma` command with `npx` we can treat it like we have installed it globally.
- `npm i @prisma/client --save` This is the actual SDK (i.e. this is the ORM) which is used to talk to database (Earlier we installed the CLI that we will use to run the migrations).
- `npx prisma migrate dev --name init`
  - Running cmd to create the schema/tables migrations in database.
  - Using `npx` because Prisma is not installed globally.
  - Using `--name` flag to give the names to particular migrations and we can also give these migrations to someone else also.
  - Install the Prisma VS Code plugin. It lints and cleans up your schema file.
- `npx prisma format` To format the tables schema in prisma
- `npm install nodemon --save-dev` To auto-restart the server when there is a change.
  - nodemon is a installed as a development dependency because, once the application is deployed, the web host will be responsible for starting the server.
  - Once nodemon is installed, update the `dev` script in your `package.json` file.
    - i.e. Replace `"dev": "ts-node src/index.ts"` with `"dev": "nodemon src/index.ts"`
  - `npm i morgan --save` Morgan is a middleware in nodejs that logs `HTTP request`.
  - `npm i cors --save`
    - cors provides a middleware for Node.js applications that adds the necessary HTTP headers to enable CORS.
    - When a request is made to the application, the cors middleware automatically adds the appropriate CORS headers to the response.
    - These headers inform the browser that the server allows cross-origin requests from specified origins, methods, and headers.
- `npm i jsonwebtoken bcrypt dotenv`
  - `jsonwebtoken` To use the create the JWT
  - `dotenv` To use the `dotenv.config()`
    - It gets every single variable from `.env` file and
    - Loads them up into our environment and
    - Now we can access them using `process.env`
  - `bcrypt` To hash the password
- `npm i express-validator --save`
  - To validate the request body
  - We will use middleware as validators for the `POST` and `PUT` requests for all the routes that we have created.
  - Middleware are just basically functions kind of like handlers that just run before a handler would run, and they have ability to have control flow on what middleware is, and whenever they are done, they can pass it to next middleware. They have that ability, but they have the same power that a handler would have. They can respond, they can log, they can enhance the request object, they could do all the different types of things.
