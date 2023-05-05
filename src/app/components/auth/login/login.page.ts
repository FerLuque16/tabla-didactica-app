import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:string = '';
  pass: string = '';
  screen: any = 'signin';
  formData: FormGroup;
  isLoading: boolean = false;

  constructor(private authService:AuthService,private fb:FormBuilder, private auth:AuthService, private router:Router) {
    this.formData = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
    });
   }

  ngOnInit() {
    
  }

  change(event: any){
    this.screen = event;
  }
  

  async login(){
    try {
      await this.authService.login(this.formData.value.email,this.formData.value.password);
      this.router.navigate(['/home']);

    } catch{
      console.log("Error");
    }
  }

  async register(){

  }

  presionado(event:any){
    console.log(event);
  }

  completarDatos(user:string,contraseña:string){
    this.formData.controls['email'].patchValue(user);
    this.formData.controls['password'].patchValue(contraseña);
    
  }

}
