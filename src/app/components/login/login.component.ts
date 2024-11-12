import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { EmpleadosService } from '../../services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public token!: string
  @ViewChild("cajaape") cajaApe!: ElementRef
  @ViewChild("cajacon") cajaCon!: ElementRef
  constructor(private _router: Router ,private _service: EmpleadosService){}

  
  iniciarSesion():void{
    let apellido = this.cajaApe.nativeElement.value;
    let contra = this.cajaCon.nativeElement.value
    let newUser = new User(apellido,contra)
    this._service.sendUser(newUser).subscribe(result=>{
      this.token = result.response
      console.log(this.token)
      if(this.token){
        console.log("token existente")
        localStorage.setItem('authToken',this.token)
        this._router.navigate(["/home"])
      }  
    })
  }
}
