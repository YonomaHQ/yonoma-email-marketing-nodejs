type ContactStatus = "Subscribed" | "Unsubscribed";

export type CreateContactOptions = {
    email: string;
    status: ContactStatus;
    data: {
        fullName: string;
        phone: string;
        gender: string;
        address: string;
        city: string;
        state: string;
        country: string;
        zipcode: string;
    };
};
export type CreateContactResponse = {
    statusCode: number;
    status: string;
    message: string;
    data: {
        contact_id: string;
        email: string;
        status: string;
    };
};

export type UpdateContactOptions = {
    status: ContactStatus;
};

export type UpdateContactResponse = {
    statusCode: number;
    status: string;
    message: string;
    data: {
        contact_id: string;
        group_id: string;
        status: string;
    };
};

export type AddContactTagOptions = {
    tag_id: string;
};

export type AddContactTagResponse = {
    statusCode: number;
    status: string;
    message: string;
    data: {
        contact_id: string;
        group_id: string;
        status: string;
    };
};

export type RemoveContactTagOptions = {
    tag_id: string;
};

export type RemoveContactTagResponse = {
    statusCode: number;
    status: string;
    message: string;
    data: {
        tag_id: string;
    };
};
