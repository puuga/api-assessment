const express = require('express');
const router = express.Router();
const consola = require('consola');
const expressBasicAuth = require('express-basic-auth');

// api v1 middleware
router.use(function timeLog (req, res, next) {
    consola.log('api.v1.router: Time ', Date.now());
    next();
});

const { basicAuth } = require('../middlewares/BasicAuth.middleware');
router.use(expressBasicAuth({
    authorizer: basicAuth,
    authorizeAsync: true,
    // challenge: true,
    // realm: 'Imb4T3st4pp',
}));

const guard = require('../middlewares/Guard.middleware');
router.use(guard.claimGuard);

// claim resoure
const claimController = require('../controllers/Claim.controller');
router.get('/claims', claimController.index);
router.get('/claims/:claim_number', claimController.show);
router.post('/claims', claimController.store);

module.exports = router;