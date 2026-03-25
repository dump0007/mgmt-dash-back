import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { SprintsModule } from './sprints/sprints.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://crazybuooy:6L0JjzK7LFVGfIX8@crazy.a9atq.mongodb.net/mgmt-dashboard"),
    UsersModule,
    ProjectsModule,
    AuthModule,
    TasksModule,
    SprintsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
