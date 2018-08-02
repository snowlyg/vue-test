const mock = require('../../mock/mock.js');

module.exports = {

    'login with frozen user in youqikang': function (client) {
        // 启动浏览器并打开http://admin.check.elinkport.com
        client
            .url(client.launchUrl).maximizeWindow()
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')

            .waitForElementVisible(mock.mock.nameInput, mock.pauseTime)
            .setValue(mock.mock.nameInput, 'frozen_test')//输入账号

            .waitForElementVisible(mock.mock.pwdInput, mock.pauseTime)
            .setValue(mock.mock.pwdInput, 'frozen_test')//输入密码
            .click(mock.mock.loginBtn)//点击登陆

            .useXpath()
            .waitForElementVisible(mock.alertDiv, mock.pauseTime)
            .assert.containsText(mock.alertDiv, "账号名已被冻结")

            .assert.urlEquals(client.launchUrl+'login?redirect=%2F')

            .saveScreenshot('reports/login_with_frozen_user.png') // 截屏

            .end()
    }
};