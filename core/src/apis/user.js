import httpRequest from '@/utils/request'

export function register(data) {
    return httpRequest({
		url: '/user/register',
		method: 'post',
        data
	})
}

export function login(data) {
    return httpRequest({
		url: '/asscess/login',
		method: 'post',
        data
	})
}
export function logout(data) {
    return httpRequest({
		url: '/asscess/logout',
		method: 'post',
        data
	})
}