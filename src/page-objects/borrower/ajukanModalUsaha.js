const { Selector } = require('testcafe');
require('dotenv').config();

const url = `${process.env.BASE_URL}/borrower/loan/choose`;

const tenorSelect = Selector('#tenor');
const tenorOption = tenorSelect.find('option');

exports.ajukanModalUsaha = {
    async clickAjukanPinjaman() {
        await testController.click(Selector('button').withText('Ajukan Pinjaman'));
    },
    async directedTo() {
        return testController.navigateTo(url);
    },
    async clickModalUsaha() {
        await testController.click('#mu');
    },
    async information() {
        await testController
            .typeText('#nominal_request', '10000000')
            .click(tenorSelect)
            .click(tenorOption.withText('30 Hari'))
            .typeText('#loan_purpose', 'Ajukan Modal Usaha Automation')
            .typeText('#borrower_monthly_revenue', '7000000')
            .typeText('#borrower_monthly_profit', '7000000')
            .click(Selector('button').withText('Tidak'))
            .setFilesToUpload('#saving_book_photo-dropzone > input[type="file"]', [

                './src/img/1.png'
            ])
            .click('#saving_book_photo')

            .setFilesToUpload('#financial_report-dropzone > input[type="file"]', [

                './src/img/1.png'
            ])
            .click('#financial_report');
    },
    async clickAjukan() {
        await testController.click(Selector('button').withText('Ajukan'));
    },
    async clickKonfirmasi() {
        await testController.click(Selector('button').withText('Konfirmasi'));
    },
    async clickBacktoDasbor() {
        await testController.click(Selector('button').withText('Kembali ke Dasbor'));
    }

};
