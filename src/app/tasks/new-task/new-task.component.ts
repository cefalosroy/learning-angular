import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId !: string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  private tasksService: TasksService = inject(TasksService);

  @Output() emitOnClickedCancelButton = new EventEmitter<boolean>();

  onClickedCancelButton() {
    this.emitOnClickedCancelButton.emit();
  }

  onSubmitNewTask() {
    this.tasksService.addNewTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate
      },
      this.userId
    );
    this.emitOnClickedCancelButton.emit();
  }
}
