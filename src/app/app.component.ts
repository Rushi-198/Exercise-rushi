import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api.service';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  userData: any;


  constructor(
    private _apiService: ApiService
  ){}

  ngOnInit(): void {

      this._apiService.getAllData()
        .subscribe(res => {
          this.userData = res.userData[0]

        })
  }




}
