import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit() {
  }

  volverSinCerrarSesion(){
    this.router.navigate(['/login']);

  }
  volverYCerrarSesion(){
    this.auth.logout();
    this.router.navigate(['/login']);

  }

}
