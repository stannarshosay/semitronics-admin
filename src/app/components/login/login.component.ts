import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogging:boolean = false;
  username = new FormControl("",Validators.required);
  password = new FormControl("",Validators.required);

  constructor(
    private snackBar: MatSnackBar,
    private loginService:LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.isLogging = true;
    if(this.username.valid&&this.password.valid){
      localStorage.setItem("semi_id","1234");
      this.loginService.hasLoggedIn.next(true);
      this.showSnackbar("Login successfull");
      this.router.navigate(["dashboard"]);
    }else{
      this.isLogging = false;
      this.showSnackbar("Oops! no credentials entered");
    }
  }

  showSnackbar(content:string){
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    config.panelClass = ['snackbar-styler'];
    this.snackBar.open(content, "close", config);
  }
 
}
