import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';





@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private router: Router) { }

 
 
  onBackButtonClick():void {
    this.router.navigate(['dashboard']);
  }


  ngOnInit(): void {
    
    
  
   
  }

}
