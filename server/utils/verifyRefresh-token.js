const RefreshToken = require('../models/refreshToken.model'); 

const verifyRefreshToken = async (refreshToken) => {
  try {
    // Recherche le refresh token dans la DB
    const foundToken = await RefreshToken.findOne({ token: refreshToken });

    if (!foundToken) {
      return false; 
    };

    // Vérifie si le token est expiré 
    const isExpired = foundToken.expiryDate < new Date();

    if (isExpired) {
      // Supprime le token expiré de la DB 
      await RefreshToken.deleteOne({ token: refreshToken });
      return false; ;
    };

    return true;
  } catch (error) {
    console.error('Error verifying refresh token:', error);
    return false;
  }
};

module.exports = verifyRefreshToken;
