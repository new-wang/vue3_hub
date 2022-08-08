// 导入axios实例
import httpRequest from '@/utils/request'

console.log('httpRequest',httpRequest)

export function getUser(param) {
    return httpRequest({
		url: '/api/post',
		method: 'post',
        data: param

        // method: 'get',
		// params: param,
	})
}