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
    MongooseModule.forRoot(process.env.MONGODB_URL||""),
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
