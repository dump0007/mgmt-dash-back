import { TasksService } from './tasks.service';
import { ProjectsService } from '../projects/projects.service';
export declare class TasksController {
    private readonly tasksService;
    private readonly projectsService;
    constructor(tasksService: TasksService, projectsService: ProjectsService);
    findAll(projectId: string, req: any): Promise<import("../schemas/task.schema").Task[]>;
    findAllGlobal(): Promise<import("../schemas/task.schema").Task[]>;
    create(taskDto: any, req: any): Promise<import("../schemas/task.schema").Task>;
    updateStatus(id: string, body: any, req: any): Promise<import("../schemas/task.schema").Task | null>;
    updateDetails(id: string, body: any, req: any): Promise<import("../schemas/task.schema").Task | null>;
    addComment(id: string, body: {
        text: string;
    }, req: any): Promise<import("../schemas/task.schema").Task | null>;
    updateComment(id: string, commentId: string, body: {
        text: string;
    }, req: any): Promise<import("../schemas/task.schema").Task | null>;
    deleteComment(id: string, commentId: string, req: any): Promise<import("../schemas/task.schema").Task | null>;
    private checkWriteAccess;
}
