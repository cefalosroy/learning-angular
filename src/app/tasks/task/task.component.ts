import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "./task.model";
import {DatePipe} from '@angular/common';
import {CardComponent} from '../../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    DatePipe,
    CardComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() emitIdOnClickedTaskCompleteButton = new EventEmitter<string>();

  onClickedTaskCompleteButton() {
    this.emitIdOnClickedTaskCompleteButton.emit(this.task.id);
  }
}
