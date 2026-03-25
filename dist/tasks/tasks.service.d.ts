import { Model } from 'mongoose';
import { Task } from '../schemas/task.schema';
export declare class TasksService {
    private taskModel;
    constructor(taskModel: Model<Task>);
    findAll(): Promise<Task[]>;
    findAllByProject(projectId: string): Promise<Task[]>;
    create(taskDto: any, userStr: string): Promise<Task>;
    updateStatus(id: string, status: string, userStr: string): Promise<Task | null>;
    updateDetails(id: string, details: any, userStr: string): Promise<Task | null>;
    findById(id: string): Promise<Task | null>;
    addComment(id: string, userId: string, userName: string, text: string): Promise<Task | null>;
    updateComment(id: string, commentId: string, userId: string, userName: string, text: string): Promise<Task | null>;
    deleteComment(id: string, commentId: string, userName: string): Promise<Task | null>;
}
