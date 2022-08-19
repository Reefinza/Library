module.exports = () => {
  const isAdmin = (req, res, next) => {
    try {
      const role = req.user.roleId;
      if (role == 2) {
        return res.status(401).json({
          message: "Forbiden",
        });
      }
      next();
    } catch (err) {
      res.status(401).json({
        message: err.message,
      });
    }
  };

  return {
    isAdmin,
  };
};
