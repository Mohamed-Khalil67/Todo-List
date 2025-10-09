import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedModule, TasksModule], // BrowserModule has the DatePipe
})
export class AppModule {}
