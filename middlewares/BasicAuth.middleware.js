function basicAuth (username = '', password = '', cb) {
    // TODO: can compare usermane & password with external service
    if (username.startsWith('a') & password.startsWith('secret'))
        return cb(null, true);
    else
        return cb(null, false);
}

module.exports = {
    basicAuth
};