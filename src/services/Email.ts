import { Yonoma } from "./Yonoma";
import { EmailBody, EmailResponse } from "../types/email";
import { ResourceEnums } from "../types/resource.enums";

export class Email {
    constructor(private readonly yonoma: Yonoma) {}

    send(emailBody: EmailBody): Promise<EmailResponse> {
        const body = JSON.stringify(emailBody);

        return this.yonoma.request(`/${ResourceEnums.EMAIL}/send`, {
            method: "POST",
            redirect: "follow",
            body,
        });
    }
}
