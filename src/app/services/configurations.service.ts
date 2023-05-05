import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DecommerceApiService } from './decommerce-api.service';
import { Configuration } from '../models/catalog/Configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsServiceService {

  constructor(private http : HttpClient, private DECommerceApiService : DecommerceApiService ) {}



  configuration : Configuration;

  initialize(){
     this.http.get(this.DECommerceApiService.DECommerceApiUrl + '/Configurations').subscribe((x : any)=>{
      this.configuration = x;
     }
     );
  }

 isVisible(componentName:string, fieldName:string)
 {
  let isVisible =  this.configuration.pages.find(x=> x.name === componentName)?.fields.find(x=> x.name == fieldName)?.isVisible;

  return isVisible;
 }

 getText(componentName:string, fieldName:string)
 {
  let text=  this.configuration.pages.find(x=> x.name === componentName)?.fields.find(x=> x.name == fieldName)?.text;

  return text;
 }




}
