const { When, Then } = require('cucumber');
const mutasi = require('../page-objects/mutasi');
const Layout = require('../page-objects/layout');

When('When lender click sidebar menu', async () => {
    await Layout.sidebar.clickSidebarMenu();
});

Then('lender click mutasi', async () => {
    await Layout.sidebar.clickMutasi();
});

When('lender click type bulanan', async () => {
    await mutasi.mutasidana.clikMutasiBulanan();
});

Then('lender set tanggal mutasi', async () => {
    await mutasi.mutasidana.setTanggal();
});

Then('lender click lihat', async () => {
    await mutasi.mutasidana.clickLihat();
});
