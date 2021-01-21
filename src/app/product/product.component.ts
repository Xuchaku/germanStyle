import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import {Product, ProductsServiceService} from "./../products-service.service"
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product
  constructor(private route: ActivatedRoute, private ProductsServiceService: ProductsServiceService) { }

  ngOnInit(): void {
  	this.route.params.subscribe(param=>{
  		this.product = this.ProductsServiceService.products.find(item => item.name == param.name);
  		console.log(this.product)
  	})
  }

}
