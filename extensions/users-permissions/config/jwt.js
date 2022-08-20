module.exports = {
  jwtSecret: process.env.JWT_SECRET || '3c78044e-11b7-48a4-843b-4ed5c44f357b',
  jwt: {
    expiresIn:"5d"
  }
};
