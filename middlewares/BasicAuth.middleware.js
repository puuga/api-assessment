function basicAuth (username = '', password = '', cb) {
    if (username.startsWith('a') & password.startsWith('secret'))
        return cb(null, true);
    else
        return cb(null, false);
}

module.exports = {
    basicAuth
};