const { When } = require('cucumber');
const Layout = require('../page-objects/layout');


When('lender click sidebar menu', async () => {
    await Layout.sidebar.clickSidebarMenu();
});

When('lender click logout', async () => {
    await Layout.sidebar.clickLogout();
});

