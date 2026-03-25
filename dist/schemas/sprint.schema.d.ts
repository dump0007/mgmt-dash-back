import { Document, Types } from 'mongoose';
export declare enum SprintStatus {
    PLANNED = "PLANNED",
    ACTIVE = "ACTIVE",
    COMPLETED = "COMPLETED"
}
export declare class Sprint extends Document {
    name: string;
    project_id: Types.ObjectId;
    start_date: Date;
    expected_end_date: Date;
    status: SprintStatus;
    allocated_members: Types.ObjectId[];
}
export declare const SprintSchema: import("mongoose").Schema<Sprint, import("mongoose").Model<Sprint, any, any, any, (Document<unknown, any, Sprint, any, import("mongoose").DefaultSchemaOptions> & Sprint & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Sprint, any, import("mongoose").DefaultSchemaOptions> & Sprint & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}), any, Sprint>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Sprint, Document<unknown, {}, Sprint, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Sprint & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Sprint, Document<unknown, {}, Sprint, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Sprint & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Sprint, Document<unknown, {}, Sprint, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Sprint & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<SprintStatus, Sprint, Document<unknown, {}, Sprint, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Sprint & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    project_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Sprint, Document<unknown, {}, Sprint, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Sprint & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    start_date?: import("mongoose").SchemaDefinitionProperty<Date, Sprint, Document<unknown, {}, Sprint, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Sprint & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    expected_end_date?: import("mongoose").SchemaDefinitionProperty<Date, Sprint, Document<unknown, {}, Sprint, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Sprint & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    allocated_members?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId[], Sprint, Document<unknown, {}, Sprint, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Sprint & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Sprint>;
