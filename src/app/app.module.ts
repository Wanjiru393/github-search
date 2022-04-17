import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernameComponent } from './username-profile/username.component';
import { RepositoriesComponent } from './github-repos/repositories.component';
import { SearchFormComponent } from './github-search-form/search-form.component';



@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    RepositoriesComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
