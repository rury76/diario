const Bcrypt = require('bcrypt');

/**
 * @return {string}
 */
function EncryptionPassword(value, seed) {
    return Bcrypt.hashSync(value + seed, 10);
}

/**
 * @returns {string}
 */
function GenerateSeed() {
    return Math.random().toString(36).substring(2, 15);
}

module.exports = {EncryptionPassword, GenerateSeed};
