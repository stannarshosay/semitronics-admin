import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { RoutePathService } from './services/route-path.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'semitronics-admin';
  isFullPage:boolean = false;
  isLoggedIn:boolean = false;
  constructor(
    private router:Router,
    private loginService:LoginService,
    public routePathService:RoutePathService
  ) {} 
  ngOnInit():void{
  }
  ngOnDestroy():void{
  }
   ngAfterContentChecked():void{
     let page = this.router.url;
     switch(page){      
       case "/login":{
        this.isFullPage = true;
        break;
      }      
       default:{
        this.isFullPage = false;
        break;
       }
     }       
   }
   
   logout(){
    localStorage.setItem("semi_id","");
    this.loginService.hasLoggedIn.next(false);
    this.router.navigate(["login"]);
   }
  
}
