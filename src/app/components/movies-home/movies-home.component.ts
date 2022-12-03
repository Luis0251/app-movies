import { Component,OnInit } from '@angular/core';
import { Movies } from '../movies';
import { MoviesServiceService } from 'src/app/services/movies-service.service';


@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss']
})
export class MoviesHomeComponent implements OnInit {
movies : Movies[] = [];
watchedMovies : Movies[] = [];
yetToWatchMovies:Movies[]=[];
constructor(private moviesService:MoviesServiceService){}
ngOnInit(): void {
this.moviesService.getMovies().subscribe((movies)=>this.movies = movies);
  }
  ngDoCheck():void{
    if (this.movies.length && !this.watchedMovies.length) {
      this.yetToWatchMovies = this.movies.filter((m) => !m.isFav && !m.isWatched);
      this.watchedMovies = this.movies.filter((m) => m.isWatched);
    }
  }
  onFavClick():void{}
  onWatchedClick():void{}
}
