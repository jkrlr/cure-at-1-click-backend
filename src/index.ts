import * as dotenv from "dotenv"

// gets every single variable from .env file
// loads them up into our environment 
// and now we can access them using process.env
// We don't need this in Prisma because they are already doing this for us in their codebase
// But for JWT, we need to do this manually because that doesn't loads the .env file automatically
// And we are doing it index file because this is the entry point of our server
// So that rest of the app can use this
dotenv.config()


import app from "./server"

app.listen(3001, () => {
    console.log('hello on http://localhost:3001')
})