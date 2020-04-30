const consola = require('consola');

const { Claim } = require('../models/Claim');

const claimMocks = Claim.mocks();

function index (req, res) {
    // claimService.index
    consola.log('Claim.controller show', req.query);
    if (req.query.policy_number) {
        res.json(claimMocks.filter(claim => claim.policy_number === req.query.policy_number));
    } else {
        res.json(claimMocks);
    }


    return;
}

function show (req, res) {
    // claimService.show with param claim_number
    consola.log('Claim.controller show', req.params);
    const claimNumber = req.params.claim_number;
    const claim = claimMocks.find(claim => claim.claim_number === claimNumber);
    if (claim) {
        res.json(claim);
    } else {
        res.sendStatus(404);
    }

    return;
}

function store (req, res) {
    // claimService.store with body claim_number,application_date,policy_number
    consola.log('Claim.controller store', req.body);

    
    const claimPlain = req.body;
    // claimService.validate claimPlain
    // claimService.store claim
    const claimMocksLength = claimMocks.push(new Claim(claimPlain)); // claim is array.length
    if (claimMocksLength) { // 😏
        res.status(201).json(claimMocks[claimMocksLength-1]);
    } else {
        res.sendStatus(400);
    }

    return;
}

module.exports = {
    index,
    show,
    store
};