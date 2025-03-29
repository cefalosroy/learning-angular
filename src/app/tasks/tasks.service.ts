import {Injectable} from '@angular/core';
import {NewTask, Task} from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  TASKS = 'tasks';

  constructor() {
    this.initTasksFromLocalStorage();
  }

  private initTasksFromLocalStorage() {
    const tasksFromStorage = localStorage.getItem(this.TASKS);
    if (tasksFromStorage) {
      this.tasks = JSON.parse(tasksFromStorage);
    }
  }

  tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15'
    }
  ];

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId == userId);
  }

  completeTask(taskId: string) {
    const index = this.tasks.findIndex(task => task.id == taskId);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    this.storeTasksToLocalStorage();
  }

  addNewTask(newTask: NewTask, userId: string) {
    this.tasks.unshift({
      id: Date.now().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate
    });
    this.storeTasksToLocalStorage();
  }

  private storeTasksToLocalStorage() {
    localStorage.setItem(this.TASKS, JSON.stringify(this.tasks));
  }
}
