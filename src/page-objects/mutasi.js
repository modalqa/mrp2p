const { Selector } = require('testcafe');

const bulanSelect = Selector('#filterMonth');
const bulanOption = bulanSelect.find('option');
const tahunSelect = Selector('#filterYear');
const tahunOption = tahunSelect.find('option');


exports.mutasidana = {
    async clikMutasiBulanan() {
        await testController.click(Selector('label').withText('Mutasi bulanan'));
    },

    async setTanggal() {
        await testController
            .click(bulanSelect)
            .click(bulanOption.withText('Mei'))
            .click(tahunSelect)
            .click(tahunOption.withText('2019'));
    },

    async clickLihat() {
        await testController.click(Selector('button').withText('Lihat'));
    }
};
