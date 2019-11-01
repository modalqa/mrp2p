const { When, Then } = require('cucumber');
const Ajukan = require('../../page-objects/borrower/ajukanModalUsaha');

When('borrower click button ajukan pinjaman', async () => {
    await Ajukan.ajukanModalUsaha.clickAjukanPinjaman();
});
Then('borrower directed to type loan page', async () => {
    await Ajukan.ajukanModalUsaha.directedTo();
});
When('borrower click button ajukan sekarang for modal usaha', async () => {
    await Ajukan.ajukanModalUsaha.clickModalUsaha();
});
Then('borrower input information loan', async () => {
    await Ajukan.ajukanModalUsaha.information();
});
Then('borrower click button ajukan', async () => {
    await Ajukan.ajukanModalUsaha.clickAjukan();
});
Then('borrower click button konfirmasi', async () => {
    await Ajukan.ajukanModalUsaha.clickKonfirmasi();
});
Then('borrower click button kembali ke dashboard', async () => {
    await Ajukan.ajukanModalUsaha.clickBacktoDasbor();
});
