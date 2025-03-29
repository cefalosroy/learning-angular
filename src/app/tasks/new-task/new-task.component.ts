import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NewTask} from '../task/task.model';

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
  @Output() emitNewTaskOnFormSubmit = new EventEmitter<NewTask>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  @Output() emitFalseOnClickedCancelButton = new EventEmitter<boolean>();

  onClickedCancelButton() {
    this.emitFalseOnClickedCancelButton.emit();
  }

  onSubmitNewTask() {
    this.emitNewTaskOnFormSubmit.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    });
  }
}
