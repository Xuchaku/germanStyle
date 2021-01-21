import { Component, OnInit } from '@angular/core';
import {AnimationServiceService} from './../animation-service.service'
import {EventBusService} from "./../event-bus.service"

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(public animationService: AnimationServiceService, public EventBusService: EventBusService) {

  }

  ngOnInit(): void {
  }
  changeState(){
  	this.animationService.stateMenu = !this.animationService.stateMenu
  }
  toSpingSummer(){
  	this.EventBusService.emit("spring-summer");
  }
  toAutumnWinter(){
  	this.EventBusService.emit("autumn-winter");
  }
  toSells(){
  	this.EventBusService.emit("sells");
  }

}
