import { verifyToken } from "../utils/jwtHelper.js"

export const protect = async (req,res,next) => {
    try {
        const token = req.cookies.token || req.headers.authorization
        const verifiedToken = verifyToken(token)
        console.log(verifiedToken);
        next()
    } catch (error) {
        res.status(500).json({message: 'invalid token'})
    }

}