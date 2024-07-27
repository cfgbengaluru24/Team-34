// import jwt from "jsonwebtoken"
// import Admin from "../models/admin.model.js"

exports.protectRoute = async (req, res, next) => {
    next();
    /*
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({
                error: "Unauthroised - no token found"
            })
        }
        // const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // if (!decoded) {
        //     return res.status(401).json({
        //         error: "Unauthroised - no token found"
        //     })
        // }

        // const user = await Admin.findById(decoded.userId).select("-password");

        // if (!user) {
        //     return res.status(401).json({
        //         error: "User not found"
        //     })
        // }

        // req.user = user;

        next();

    } catch (error) {
        console.log("eror in protectRoute middleware", error.message)
        res.status(500).json({
            error: "Internal server error"
        });
    }
    */
}

// export default protectRoute;

// module. exports = { protectRoute };