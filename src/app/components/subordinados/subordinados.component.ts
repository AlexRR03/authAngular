import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { UserData } from '../../models/userdata';

@Component({
  selector: 'app-subordinados',
  templateUrl: './subordinados.component.html',
  styleUrl: './subordinados.component.css'
})
export class SubordinadosComponent implements OnInit{
  public subs!: Array<UserData>
  constructor(private _service:EmpleadosService){}
  ngOnInit(): void {
    this._service.getUserSubs().subscribe(response=>{
      this.subs =response
      console.log(this.subs)
    })
  }
}
