// 导入axios实例
import httpRequest from '@/utils/request'

export function testJwt(param) {
    return httpRequest({
		url: '/test/testJwt',
		method: 'post',
        data: param

        // method: 'get',
		// params: param,
	})
}