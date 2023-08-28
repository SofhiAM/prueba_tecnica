import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/autenticacion/login.service';
import { LoginRequest } from '../services/autenticacion/loginRequest';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit{
  loginError:string="";
  loginForm = this.formBuilder.group({
    email:['cristal@gmail.com', [Validators.email] ],
    password:['']
  })
  constructor( private formBuilder:FormBuilder, private router:Router, private loginService: LoginService){}
  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.controls.email;
  }

  get password(){
    return this.loginForm.controls.password;
  }

  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) =>{
          console.log(userData);
        },
        error:(errorData) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete:() => {
          console.info("Login completo");
          this.router.navigateByUrl('/inicio');
          this.loginForm.reset();
        },
      });
      
    }
    else{
      this.loginForm.markAllAsTouched();
    }
  }
}
