import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword)
}

export const hashPassword = async (password) => {  
    return await bcrypt.hash(password, 10)
}

// JWT is basically converting an object to a string
// So we need an object and we want this object to be something that is unique to a user
// So that we can undo the string and turn it back to an object

// The preferred method for storing JWTs on a client side browser is to store it in a cookie
// We are not going to store it in a cookie here, but because we need interaction from frontend
// Starting out with cookies will be ideal cookies are automatically sent up with every request.

// But on server side prefer the token to be on the authorization header

// Although from a client perspective, I like to having it in cookie.
// But from a server perspective, I like to have it in authorization header.
// We are on server side here, so we are going to use authorization header


export const createJWT = (user) => {
    const token = jwt.sign({
        id: user.id,
        email: user.email,
        role: user.role
    },
        process.env.JWT_SECRET
    )
  return token
}

// You can't hit this endpoint until you have made and account and got the jwt and 
// sent us back JWT. The jwt checked out and gave us back a real id that matches who you are
// and then you can access to this route
// So, that what this middleware is going to do
export const protect = (req, res, next) => {
    // Bearer is like a generic way of describing something having the ability to send up a token
    // And the token can be of any type. It could be JWT or an API key or an access token.
    // But bearer just describe this person sent a token
    const bearer = req.headers.authorization // Most headers are capitalized but express lowercases them for us

    if (!bearer) {
        res.status(401)
        res.json({ message: "You need to be logged in to visit this route" })
        return
    }

    const [, token] = bearer.split(' ') // "Bearer skfjhkasfhaksfh" => "Bearer token" => ["Bearer", "token"]
    if(!token) {
        res.status(401)
        res.json({ message: "Invalid token" })
        return
    }

    // Till now, you have sent up a token and you actually formatted it correctly somehow
    // But is it a real JWT signed by JWT_SECRET? This is the last check
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        next()
    }
    catch (e) {
        console.log(e)
        res.status(401)
        res.json({ message: "Invalid token" })
        return
    }
}