import http from "@/utils/request";

export function logout(): Promise<any> {
    return http.get("end-session")
}

