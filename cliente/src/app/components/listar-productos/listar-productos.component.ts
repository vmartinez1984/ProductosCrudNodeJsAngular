import { Component, OnInit } from '@angular/core';
import { ServiceProductoService } from 'src/app/services/service-producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  constructor(private productoService: ServiceProductoService) { }

  ngOnInit(): void {
    this.productoService.obtener().subscribe(response =>{
      console.log(response)
    })
  }

}
