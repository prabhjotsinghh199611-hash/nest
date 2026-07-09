import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  public getAllTasks(): string {
    return 'all tasks';
  }
}
