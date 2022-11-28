import http from "@/utils/request";



/**
 * 登录
 */
export function saveRegister(params: any = []): Promise<any> {
    return http.post('register', params)
}
