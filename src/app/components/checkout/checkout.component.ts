import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products/products';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  private readonly key = 'cart';
  cart: Products[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cart = this.getCartProducts();
    this.calculateTotal();
  }

  private getCartProducts(): Products[] {
    const storedProducts = localStorage.getItem(this.key);
    if (storedProducts) {
      return JSON.parse(storedProducts);
    } else {
      return [];
    }
  }

  cartItems: any[] = JSON.parse(localStorage.getItem('cart') || '[]');
  total: number = 0;

  calculateTotal() {
    for (let i = 0; i < this.cartItems.length; i++) {
      this.total += this.cartItems[i].unitPrice;
    }
    console.log(this.total)
  }

}
