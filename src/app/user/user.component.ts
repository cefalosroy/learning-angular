import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "./user.model";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() emitIdOnClickedUserButton = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onClickedUserButton() {
    this.emitIdOnClickedUserButton.emit(this.user.id);
  }
}
