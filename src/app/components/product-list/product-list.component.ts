import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products!: IProduct[];
  constructor(private productService: ProductService){}
  async ngOnInit(){
    try {
      this.products = await lastValueFrom(this.productService.getProducts())
    } catch (error) {
      
    }
  }
  async removeProduct(id: number){
    window.confirm('Bạn có chắc chắn muốn xóa không?')
    if(!confirm) return;
    try {
      await lastValueFrom(this.productService.removeProducts(id))
      this.products = this.products.filter(item => item.id !== id);
      alert('Bạn đã xóa thành công')
    } catch (error) {
      
    }
  }
}
