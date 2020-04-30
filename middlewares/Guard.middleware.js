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

function claimGuard (req, res, next) {
    consola.log('ClaimGuard.middleware guard');
    
    if ( req.header('Token') ) {
        if (req.method === 'GET') {
            if (mockToken[req.header('Token') + '.claim'] && mockToken[req.header('Token') + '.claim'].read) {
                next();
            } else {
                consola.log('ClaimGuard.middleware guard - permission');
                res.sendStatus(401);
            }
        } else {
            if (mockToken[req.header('Token') + '.claim'] && mockToken[req.header('Token') + '.claim'].write) {
                next();
            } else {
                consola.log('ClaimGuard.middleware guard - permission');
                res.sendStatus(401);
            }
        }
    } else {
        consola.log('ClaimGuard.middleware guard - token');
        res.sendStatus(401);
    }
}

module.exports = {
    claimGuard
};