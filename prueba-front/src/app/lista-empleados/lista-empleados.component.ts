//import  swal  from 'sweetalert2';
import { EmpleadoService } from './../empleado.service';
import { Empleado } from './../empleado';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {


  empleados:Empleado[];

  constructor(private empleadoServicio:EmpleadoService, private router:Router){}

  ngOnInit():void{
    this.obtenerEmpleados()
    }

    eliminarEmpleado(id:number){
      this.empleadoServicio.eliminarEmpleado(id).subscribe(dato=>{
        console.log(dato);
        this.obtenerEmpleados ();
      });
    }


    private obtenerEmpleados(){
      this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato => {
        this.empleados = dato;
      });
    }

    verDetallesDelEmpleado(id:number){
      this.router.navigate(['empleado-detalles',id]);
    }
}
