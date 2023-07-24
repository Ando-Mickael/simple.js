const crypto = require("crypto");

function toSha256(text) {
    return crypto.createHash('sha256').update(text).digest('hex');
}

module.exports = {
    toSha256
}