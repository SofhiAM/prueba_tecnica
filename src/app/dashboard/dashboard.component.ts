import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/autenticacion/login.service';
import { User } from '../services/autenticacion/users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userLoginOn:boolean = false;
  userAdministrador:boolean = false;
  userData?:User;
  constructor(private loginService: LoginService, private router: Router){}
  
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) =>{
        this.userLoginOn=userLoginOn;
      }
    });

    this.loginService.currentUserData.subscribe({
      next:(userData) => {
        this.userData=userData;
      }
    });

    this.loginService.currentUserAdministrador.subscribe({
      next:(userAdministrador) => {
        this.userAdministrador=userAdministrador;
      }
    })

    if (!this.userLoginOn) {
      this.router.navigate(['/iniciar-sesion']); 
    }
  }
 
}
