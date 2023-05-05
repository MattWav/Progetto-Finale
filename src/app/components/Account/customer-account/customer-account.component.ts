import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DecommerceApiService } from 'src/app/services/decommerce-api.service';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.css']
})
export class CustomerAccountComponent implements OnInit {
  constructor(private AuthService : AuthService, private router: Router, private DECommerceApiService : DecommerceApiService) {}

  user : any

  ngOnInit(): void {
    //prendo dal local storage lo userid e lo uso come imput per caricarmi tutti i dati dello user
    this.DECommerceApiService.getUser(this.AuthService.getUserID()).subscribe((userData)=>{
      this.user = userData;
      console.log(userData)
    })

  }

}
