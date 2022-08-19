module.exports = (req, res, next) => {

    const isAdmin = ()=>{
        try {
            const role = req.role_id
            if (role == 2) {
                return res.status(401).json({
                    "message": "Unauthorized"
                })
            }
            next();
        } catch (err) {
            res.status(401).json({
                "message": err.message
            })
        }

    }

    return {
        isAdmin
    }
    
}