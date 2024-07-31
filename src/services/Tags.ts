import { Yonoma } from "./Yonoma";
import { ResourceEnums } from "../types/resource.enums";
import {
    CreateTagOptions,
    CreateTagResponse,
    DeleteTagResponse,
    RetrieveTagResponse,
    TagList,
    UpdateTagOptions,
    UpdateTagResponse,
} from "../types/tags";

export class Tags {
    constructor(private readonly yonoma: Yonoma) {}

    retrieve(tagId: string): Promise<RetrieveTagResponse> {
        return this.yonoma.request(`/${ResourceEnums.TAGS}/${tagId}`, {
            method: "GET",
        });
    }

    list(): Promise<TagList> {
        return this.yonoma.request(`/${ResourceEnums.TAGS}/list`, {
            method: "GET",
        });
    }

    create(createTag: CreateTagOptions): Promise<CreateTagResponse> {
        const body = JSON.stringify(createTag);

        return this.yonoma.request(`/${ResourceEnums.TAGS}/create`, {
            method: "POST",
            body,
        });
    }

    update(tagId: string, updateTag: UpdateTagOptions): Promise<UpdateTagResponse> {
        const body = JSON.stringify(updateTag);

        return this.yonoma.request(`/${ResourceEnums.TAGS}/${tagId}/update`, {
            method: "POST",
            body,
        });
    }

    delete(tagId: string): Promise<DeleteTagResponse> {
        return this.yonoma.request(`/${ResourceEnums.TAGS}/${tagId}/delete`, {
            method: "POST",
        });
    }
}
