import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>(); // Eventemitter will emit custom values

  // select = output<string>(); // same exact output as EventEmitter()
  // avatar = input.required<string>(); // required means, it will be set outside of the component
  // name = input.required<string>(); // those signals are read only signals

  // imagePath = computed(() => {
  //   return '/users/' + this.avatar(); // computed is better as it recompute whenever this avatar is changed
  //   // which is more efficient then imagePath()
  // });

  get imagePath() {
    return '/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
