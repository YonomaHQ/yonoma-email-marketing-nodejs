export type Group = {
    group_id: string;
    group_name: string;
};

export type CreateGroupOptions = {
    group_name: string;
};

export type CreateGroupResponse = {
    statusCode: number;
    status: string;
    message: string;
    data: {
        group_id: string;
        group_name: string;
    };
};

export type UpdateGroupOptions = {
    group_name: string;
};

export type UpdateGroupResponse = {
    statusCode: number;
    status: string;
    message: string;
    data: {
        group_id: string;
        group_name: string;
    };
};

export type GroupList = {
    statusCode: number;
    status: string;
    data: Group[];
};

export type RetrieveGroupResponse = {
    statusCode: number;
    status: string;
    data: {
        group_id: string;
        group_name: string;
    };
};

export type DeleteGroupResponse = {
    statusCode: number;
    status: string;
    message: string;
    data: {
        group_id: string;
    };
};
