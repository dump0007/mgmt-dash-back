import { Model } from 'mongoose';
import { Sprint } from '../schemas/sprint.schema';
export declare class SprintsService {
    private sprintModel;
    constructor(sprintModel: Model<Sprint>);
    findAllByProject(projectId: string): Promise<Sprint[]>;
    create(sprintDto: any): Promise<Sprint>;
}
