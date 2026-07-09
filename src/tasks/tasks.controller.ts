import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

interface TasksInterface {
  getTasks(): string;
}

@Controller('tasks')
export class TasksController implements TasksInterface {
  constructor(private tasksService: TasksService) {}

  @Get('/')
  getTasks() {
    return this.tasksService.getAllTasks();
  }
}
