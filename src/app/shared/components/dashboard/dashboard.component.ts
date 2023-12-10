import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit , OnDestroy{


  public latestResult: any[] = [];
  public timeSpent: any[] = [];
  public userData: any = [];
  public TodaysDate!:Date;
  public subscription: Subscription = new Subscription()
  constructor(
    private _apiService: ApiService
  ){}

  ngOnInit(): void {
    let user ;
    console.log(Boolean(user));
    

    if(!!user){
    
    }
    this.TodaysDate = new Date()
    this.subscription.add(
      this._apiService.getAllData()
        .subscribe(res => {
          this.userData = res.userData[0]
          console.log(this.userData)
          this.latestResult = res['lastestResults']
          this.latestResult.forEach(e => {          
              e.score = +e.score.slice(0,2)
          })
          for(let key in res['timeSpentData'].days){
              let obj = {
                title : key,
                ...res['timeSpentData'].days[key]
              }
                this.timeSpent.push(obj)
          }
        })
    )
  }


ngOnDestroy(): void {
  this.subscription.unsubscribe()
}

}
