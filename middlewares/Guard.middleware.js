const consola = require('consola');

const mockToken = {
    'xxx.claim': {
        read: false,
        write: false
    },
    'yyy.claim': {
        read: true,
        write: false
    },
    'zzz.claim': {
        read: true,
        write: true
    },
};

async function claimGuard (req, res, next) {
    consola.log('Guard.middleware claimGuard');
    
    if ( req.header('Token') ) {
        if (req.method === 'GET') {
            // TODO: Can authen & authro with external service
            if (mockToken[req.header('Token') + '.claim'] && mockToken[req.header('Token') + '.claim'].read) {
                next();
            } else {
                consola.log('Guard.middleware claimGuard - invalid permission');
                res.sendStatus(401);
            }
        } else {
            if (mockToken[req.header('Token') + '.claim'] && mockToken[req.header('Token') + '.claim'].write) {
                next();
            } else {
                consola.log('Guard.middleware claimGuard - invalid permission');
                res.sendStatus(401);
            }
        }
    } else {
        consola.log('Guard.middleware claimGuard - missing token');
        res.sendStatus(401);
    }

    return;
}

module.exports = {
    claimGuard
};