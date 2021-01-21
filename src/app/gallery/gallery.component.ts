import { Component, OnInit } from '@angular/core';
import {ProductsServiceService, Product} from '../products-service.service'
import {EventBusService} from "../event-bus.service"

const main: string = "main";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  maxWidth: number = 300
  maxHeight: number = 450
  defaultCoeff : number = this.maxWidth/this.maxHeight
  localProducts: Product[] = []
  constructor(public ProductsServiceService: ProductsServiceService, public EventBusService: EventBusService) { 
  	this.localProducts = ProductsServiceService.products;
  	this.EventBusService.subject.subscribe(data =>{
  		if(data == main)
  			this.localProducts = ProductsServiceService.products;
  		else
  			this.localProducts = this.ProductsServiceService.products.filter(item => item.sezon == data);
  	})
  }

  ngOnInit(): void {

  	/*let self : any = this
  	setTimeout(()=>{
		let items: any = document.querySelectorAll(".bgitem");
		  	console.log(items)
		  	for(let i =0;i<items.length;i++){
		  		let w = +items[i].clientWidth, h = +items[i].clientHeight, coeff = w/h;
		  		
		  		items[i].width = self.maxWidth;
		  		items[i].height = self.maxWidth/coeff;
		  		
		  		
		  	}
  	},3000)*/
  	
  }

}
