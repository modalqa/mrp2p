const { When, Then } = require('cucumber');
const danai = require('../page-objects/mendanai');

When('lender click button mulai mendanai', async () => {
    await danai.mendanai.clikButtonMulaiMendanani();
});

Then('lender directed to marketplace', async () => {
    await danai.mendanai.navigateTo();
});

When('lender click button detail', async () => {
    await danai.mendanai.clickLihatDetail();
});

Then('lender can input nominal amount', async () => {
    await danai.mendanai.danai();
});
