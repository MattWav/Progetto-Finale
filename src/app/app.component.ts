import { Component, OnInit } from '@angular/core';
import { ConfigurationsServiceService } from './services/configurations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DECommerceFE';

  configurations: String;
  constructor(private ConfigurationsService : ConfigurationsServiceService  ){}


  ngOnInit(): void {
    this.ConfigurationsService.initialize()

  }



}
