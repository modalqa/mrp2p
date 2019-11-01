const { Given, When, Then } = require('cucumber');
const Login = require('../../page-objects/borrower/blogin');


Given('borrower is at p2p login page', async () => {
    await Login.navigateTo();
});

Then('borrower will see p2p login page', async () => {
    await testController.expect(Login.getPage()).contains('Masuk');
});

When(/^borrower login as "([^"]*)"$/, async (user) => {
    let username = '';
    let password = '';
    if (user === 'ACTIVE_BORROWER') {
        username = 'fariskur0303903@mailinator.com';
        password = 'morak123';
    }
    await Login.blogin(username, password);
});
