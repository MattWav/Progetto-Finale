import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DecommerceApiService } from 'src/app/services/decommerce-api.service';
import { CartComponent } from 'src/app/components/cart/cart/cart.component';
import { ConfigurationsServiceService } from 'src/app/services/configurations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


  products :any
  constructor(private productService : DecommerceApiService,  private route: ActivatedRoute, public configurationService: ConfigurationsServiceService) { }

  nameComponent : string= 'HomeComponent';


  ngOnInit(): void {


    this.productService.getProducts().subscribe( (data:any) => {

      this.products = Object.keys(data).map((key) => {
        data[key] ['id'] = key //a data key aggiungi una proprietà che si chiama id, che è uguale a key
        return data[key]})
    } )
  }






}
