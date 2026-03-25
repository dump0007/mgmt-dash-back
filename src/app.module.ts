import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { SprintsModule } from './sprints/sprints.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/mgmt-dashboard'),
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
