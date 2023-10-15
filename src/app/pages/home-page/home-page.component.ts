import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.getProducts().subscribe(data => this.products=data)
  }
}
