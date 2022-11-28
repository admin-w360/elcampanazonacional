import http from "@/utils/request";



/**
 * 登录
 */
export function postContact(params: any = []): Promise<any> {
    return http.post('download', params)
}
