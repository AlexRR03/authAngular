import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { UserData } from '../../models/userdata';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})



export class HomeComponent implements OnInit {
    public data!: UserData
    constructor(private _service: EmpleadosService){}

    ngOnInit(): void {
      this._service.getUserProfile().subscribe(response=>{
        this.data = response
        console.log(this.data)
      })
    }
}
