import http from "@/utils/request";



/**
 * 登录
 */
export function downloadCoupon(params: any = []): Promise<any> {
    return http.get('download', {
        responseType: 'blob'
    })
}
