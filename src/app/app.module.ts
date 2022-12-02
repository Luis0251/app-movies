import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolVarComponent } from './components/tool-var/tool-var.component';
import { MoviesHomeComponent } from './components/movies-home/movies-home.component';
import { AddMoviesComponent } from './components/add-movies/add-movies.component';
import { ButtonComponent } from './components/button/button.component';
import { MovieTComponent } from './components/movie-t/movie-t.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    ToolVarComponent,
    MoviesHomeComponent,
    AddMoviesComponent,
    ButtonComponent,
    MovieTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
