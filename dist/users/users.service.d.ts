import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<User[]>;
    findAllByStatus(status: string): Promise<User[]>;
    findByEmail(email: string): Promise<User | null>;
    update(id: string, updateDto: any): Promise<User | null>;
    create(userDto: any): Promise<User>;
}
