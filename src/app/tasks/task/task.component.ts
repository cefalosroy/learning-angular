import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "./task.model";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() taskCompletedEvent = new EventEmitter<string>();

  onTaskCompleted() {
    this.taskCompletedEvent.emit(this.task.id);
  }
}
