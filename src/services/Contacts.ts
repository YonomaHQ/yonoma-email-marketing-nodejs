import Yonoma from "./Yonoma";
import {
    AddContactTagOptions,
    AddContactTagResponse,
    CreateContactOptions,
    RemoveContactTagOptions,
    RemoveContactTagResponse,
    UpdateContactOptions,
} from "../types/contacts";
import { ResourceEnums } from "../types/resource.enums";

export class Contacts {
    constructor(private readonly yonoma: Yonoma) {}

    create(groupId: string, contactOptions: CreateContactOptions) {
        const body = JSON.stringify(contactOptions);

        return this.yonoma.request(`/${ResourceEnums.CONTACTS}/${groupId}/create`, {
            method: "POST",
            body,
        });
    }

    update(groupId: string, contactId: string, updateContact: UpdateContactOptions) {
        const body = JSON.stringify(updateContact);

        return this.yonoma.request(`/${ResourceEnums.CONTACTS}/${groupId}/status/${contactId}`, {
            method: "POST",
            body,
        });
    }

    addTag(contactId: string, addContactTag: AddContactTagOptions): Promise<AddContactTagResponse> {
        const body = JSON.stringify(addContactTag);

        return this.yonoma.request(`/${ResourceEnums.CONTACTS}/tags/${contactId}/add`, {
            method: "POST",
            body,
        });
    }

    removeTag(contactId: string, removeContactTag: RemoveContactTagOptions): Promise<RemoveContactTagResponse> {
        const body = JSON.stringify(removeContactTag);

        return this.yonoma.request(`/${ResourceEnums.CONTACTS}/tags/${contactId}/remove`, {
            method: "POST",
            body,
        });
    }
}
