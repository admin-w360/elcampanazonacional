import http from "@/utils/request";



export function startSession(params: any = []): Promise<any> {
    return http.post("start-session", params);
}

