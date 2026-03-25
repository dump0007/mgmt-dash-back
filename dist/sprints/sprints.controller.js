"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SprintsController = void 0;
const common_1 = require("@nestjs/common");
const sprints_service_1 = require("./sprints.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const projects_service_1 = require("../projects/projects.service");
let SprintsController = class SprintsController {
    sprintsService;
    projectsService;
    constructor(sprintsService, projectsService) {
        this.sprintsService = sprintsService;
        this.projectsService = projectsService;
    }
    async findAll(projectId, req) {
        if (!projectId)
            return [];
        if (req.user.role !== 'ADMIN' && req.user.role !== 'CTO') {
            const isAllocated = await this.projectsService.isUserAllocated(projectId, req.user.userId);
            if (!isAllocated)
                throw new common_1.ForbiddenException('You are not allocated to this project.');
        }
        return this.sprintsService.findAllByProject(projectId);
    }
    async create(sprintDto, req) {
        if (req.user.role !== 'ADMIN' && req.user.role !== 'CTO') {
            const isManager = await this.projectsService.isUserManager(sprintDto.project_id, req.user.userId);
            if (!isManager)
                throw new common_1.ForbiddenException('Only Admins, CTOs, and Project Managers can create sprints.');
        }
        return this.sprintsService.create(sprintDto);
    }
};
exports.SprintsController = SprintsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('projectId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SprintsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SprintsController.prototype, "create", null);
exports.SprintsController = SprintsController = __decorate([
    (0, common_1.Controller)('sprints'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [sprints_service_1.SprintsService,
        projects_service_1.ProjectsService])
], SprintsController);
//# sourceMappingURL=sprints.controller.js.map