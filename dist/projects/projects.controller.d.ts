import { ProjectsService } from './projects.service';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    findAll(): Promise<import("../schemas/project.schema").Project[]>;
    findMyProjects(req: any): Promise<import("../schemas/project.schema").Project[]>;
    create(projectDto: any, req: any): Promise<import("../schemas/project.schema").Project>;
    updateMembers(id: string, body: any, req: any): Promise<{
        success: boolean;
        message: string;
    }>;
}
