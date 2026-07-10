import { CreateTaskDto } from 'src/dtos/create-task.dto';
import { GetTaskFilterDto } from 'src/dtos/get-tasks-filter.dto';
import { Task } from 'src/tasks/task.model';

export interface TasksInterface {
  getAllTasks(query: GetTaskFilterDto): Task[];
  createTask(body: CreateTaskDto): Task;
}
