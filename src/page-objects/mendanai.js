const { Selector } = require('testcafe');
require('dotenv').config();

const url = `${process.env.BASE_URL}/lender/marketplace`;

exports.mendanai = {
    async clikButtonMulaiMendanani() {
        await testController.click(Selector('span').withText('Mulai Mendanai'));
    },

    async navigateTo() {
        return testController.navigateTo(url);
    },

    async clickLihatDetail() {
        await testController
            .click(Selector('a').withText('Lihat Detil'));
    },

    async danai() {
        await testController
            .typeText('#funding_amount', '25000')
            .click(Selector('button').withText('Beri Pendanaan'))
            .click('.custom-control')
            .click(Selector('button').withText('Konfirmasi Pendanaan'));
    }

};

