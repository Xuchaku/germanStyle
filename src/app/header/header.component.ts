import { Component, OnInit } from '@angular/core';
import {AnimationServiceService} from './../animation-service.service'
import {EventBusService} from "./../event-bus.service"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(public animationService: AnimationServiceService, public EventBusService: EventBusService) { 
  	
  }

  ngOnInit(): void {
  	
  }
  changeState(){
  	this.animationService.stateMenu = !this.animationService.stateMenu
  }
  toMain(){
  	this.EventBusService.emit("main");
  }

}
