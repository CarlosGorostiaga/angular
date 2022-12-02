import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ServicioService } from 'src/app/shared/servicio.service';

@Component({
  selector: 'app-addlibro',
  templateUrl: './addlibro.component.html',
  styleUrls: ['./addlibro.component.css']
})
export class AddlibroComponent {

  public libros: Libro[]

  constructor(public servicioService: ServicioService) {
    this.libros = [new Libro("TODO ARDE", "Dura", "Autor: Juan Gomez Jurado", 19.99, "../../../assets/img/todo-arde.jpg")]
  }

  nuevoLibro(nuevoTitulo: string, nuevoTipo: string, nuevoAutor: string, nuevoPrecio: number, nuevoPhoto: string, nuevoCodigo: number) {
    let nuevoLibro: Libro = new Libro(nuevoTitulo, nuevoTipo, nuevoAutor, nuevoPrecio, nuevoPhoto, nuevoCodigo);
    this.servicioService.add(nuevoLibro)
    console.log(nuevoTitulo);
    
  }

}

