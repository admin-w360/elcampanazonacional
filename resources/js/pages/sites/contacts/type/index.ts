

export type Contact = {
    document: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    cell_phone: string;
    city: string;
    reason:string;
    message:string;
    recaptcha_response: string;
};

export const ContactDefaultData: Contact = {
    document: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    cell_phone: "",
    city: "",
    reason: "",
    message: "",
    recaptcha_response: ""
};
