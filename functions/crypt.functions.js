const Bcrypt = require('bcrypt');

/**
 * @return {string}
 */
function CryptPassword(value) {
    return Bcrypt.hashSync(value, 10);
}

module.exports = {CryptPassword};
