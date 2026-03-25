import { Model } from 'mongoose';
import { Project } from '../schemas/project.schema';
export declare class ProjectsService {
    private projectModel;
    constructor(projectModel: Model<Project>);
    findAll(): Promise<Project[]>;
    findMyProjects(userId: string): Promise<Project[]>;
    isUserAllocated(projectId: string, userId: string): Promise<boolean>;
    isUserManager(projectId: string, userId: string): Promise<boolean>;
    create(projectDto: any): Promise<Project>;
}
