import { Component, OnInit } from '@angular/core';
import {EventBusService} from "./../event-bus.service"
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public EventBusService: EventBusService) { }

  ngOnInit(): void {
  }
  toSpingSummer(){
  	this.EventBusService.emit("sping-summer");
  }
  toAutumnWinter(){
  	this.EventBusService.emit("autumn-winter");
  }
  toSells(){
  	this.EventBusService.emit("sells");
  }

}
