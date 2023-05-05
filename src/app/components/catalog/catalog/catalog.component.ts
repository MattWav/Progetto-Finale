import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DecommerceApiService } from 'src/app/services/decommerce-api.service';
import { Products } from 'src/app/models/products/products';
import { ConfigurationsServiceService } from 'src/app/services/configurations.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {


  nameComponent : string= 'CatalogComponent';


    products:any
    productId: string
    unitPrice:number
    imageValue:string
    field1: string
    field2:string
  constructor(private DecommerceApiService : DecommerceApiService, private route: ActivatedRoute, public configurationService: ConfigurationsServiceService) { }



  ngOnInit(): void {
    this.DecommerceApiService.getProducts().subscribe( (data:any) => {

      this.products = Object.keys(data).map((key) => {
        data[key] ['id'] = key
        return data[key]})
    } )

}

}
