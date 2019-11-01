const { Selector } = require('testcafe');


exports.sidebar = {
    async clickSidebarMenu() {
        await testController.click(Selector('span').withText('Menu'));
    },
    async clickLogout() {
        await testController.click(Selector('a').with({ boundTestRun: testController }).withAttribute('class', 'nav-link').withText('Logout'));
    },
    async clickReferral() {
        await testController.click(Selector('a').withText('Referral'));
    },
    async clickPanduan() {
        await testController.click(Selector('a').withText('Panduan'));
    },
    async clickPeluangPendanaan() {
        await testController.click(Selector('a').withText('Peluang Pendanaan'));
    },
    async clickInbox() {
        await testController.click(Selector('a').withText('Inbox'));
    },
    async clickPortofolio() {
        await testController.click(Selector('a').withText('Portofolio'));
    },
    async clickMutasi() {
        await testController.click(Selector('a').withText('Mutasi'));
    },
    async clickTarikDana() {
        await testController.click(Selector('a').withText('Tarik Dana'));
    },
    async clickAkun() {
        await testController.click(Selector('a').withText('Akun'));
    }
};
