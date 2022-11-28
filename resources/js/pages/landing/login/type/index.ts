
export interface UserLogin {
    id: string
    document_type: string
    document:string
    recaptcha_response: string
    accept_term: boolean
}

export const UserLoginDefaultData = {
    id: '',
    document_type: '',
    document:'',
    recaptcha_response: '',
    accept_term: false,

}
