import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ServicioService } from 'src/app/shared/servicio.service';

@Component({
  selector: 'app-updatelibro',
  templateUrl: './updatelibro.component.html',
  styleUrls: ['./updatelibro.component.css']
})
export class UpdatelibroComponent {
  public libros: Libro[]

  constructor(public servicioService: ServicioService) {}


  public updateLibro(nuevoTitulo: string, nuevoTipo: string, nuevoAutor: string, nuevoPrecio: number, nuevoPhoto: string, nuevoCodigo: number) {
    let nuevoLibro: Libro = new Libro(nuevoTitulo, nuevoTipo, nuevoAutor, nuevoPrecio, nuevoPhoto, nuevoCodigo);
    this.servicioService.edit(nuevoLibro)
    console.log(nuevoTitulo);
    
  }

}
