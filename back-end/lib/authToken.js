const jwt = require("jsonwebtoken");

module.exports = {
  auth: (req, res, next) => {
    jwt.verify(req.token, "private123", (err, decode) => {
      // parameter terdiri dari request token, secret key dan callback function
      // hasil penerjemahan token adalah decode
      if (err) {
        // Jika verifikasi token gagal maka akan mengirimkan response user not auth
        return res.status(401).send("User not auth!");
      }
      req.user = decode;
      next();
    });
  },
};
