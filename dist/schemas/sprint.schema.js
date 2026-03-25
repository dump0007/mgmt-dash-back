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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SprintSchema = exports.Sprint = exports.SprintStatus = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var SprintStatus;
(function (SprintStatus) {
    SprintStatus["PLANNED"] = "PLANNED";
    SprintStatus["ACTIVE"] = "ACTIVE";
    SprintStatus["COMPLETED"] = "COMPLETED";
})(SprintStatus || (exports.SprintStatus = SprintStatus = {}));
let Sprint = class Sprint extends mongoose_2.Document {
    name;
    project_id;
    start_date;
    expected_end_date;
    status;
    allocated_members;
};
exports.Sprint = Sprint;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Sprint.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Project', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Sprint.prototype, "project_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Sprint.prototype, "start_date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Sprint.prototype, "expected_end_date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: SprintStatus, default: SprintStatus.PLANNED }),
    __metadata("design:type", String)
], Sprint.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'User' }] }),
    __metadata("design:type", Array)
], Sprint.prototype, "allocated_members", void 0);
exports.Sprint = Sprint = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Sprint);
exports.SprintSchema = mongoose_1.SchemaFactory.createForClass(Sprint);
//# sourceMappingURL=sprint.schema.js.map