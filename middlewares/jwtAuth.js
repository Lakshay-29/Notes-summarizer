const JWT = require("jsonwebtoken");

const jwtauth = (req, res, next) => {
    const token = req.cookies.token;
    
    if (!token) {
        return res.status(401).json({ error: "Please login first" });
    }

    try {
        const verify = JWT.verify(token, "supersecretkey");
        
        
        req.user = verify; 

     
        next(); 

    } catch (err) {
        console.log("error in jwtauth", err);
        return res.status(401).json({ error: "Please login first" });
    }
};

module.exports = jwtauth;