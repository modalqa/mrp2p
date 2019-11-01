const { When, Then } = require('cucumber');
const Layout = require('../page-objects/layout');

When('When lender click sidebar menu', async () => {
    await Layout.sidebar.clickSidebarMenu();
});
Then('lender click referral', async () => {
    await Layout.sidebar.clickReferral();
});
When('When lender click sidebar menu', async () => {
    await Layout.sidebar.clickSidebarMenu();
});
Then('lender click panduan', async () => {
    await Layout.sidebar.clickPanduan();
});
When('When lender click sidebar menu', async () => {
    await Layout.sidebar.clickSidebarMenu();
});
Then('lender click peluang pendanaan', async () => {
    await Layout.sidebar.clickPeluangPendanaan();
});
When('When lender click sidebar menu', async () => {
    await Layout.sidebar.clickSidebarMenu();
});
Then('lender click inbox', async () => {
    await Layout.sidebar.clickInbox();
});
When('When lender click sidebar menu', async () => {
    await Layout.sidebar.clickSidebarMenu();
});
Then('lender click portofolio', async () => {
    await Layout.sidebar.clickPortofolio();
});

When('When lender click sidebar menu', async () => {
    await Layout.sidebar.clickSidebarMenu();
});
Then('lender click akun', async () => {
    await Layout.sidebar.clickAkun();
});
