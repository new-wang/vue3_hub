const BaseController = require('./base')

/**
 * @Controller test 
 */

class TestController extends BaseController {
    /**
   * @summary 登录
   * @description 登录
   * @router post /test/testJwt
   * @respone 200 baseResponse 登录成功
   */
    //  @request header string *Authorization eg:Bearer +token
    async testJwt(){
        const info = {
            title:"是否经过jwt鉴权",
            result:"如果就获取到结果证明已经通过鉴权或接口不需要鉴权"
        }
        this.success({ info })
    }
}

module.exports = TestController
