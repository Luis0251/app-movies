import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {faHeart as faNotFav} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-movie-t',
  templateUrl: './movie-t.component.html',
  styleUrls: ['./movie-t.component.scss']
})
export class MovieTComponent implements OnInit {
@Input() imageUrl: string = '';
@Input() id: number = 0;
@Input()isFav: boolean = false;
@Output()favClick = new EventEmitter();
faFav = faNotFav;
  constructor(){}
ngOnInit(): void {
  this.faFav = this.isFav ? faHeart : faNotFav;
}
onFavClick():void{
  this.favClick.emit();
}
}
