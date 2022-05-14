import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup

  constructor(
    private formBuilder : FormBuilder, 
    private router: Router,
    private toast : ToastrService) { 
    this.productoForm = this.formBuilder.group({
      producto: ["", Validators.required],
      categoria: ["", Validators.required],
      ubicacion: ["", Validators.required],
      precio: ["", Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarProducto(){
    console.log(this.productoForm.value);
    this.toast.success("Hola mundo","Toast Work");
    this.router.navigate(["/"]);
  }
}
