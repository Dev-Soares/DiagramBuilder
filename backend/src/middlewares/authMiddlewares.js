import jwt from "jsonwebtoken";
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET;


export  const verifyLinkAcess = (req, res, next) => {
    
    // ✅ Pega o header Authorization
    const authHeader = req.headers['authorization'];
    
    // ✅ Extrai o token (remove "Bearer ")
    const token = authHeader && authHeader.split(' ')[1]; // "Bearer TOKEN" -> "TOKEN"

    const resourceId = req.params.id;

    if (!token) {
        return res.status(401).json({ error: "Token is required" });
    }

    try {

        const decoded = jwt.verify(token, JWT_SECRET);

        if (decoded.resourceId !== resourceId) {
            return res.status(403).json({ error: "Invalid token for this resource" });
        }

        req.userAcess = decoded;
        next();

    } catch (error) {

        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ 
                error: "Token expired",
                code: "TOKEN_EXPIRED",
                expiredAt: error.expiredAt
            });
        }
        
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ 
                error: "Invalid token",
                code: "TOKEN_INVALID" 
            });
        }

        return res.status(401).json({ 
            error: "Authentication failed",
            code: "AUTH_FAILED" 
        });
    }
};

export default verifyLinkAcess;
