import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks';
import { TaskComponent } from './task/task';
import { NewTaskComponent } from './new-task/new-task';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
