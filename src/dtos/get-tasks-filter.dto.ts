import { TaskStatus } from 'src/tasks/task.model';

export class GetTaskFilterDto {
  status?: TaskStatus;
  search?: string;
}
