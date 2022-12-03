import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { faHeart,faEye  } from '@fortawesome/free-solid-svg-icons';
import {faHeart as faNotFav,faEye as faNotWatched} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-movie-t',
  templateUrl: './movie-t.component.html',
  styleUrls: ['./movie-t.component.scss']
})
export class MovieTComponent implements OnInit {
@Input() imageUrl: string = '';
@Input() id: number = 0;
@Input()isFav: boolean = false;
@Input() isWatched: boolean = false;
@Output() watchedClick = new EventEmitter();
@Output()favClick = new EventEmitter();
faFav = faNotFav;
faWatched = faNotWatched;
  constructor(){}
ngOnInit(): void {
  this.faFav = this.isFav ? faHeart : faNotFav;
  this.faWatched = this.isWatched ? faEye : faNotWatched;
}
onFavClick():void{
  this.favClick.emit();
}
onWatchedClick(): void {
  this.watchedClick.emit();
}
}
