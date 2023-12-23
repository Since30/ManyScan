const JWT = require("jsonwebtoken");

const generateRefreshToken = (userId) => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
  
    const expiresIn = currentTimestamp + (30 * 24 * 60 * 60); // 30 jours 
  
    // Génére refresh_token avec une expiration
    const refreshToken = JWT.sign(
      {
        userId: userId,
        expiresIn: expiresIn, 
      },
      process.env.REFRESH_TOKEN_KEY
    );
  
    return refreshToken;
};

module.exports = generateRefreshToken;