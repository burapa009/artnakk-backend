import jwt from "jsonwebtoken";

const authUser = async(req,res,next) => {
    const token = req.headers.authorization;
    if(!token) return res.status(401).json({error:"Unauthorized"})
        try {
            const token_decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.userId = decoded.userId
            next()
        } catch (error) {
            res.status(401).json({error:"Unauthorized"})
        }
}

export default authUser
