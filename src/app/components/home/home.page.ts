import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  idiomaActual : string = "español";
  portugues : boolean = false;
  ingles : boolean = false;
  espanol : boolean = true;

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

  cerrarSesion(){
      this.auth.logout();
      this.router.navigate(['/login']);
  }

  cambiarIdioma(dato : number)
  {
    switch(dato)
    {
        case 1:
          this.espanol = true;
          this.ingles = false;
          this.portugues = false; 
          this.idiomaActual = "español";        
          break;
        case 2:
          this.ingles = true;
          this.espanol = false;
          this.portugues = false;
          this.idiomaActual = "ingles";
          break;
        case 3:
          this.portugues = true;
          this.espanol = false;
          this.ingles = false;
          this.idiomaActual = "portugues";
          break;
    }
  }

}
