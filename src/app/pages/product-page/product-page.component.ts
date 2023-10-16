import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  product!: IProduct;
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) {
    this.router.params.subscribe(({ id }) => {
      this.productService.getProductsById(+id).subscribe({
        next: (data) => this.product = data,
        error: (err) => console.log(err.message)
      })
    });
  }
}
