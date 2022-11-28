
export interface User {
    id?: string | null | undefined;
    document_type: string;
    document: string;
    phone: string;
    name: string;
    address: string;
    email: string;
    coupon_code:  string | null | undefined;
    coupon_expire_at: string | null | undefined;
    access_token: string
    token_type: string
    expires_at: string
    created_at?: string | null | undefined;
    updated_at?: string | null | undefined;
}

export const UserDefaultData: User = {
    id: '',
    document: '',
    document_type: '',
    name: '',
    address: '',
    phone: '',
    email: '',
    coupon_code: '',
    coupon_expire_at: '',
    access_token: '',
    token_type: '',
    expires_at: '',
    created_at: '',
    updated_at: ''
}
