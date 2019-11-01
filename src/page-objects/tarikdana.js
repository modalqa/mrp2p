const { Selector } = require('testcafe');

exports.tarikdana = {
    async clickTarikDana() {
        await testController.click(Selector('a').withText('Tarik Dana'));
    },

    async inputNominal() {
        await testController
            .typeText('#request_amount', '100000')
            .click(Selector('button').withText('Tarik Dana'));
    },

    async clickKonfirmasi() {
        await testController
            .click(Selector('button').withText('Konfirmasi'));
    }

};
