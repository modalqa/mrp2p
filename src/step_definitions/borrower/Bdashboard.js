const { Then } = require('cucumber');
const Dashboard = require('../../page-objects/borrower/Bdashboard');

Then('borrower will see borrower dashboard page', async () => {
    await testController.expect(Dashboard.getProfileTitle()).contains('Peminjam');
});
