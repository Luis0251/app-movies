import { Component } from '@angular/core';
import { Movies } from '../movies';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss']
})
export class MoviesHomeComponent {
movies : Movies[] = [];
yetToWatchMovies:Movies[]=[];
}
