import Yonoma from "./Yonoma";
import {
    CreateGroupOptions,
    CreateGroupResponse,
    DeleteGroupResponse,
    GroupList,
    RetrieveGroupResponse,
    UpdateGroupOptions,
    UpdateGroupResponse,
} from "../types/groups";
import { ResourceEnums } from "../types/resource.enums";

export class Groups {
    constructor(private readonly yonoma: Yonoma) {}

    public list(): Promise<GroupList> {
        return this.yonoma.request(`/${ResourceEnums.GROUPS}/list`, {
            method: "GET",
        });
    }

    public create(createGroup: CreateGroupOptions): Promise<CreateGroupResponse> {
        const body = JSON.stringify(createGroup);

        return this.yonoma.request(`/${ResourceEnums.GROUPS}/create`, {
            method: "POST",
            body,
        });
    }

    public retrieve(groupId: string): Promise<RetrieveGroupResponse> {
        return this.yonoma.request(`/${ResourceEnums.GROUPS}/${groupId}`, {
            method: "GET",
        });
    }

    public update(groupId: string, updateGroup: UpdateGroupOptions): Promise<UpdateGroupResponse> {
        const body = JSON.stringify(updateGroup);

        return this.yonoma.request(`/${ResourceEnums.GROUPS}/${groupId}/update`, {
            method: "POST",
            body,
        });
    }

    public delete(groupId: string): Promise<DeleteGroupResponse> {
        return this.yonoma.request(`/${ResourceEnums.GROUPS}/${groupId}/delete`, {
            method: "POST",
        });
    }
}
