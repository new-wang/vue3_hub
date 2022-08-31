/**
 *  全局定义
 * @param app
 */

 class AppBootHook {
    constructor(app) {
        this.app = app;
        app.root_path = __dirname;

        // 载入错误拦截中间件
        const errorHandle = require("./app/middleware/error_handler.js")({},this.app)
        this.app.use(errorHandle)
    }

    configWillLoad() {
        // Ready to call configDidLoad,
        // Config, plugin files are referred,
        // this is the last chance to modify the config.
    }

    configDidLoad() {
        // Config, plugin files have been loaded.
    }

    async didLoad() {
        // All files have loaded, start plugin here.
    }

    async willReady() {
        // All plugins have started, can do some thing before app ready
    }

    async didReady() {
        // Worker is ready, can do some things
        // don't need to block the app boot.
        // console.log('========Init Data=========')数据初始化
        // const ctx = await this.app.createAnonymousContext();
        // await ctx.model.User.remove();
        // // 创建用户不用model.User.create 而是 用service.user.create
        // // 创建用户的时候密码要进行hash 希望 灵活控制测试数据密码
        // // 用model的话在创建用户时还要hash
        // await ctx.service.user.create({
        //     mobile: '13611388415',
        //     password: '111111',
        //     realName: 'name王',
        // })
    }

    async serverDidReady() {

    }

    async beforeClose() {
        // Do some thing before app close.
    }
}

module.exports = AppBootHook;

