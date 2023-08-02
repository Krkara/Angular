import { CartService } from './../services/CartService';
import { Product } from './../models/product.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  products: Product[] = [];

  constructor(private cartService: CartService,  private router: Router) {
    this.products = cartService.getCartItems();
  }


  removeFromCart(product: Product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  goToShop() {
    this.router.navigate(['/']);
  }
}
