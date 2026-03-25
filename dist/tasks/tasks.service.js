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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const task_schema_1 = require("../schemas/task.schema");
let TasksService = class TasksService {
    taskModel;
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async findAll() {
        return this.taskModel.find().populate('assignee').exec();
    }
    async findAllByProject(projectId) {
        return this.taskModel.find({ project_id: projectId }).populate('assignee').exec();
    }
    async create(taskDto, userStr) {
        const createdTask = new this.taskModel(taskDto);
        createdTask.activity_logs.push({
            user: userStr,
            action: 'Created task',
            date: new Date()
        });
        return createdTask.save();
    }
    async updateStatus(id, status, userStr) {
        const task = await this.taskModel.findById(id).exec();
        if (!task)
            return null;
        task.status = status;
        if (status === 'DONE') {
            task.completion_date = new Date();
        }
        task.activity_logs.push({
            user: userStr,
            action: `Moved to ${status}`,
            date: new Date()
        });
        return task.save();
    }
    async updateDetails(id, details, userStr) {
        const task = await this.taskModel.findById(id).exec();
        if (!task)
            return null;
        Object.assign(task, details);
        task.activity_logs.push({
            user: userStr,
            action: 'Updated task details and assignments',
            date: new Date()
        });
        return task.save();
    }
    async findById(id) {
        return this.taskModel.findById(id).exec();
    }
    async addComment(id, userId, userName, text) {
        const task = await this.taskModel.findById(id).exec();
        if (!task)
            return null;
        task.comments.push({
            user_name: userName,
            user_id: userId,
            text: text,
            created_at: new Date(),
            updated_at: new Date()
        });
        task.activity_logs.push({
            user: userName,
            action: 'Added a comment',
            date: new Date()
        });
        return task.save();
    }
    async updateComment(id, commentId, userId, userName, text) {
        const task = await this.taskModel.findById(id).exec();
        if (!task)
            return null;
        const comment = task.comments.find(c => c._id?.toString() === commentId);
        if (!comment)
            return null;
        comment.text = text;
        comment.updated_at = new Date();
        task.activity_logs.push({
            user: userName,
            action: 'Updated a comment',
            date: new Date()
        });
        return task.save();
    }
    async deleteComment(id, commentId, userName) {
        const task = await this.taskModel.findById(id).exec();
        if (!task)
            return null;
        task.comments = task.comments.filter(c => c._id?.toString() !== commentId);
        task.activity_logs.push({
            user: userName,
            action: 'Deleted a comment',
            date: new Date()
        });
        return task.save();
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(task_schema_1.Task.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TasksService);
//# sourceMappingURL=tasks.service.js.map