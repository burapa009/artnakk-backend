import jwt from "jsonwebtoken";

const adminAuth = async(req,res,next) => {
    try {
        const token = req.headers.authorization;
        if(!token) {
            return res.status(401).json({error:"Unauthorized"})
        }
        const token_decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(token_decoded.role !== "admin") {
            return res.status(401).json({error:"Unauthorized"})
        }
        req.userId = token_decoded.userId
        next()
    } catch (error) {
        res.status(401).json({error:"Unauthorized"})
    }
}

export default adminAuth