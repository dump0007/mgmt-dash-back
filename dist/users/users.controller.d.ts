import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("../schemas/user.schema").User[]>;
    findPending(req: any): Promise<import("../schemas/user.schema").User[]>;
    create(userDto: any): Promise<import("../schemas/user.schema").User>;
    updateStatus(id: string, body: any, req: any): Promise<import("../schemas/user.schema").User | null>;
}
