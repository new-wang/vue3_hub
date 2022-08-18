import httpRequest from '@/utils/request'

export function register(data) {
    return httpRequest({
		url: '/user/register',
		method: 'post',
        data
	})
}