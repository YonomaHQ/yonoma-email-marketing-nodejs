export type Tag = {
    tag_id: string;
    tag_name: string;
};

export type CreateTagOptions = {
    tag_name: string;
};

export type CreateTagResponse = {
    statusCode: number;
    status: string;
    message: string;
    data: {
        tag_id: string;
        tag_name: string;
    };
};

export type UpdateTagOptions = {
    tag_name: string;
};

export type UpdateTagResponse = {
    statusCode: number;
    status: string;
    message: string;
    data: {
        tag_id: string;
        tag_name: string;
    };
};

export type TagList = {
    statusCode: number;
    status: string;
    data: Tag[];
};

export type RetrieveTagResponse = {
    statusCode: number;
    status: string;
    data: {
        tag_id: string;
        tag_name: string;
    };
};

export type DeleteTagResponse = {
    statusCode: number;
    status: string;
    message: string;
    data: {
        tag_id: string;
    };
};
