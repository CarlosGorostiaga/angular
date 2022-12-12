import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Usuario } from 'src/app/models/usuario';
import { ServicioService } from 'src/app/shared/servicio.service';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-addlibro',
  templateUrl: './addlibro.component.html',
  styleUrls: ['./addlibro.component.css']
})
export class AddlibroComponent {

  public libros: Libro[]

  constructor(public servicioService: ServicioService, private usuarioService: UsuarioService) {
  }

  nuevoLibro(nuevoTitulo: string, nuevoTipo: string, nuevoAutor: string, nuevoPrecio: number, nuevoPhoto: string, nuevoCodigo: number) {
    let nuevoLibro: Libro = new Libro(nuevoTitulo, nuevoTipo, nuevoAutor, nuevoPrecio, nuevoPhoto, nuevoCodigo, this.usuarioService.usuario.id_usuario);
    this.servicioService.add(nuevoLibro).subscribe((data) => 
    {console.log(data)})
    // console.log(nuevoTitulo);

  }

}

