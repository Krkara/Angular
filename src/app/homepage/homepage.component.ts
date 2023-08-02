import { CartService } from './../services/CartService';
import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  products : Product[] = [];
  
  constructor(private httpClient: HttpClient, private router: Router, private cartService: CartService) {}


  ngOnInit() {
    this.httpClient.get<Product[]>("http://localhost:8080/products").subscribe(res => 
      this.products = res
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(this.cartService.getCartItems());
  }

  goToCart() {
    this.router.navigate(['/ostukorv']);
  }
}
