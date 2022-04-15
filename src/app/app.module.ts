import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsernameComponent } from './username/username.component';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { DatePipe } from './date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsernameComponent,
    RepositoryComponent,
    RepositoriesComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
