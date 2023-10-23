import express from "express"
import router from "./router"
import morgan from "morgan"
import cors from "cors"
import { protect } from "./utils/auth"
import { createNewUser, signIn } from "./handlers/user"

const app = express()

const customLogger = (message) => (req, res, next) => {
  console.log(`Hello from ${message}`)
  next()
}

// cors is a configuration (middleware) that we can put on our server 
// that will tell a browser who or what can access this API
// By default, This just means everything and everyone 
// can atleast try to get access to our server
// We can block on IP levels and some different request, and block all type stuff
app.use(cors())  

app.use(morgan('dev'))

app.use(express.json()) // allows client to send json to server

// urlencoded allows a client to add things links query string and parameter and it encodes and decodes that properly
// urlencoded takes the whole query string and parameter and put it into a json object for us
app.use(express.urlencoded({ extended: true })) 

// app.use((req, res, next) => {
//   req.shh_secret = "shh" 
//   next()
// }) // Any single request that registered after this will have access to shh_secret

app.use(customLogger("CUSTOM LOGGER"))
 
/**
 * app.[method]([route], [route handler])
 */
app.get("/", (req, res) => {
  console.log("Hello from Express")
  res.status(200)
  res.json({message: "hello"})
})

/**
 * Protected Routes
 */
app.use('/api', protect, router)

/**
 * Authentication Routes
 */
app.post('/signup', createNewUser)
app.post('/login', signIn)
app.post('/logout', (req, res) => { })

export default app