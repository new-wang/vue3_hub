import httpRequest from '@/utils/request'

export function sendcode(param) {
    return httpRequest({
		url: '/sendcode',
		method: 'get',
        params: param,
	})
}