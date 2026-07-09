import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { type Task } from './task.model';

interface TasksInterface {
  getAllTasks(): Task[];
  createTask(body: Task): Task;
}

@Controller('tasks')
export class TasksController implements TasksInterface {
  constructor(private tasksService: TasksService) {}

  @Get('/')
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post('/')
  createTask(@Body() body: Task) {
    return this.tasksService.createTask(body.title, body.description);
  }
}
