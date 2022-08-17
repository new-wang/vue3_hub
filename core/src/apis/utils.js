import httpRequest from '@/utils/request'

export function sendcode(param) {
    return httpRequest({
		url: '/util/sendcode',
		method: 'get',
        params: param,
	})
}