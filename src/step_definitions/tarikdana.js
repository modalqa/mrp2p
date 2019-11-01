const { When, Then } = require('cucumber');
const tarik = require('../page-objects/tarikdana');
const Layout = require('../page-objects/layout');

When('When lender click sidebar menu', async () => {
    await Layout.sidebar.clickSidebarMenu();
});

Then('lender click tarik dana', async () => {
    await Layout.sidebar.clickTarikDana();
});

When('lender input nominal', async () => {
    await tarik.tarikdana.inputNominal();
});

Then('lender click button konfirmasi', async () => {
    await tarik.tarikdana.clickKonfirmasi();
});
