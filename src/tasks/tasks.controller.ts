import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

import { TasksInterface } from 'src/interfaces/TaskInterface';
import { CreateTaskDto } from 'src/dtos/create-task.dto';
import { GetTaskFilterDto } from 'src/dtos/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController implements TasksInterface {
  constructor(private tasksService: TasksService) {}

  @Get('/')
  getAllTasks(@Query() fitlerDto: GetTaskFilterDto) {
    if (Object.keys(fitlerDto).length) {
      return this.tasksService.getTasksWithFilters(fitlerDto);
    } else {
      return this.tasksService.getAllTasks();
    }
  }

  @Post('/')
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Put('/:id')
  updateTaskById(
    @Param('id') id: string,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    return this.tasksService.updateTaskById(id, createTaskDto);
  }

  @Delete('/:id')
  deleteTaskById(@Param('id') id: string) {
    return this.tasksService.deleteTaskById(id);
  }
}
