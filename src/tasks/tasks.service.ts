import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v7 as uuid } from 'uuid';
import { CreateTaskDto } from 'src/dtos/create-task.dto';
import { GetTaskFilterDto } from 'src/dtos/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.find((val) => val.id === id);
  }

  deleteTaskById(id: string): Task[] | undefined {
    this.tasks = this.tasks.filter((val) => val.id !== id);
    return this.tasks;
  }

  updateTaskById(id: string, createTaskDto: CreateTaskDto): Task[] {
    const taskIdx = this.tasks.findIndex((val) => val.id === id);

    const { title, description } = createTaskDto;

    const updatedTask = {
      title,
      description,
    };

    this.tasks[taskIdx] = { ...this.tasks[taskIdx], ...updatedTask };
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTaskFilterDto): Task[] {
    const { status, search } = filterDto;

    let tasks = this.getAllTasks();
    if (status) {
      // do something with status
      tasks = tasks.filter((task) => task.status === status);
    }
    if (search) {
      // do something with search
      tasks = tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(search) ||
          task.description.toLowerCase().includes(search),
      );
    }

    // return final result
    return tasks;
  }
}
