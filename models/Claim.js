class Claim {
    constructor ({
        claim_number = '', 
        application_date = '', 
        policy_number = ''
    } = {}) {
        this.claim_number = claim_number;
        this.application_date = application_date;
        this.policy_number = policy_number;
    }

    static mocks () {
        return [
            new Claim({
                claim_number: 'c20200429001', 
                application_date: 'a20190429001', 
                policy_number: 'p20190429001'
            }),
            new Claim({
                claim_number: 'c20200429002', 
                application_date: 'a20190429002', 
                policy_number: 'p20190429002'
            }),
            new Claim({
                claim_number: 'c20200429003', 
                application_date: 'a20190429003', 
                policy_number: 'p20190429003'
            })
        ];
    }
}

module.exports = {
    Claim
};