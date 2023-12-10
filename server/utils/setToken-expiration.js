const setTokenExpiration = () => {
    const now = new Date();
    return new Date(now.getTime() + 60 * 60 * 1000); // Expire dans une heure
};

module.exports = setTokenExpiration;