import { Injectable } from '@angular/core';
import {Subject, Subscription} from "rxjs"
import {filter, map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  subject = new Subject();
  constructor() { }

  emit(data: string){
  	this.subject.next(data);
  }
  
}
