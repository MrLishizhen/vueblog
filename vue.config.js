module.exports = {
    devServer: { //配置请求代理
        proxy: {
            '/': { //配置请求代理
                target: 'http://localhost:3000/'
                // target: 'http://47.94.12.253:3307/'
            }
        }

    }
};