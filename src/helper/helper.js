
const bcrypt = require("bcrypt");

exports.hashingPassword = (password) => {
    return bcrypt.hash(password, 10);
}

exports.matchingPassword = (password, bcrytedPassword) => {
    return bcrypt.compare(password, bcrytedPassword);
}
