import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit{
  loginForm = this.formBuilder.group({
    email:['cristal@gmail.com', [Validators.email] ],
    password:['']
  })
  constructor( private formBuilder:FormBuilder, private router:Router){}
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
      console.log("Si ingresaste");
      this.router.navigateByUrl('/inicio');
      this.loginForm.reset();
    }
    else{
      alert("Error al ingresar");
    }
  }
}
