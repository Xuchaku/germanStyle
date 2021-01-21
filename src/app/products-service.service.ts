import { Injectable } from '@angular/core';
import * as obj from './../config.json';
export interface Product {
	brand: string;
	name: string;
	desc: string;
	sizes: number[];
	price: number | string;
	discPrice?: string | number | null;
	sezon: string;
	image: string;

}

@Injectable({
  providedIn: 'root'
})

export class ProductsServiceService {
  products: Product[] = [
  	{brand: 'Emale', name: 'Copyright 2020 © Немецкий стиль ', desc: 'Desc', sizes: [23, 44, 35], price: 4800, sezon: 'spring-summer', image: './../../assets/lefate/ABITO-85-A.jpg'},
  	{brand: 'Emale', name: 'Name2', desc: 'Desc', sizes: [23, 44, 35],  price: 4800, sezon: 'sells', image: './../../assets/lefate/ABITO-143-A.jpg', discPrice: 2000},

  ];
  constructor() {
    /*for(const prod of obj.products){
      if(prod.image){
        prod.image = './../../assets/' + prod.image.substring(8);
      }
      this.products.push(prod);
    }*/
    console.log( this.products);
  }
}
