const { When, Then } = require('cucumber');
const deposit = require('../page-objects/deposit');
const Layout = require('../page-objects/layout');

When('When lender click sidebar menu', async () => {
    await Layout.sidebar.clickSidebarMenu();
});

Then('lender click deposit dana', async () => {
    await deposit.deposit.clickDeposit();
});

Then('lender can see deposit dana page', async () => {
    await testController.expect(deposit.getPageTitle()).contains('Deposit Dana');
});
