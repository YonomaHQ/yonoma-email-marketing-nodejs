export type EmailBody = {
    from_email: string;
    to_email: string;
    subject: string;
    mail_template: string;
};

export type EmailResponse = {
    statusCode: number;
    status: string;
    message: string;
    data: {
        transactionalId: string;
    };
};
