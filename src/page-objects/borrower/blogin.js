const { Selector } = require('testcafe');
require('dotenv').config();

const url = `${process.env.BASE_URL}/login?type=bypass_recaptcha`;

exports.navigateTo = async function () {
    return testController.navigateTo(url);
};

exports.getPage = function () {
    return Selector('.title').with({ boundTestRun: testController }).textContent;
};

exports.blogin = async function (username, password) {
    await testController
        .typeText(Selector('#email'), username)
        .typeText(Selector('#password'), password)
        .pressKey('enter');
};

exports.getAlertMessage = function () {
    return Selector('div').with({ boundTestRun: testController }).withAttribute('class', 'alert alert-danger custom-alert').textContent;
};

