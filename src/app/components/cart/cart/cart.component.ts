import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products/products';
import { DecommerceApiService } from 'src/app/services/decommerce-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

   constructor(private DecommerceApiService : DecommerceApiService ,   readonly route : ActivatedRoute) { }


  private key = 'cart';

      products = Products;
      cartProducts: Products[] = [];





    ngOnInit(): void {
      const productId = this.route.snapshot.params[('productId')]; // get the id parameter from the URL
      this.DecommerceApiService.getProductById(productId).subscribe(products => {
        this.cartProducts.push(productId);

        this.cartProducts = this.getCartProducts();
      });
    }
    getCartProducts(): Products[] {
      const storedProducts = localStorage.getItem(this.key);
      if (storedProducts) {
        return JSON.parse(storedProducts);
      } else {
        return [];
      }
    }

    saveCartProducts(cartProducts: Products[]): void {
      localStorage.setItem(this.key, JSON.stringify(cartProducts));
    }

    addToCart(product: Products): void {
      const cartProducts = this.getCartProducts();
      cartProducts.push(product);

            this.saveCartProducts(cartProducts);
    }

    removeFromCart(product: Products): void {
    let cartProducts = this.getCartProducts();
      cartProducts = cartProducts.filter(p => p !== product);
      this.saveCartProducts(cartProducts);
   }

}


