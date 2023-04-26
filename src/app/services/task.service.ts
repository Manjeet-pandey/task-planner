import { Injectable } from '@angular/core';
import { Tasks } from '../assets/mock-task';
import { Task } from '../interfaces/Task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return Tasks;
  }

}

