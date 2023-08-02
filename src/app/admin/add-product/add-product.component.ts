import { Product } from './../../models/product.model';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product: Product = {} as Product;

  constructor(private httpClient: HttpClient) {}

  /*
  handleSubmit(addProductForm: NgForm) {
    console.log(addProductForm);

    this.httpClient.post("http://locahost:8080/products", addProductForm.value);
  }
  */
  handleSubmit() {
    console.log('Form submitted!');
    console.log('Product Name:', this.product.name);
    console.log('Product Description:', this.product.description);
    console.log('Product Image:', this.product.image);
    console.log('Product Price:', this.product.price);
    console.log('Product Category:', this.product.category);
    console.log('Product Quantity:', this.product.stock);
    console.log('Product Active:', this.product.active);
  }
}
