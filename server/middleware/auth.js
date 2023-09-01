const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    // token = token.split(" ")[1];
    const decoded = jwt.verify(token, "USER");
    req.admin = decoded;
    next();
  } catch (err) {
    console.error(err);
    return res.status(403).json({ error: "Invalid token" });
  }
};

module.exports = auth;
