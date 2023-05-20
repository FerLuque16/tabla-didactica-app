import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  idiomaActual : string = "espanol";
  portugues : boolean = false;
  ingles : boolean = false;
  espanol : boolean = true;

  colores : boolean = false;
  numeros : boolean = false;
  animales : boolean = true;

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

  cambiarTema(dato : number)
  {
    switch(dato)
    {
        case 1:
          this.animales = true;
          this.colores = false;
          this.numeros = false;
          break;
        case 2:
          this.numeros = true;
          this.animales = false;
          this.colores = false;
          break;
        case 3:
          this.colores = true;
          this.numeros = false;
          this.animales = false;
          break;
    }
  }

  cambiarIdioma(dato : number)
  {
    switch(dato)
    {
        case 1:
          this.espanol = true;
          this.ingles = false;
          this.portugues = false; 
          this.idiomaActual = "espanol";        
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

  reproducirSonido(dato : string)
  {
    let ruta : string = '../../../assets/sonidos/';
    let nombreArchivo : string = "";
    let audioNombre : string = "";

    audioNombre = dato + "_" + this.idiomaActual + ".mp3"; 
    nombreArchivo = ruta + audioNombre;

    console.log(nombreArchivo);

    this.reproducir(nombreArchivo);
           
  }

  reproducir(ruta : string)
  {
    let audio = new Audio(ruta);
    audio.play();   
  }

}
