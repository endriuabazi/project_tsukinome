import { registerLocaleData } from '@angular/common';
import { Message, Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

import { Router } from '@angular/router';




import { Observable } from 'rxjs';
import { __values } from 'tslib';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  formBuilder: (event: any) => void;
 
 
  

  constructor(private router: Router ,private user:UserService) { }


  
  ngOnInit() { 
  
  
   
  
  }

 
  loginUser(event) {
    event.preventDefault();
    console.log(event);
    let username = event.target.elements[0].value;
    let password = event.target.elements[1].value;
    

    if (username ==='endriu' && password === 'endriu'||username ==='admin' && password === 'admin'||username ==='genti' && password === 'genti' ) {
      this.user.setUserLoggedIn();
      this.router.navigate(['/dashboard']);
    }
    //else{alert('Something went wrong,please try again!')}


    


  }
 
  
}





