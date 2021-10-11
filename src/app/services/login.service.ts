import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public hasLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(
    private http:HttpClient
  ) {
    if(localStorage.getItem("semi_id")){
      this.hasLoggedIn.next(true);
    }
   }
   getLoginSetStatus():Observable<boolean>{
    return this.hasLoggedIn.asObservable();
  }
}
