import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolVarComponent } from './components/tool-var/tool-var.component';
import { MoviesHomeComponent } from './components/movies-home/movies-home.component';
import { AddMoviesComponent } from './components/add-movies/add-movies.component';
import { ButtonComponent } from './components/button/button.component';
import { MovieTComponent } from './components/movie-t/movie-t.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
