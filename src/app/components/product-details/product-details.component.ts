import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DecommerceApiService } from 'src/app/services/decommerce-api.service';
import { CartComponent } from '../cart/cart/cart.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [CartComponent]


})
export class ProductDetailsComponent implements OnInit {

  product : any


     productID = this.route.snapshot.paramMap.get('productID')

  constructor(private DecommerceApiService : DecommerceApiService, readonly cartComponent: CartComponent, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.DecommerceApiService.getProductByProductID(this.productID).subscribe((productData)=>{
      this.product = productData;
      console.log(productData)
    })
  }

  ngOninit1(): void {


    this.DecommerceApiService.getProducts().subscribe( (data:any) => {

      this.product = Object.keys(data).map((key) => {
        data[key] ['id'] = key //a data key aggiungi una proprietà che si chiama id, che è uguale a key
        return data[key]})
    } )
  }


}
