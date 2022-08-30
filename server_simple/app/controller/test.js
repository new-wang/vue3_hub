const BaseController = require('./base')
class TestController extends BaseController {
    async testJwt(){
        const info = {
            title:"是否经过jwt鉴权",
            result:"如果就获取到结果证明已经通过鉴权或接口不需要鉴权"
        }
        this.success({ info })
    }
}

module.exports = TestController
