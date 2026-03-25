import { SprintsService } from './sprints.service';
import { ProjectsService } from '../projects/projects.service';
export declare class SprintsController {
    private readonly sprintsService;
    private readonly projectsService;
    constructor(sprintsService: SprintsService, projectsService: ProjectsService);
    findAll(projectId: string, req: any): Promise<import("../schemas/sprint.schema").Sprint[]>;
    create(sprintDto: any, req: any): Promise<import("../schemas/sprint.schema").Sprint>;
}
