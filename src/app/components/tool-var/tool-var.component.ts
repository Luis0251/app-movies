import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-tool-var',
  templateUrl: './tool-var.component.html',
  styleUrls: ['./tool-var.component.scss']
})
export class ToolVarComponent implements OnInit {
constructor(private router:Router){}
routes = this.router.config.map((route:Route)=>route?.path || 'Home');
pageTitle = 'Home';
ngOnInit(): void {
}
changeRoute(route:string):void{
  this.pageTitle = route;
  const pageGo = route === 'Home' ? '/' : route;
  this.router.navigate([pageGo]);
}
}
