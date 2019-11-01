const { Selector } = require('testcafe');

exports.deposit = {
    async clickDeposit() {
        await testController.click(Selector('a').withText('Deposit Dana'));
    }
};

exports.getPageTitle = function () {
    return Selector('.wrapper-header').with({ boundTestRun: testController }).textContent;
};

