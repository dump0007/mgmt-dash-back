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
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const projects_service_1 = require("../projects/projects.service");
let TasksController = class TasksController {
    tasksService;
    projectsService;
    constructor(tasksService, projectsService) {
        this.tasksService = tasksService;
        this.projectsService = projectsService;
    }
    async findAll(projectId, req) {
        if (projectId) {
            if (req.user.role !== 'ADMIN' && req.user.role !== 'CTO') {
                const isAllocated = await this.projectsService.isUserAllocated(projectId, req.user.userId);
                if (!isAllocated)
                    throw new common_1.ForbiddenException('Not authorized to view tasks for this project.');
            }
            return this.tasksService.findAllByProject(projectId);
        }
        return this.tasksService.findAll();
    }
    async findAllGlobal() {
        return this.tasksService.findAll();
    }
    async create(taskDto, req) {
        return this.tasksService.create(taskDto, req.user.name);
    }
    async updateStatus(id, body, req) {
        await this.checkWriteAccess(id, req.user);
        return this.tasksService.updateStatus(id, body.status, req.user.name);
    }
    async updateDetails(id, body, req) {
        await this.checkWriteAccess(id, req.user);
        return this.tasksService.updateDetails(id, body, req.user.name);
    }
    async addComment(id, body, req) {
        return this.tasksService.addComment(id, req.user.userId, req.user.name, body.text);
    }
    async updateComment(id, commentId, body, req) {
        const task = await this.tasksService.findById(id);
        if (!task)
            throw new common_1.ForbiddenException('Task not found');
        const comment = task.comments.find(c => c._id?.toString() === commentId);
        if (comment && comment.user_id !== req.user.userId && req.user.role !== 'ADMIN' && req.user.role !== 'CTO') {
            throw new common_1.ForbiddenException('You can only edit your own comments.');
        }
        return this.tasksService.updateComment(id, commentId, req.user.userId, req.user.name, body.text);
    }
    async deleteComment(id, commentId, req) {
        const task = await this.tasksService.findById(id);
        if (!task)
            throw new common_1.ForbiddenException('Task not found');
        const comment = task.comments.find(c => c._id?.toString() === commentId);
        if (comment && comment.user_id !== req.user.userId && req.user.role !== 'ADMIN' && req.user.role !== 'CTO') {
            throw new common_1.ForbiddenException('You can only delete your own comments.');
        }
        return this.tasksService.deleteComment(id, commentId, req.user.name);
    }
    async checkWriteAccess(taskId, user) {
        if (user.role === 'ADMIN' || user.role === 'CTO')
            return;
        const task = await this.tasksService.findById(taskId);
        if (!task)
            throw new common_1.ForbiddenException('Task not found');
        if (task.assignee?.toString() !== user.userId) {
            throw new common_1.ForbiddenException('Only the assignee, Admin, or CTO can update this task.');
        }
    }
};
exports.TasksController = TasksController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('projectId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "findAllGlobal", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "updateDetails", null);
__decorate([
    (0, common_1.Post)(':id/comments'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "addComment", null);
__decorate([
    (0, common_1.Put)(':id/comments/:commentId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('commentId')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "updateComment", null);
__decorate([
    (0, common_1.Delete)(':id/comments/:commentId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('commentId')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "deleteComment", null);
exports.TasksController = TasksController = __decorate([
    (0, common_1.Controller)('tasks'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [tasks_service_1.TasksService,
        projects_service_1.ProjectsService])
], TasksController);
//# sourceMappingURL=tasks.controller.js.map