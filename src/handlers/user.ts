import prisma from "../db"
import { comparePassword, createJWT, hashPassword } from "../utils/auth"

// All database queries are always async
// Because talking to a disk is always asynchronous, just like talking to network is asynchronous
// Most databases are server too, which means not only talking to disk but also talking to network that talks to disk
export const createNewUser = async(req, res) => {
    const user = await prisma.user.create({
        data: {
            //Where do we get email? 
            // Since we are creating something.So it's a post request.
            // Most post request send something to server, typically that attached to something called body.
            name: req.body.name,
            email: req.body.email,
            password: await hashPassword(req.body.password)
        }
    })

    const token = createJWT(user)
    res.json({ token }) // same as res.json({ token: token })
}

export const signIn = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email 
        }
    })

    const isValid = await comparePassword(req.body.password, user.password)

    if (!isValid) {
        res.status(401)
        res.json({ message: "Invalid password" })
        return
    }

    const token = createJWT(user)
    res.json({ token })
}