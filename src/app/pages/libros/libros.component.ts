import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Usuario } from 'src/app/models/usuario';
import { ServicioService } from 'src/app/shared/servicio.service';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  public newBook: Libro[] 

  constructor(public libroService: ServicioService, private usuarioService: UsuarioService) {
    this.libroService.getAll(this.usuarioService.usuario.id_usuario).subscribe((result: any) => { this.newBook = result })
  }

  public searchLibro(id_libro: string = "") {
    if (id_libro == "") {
      this.libroService.getAll(this.usuarioService.usuario.id_usuario).subscribe((result: any) => { this.newBook = result })
    } else {
      this.libroService.getOne(this.usuarioService.usuario.id_usuario, Number(id_libro)).subscribe((result: any) => this.newBook = result)
    }
  }
  public deleteLibro(id_libro: number) {
    this.libroService.delete(id_libro).subscribe(() => {
    this.newBook = this.newBook.filter(libro => libro.id_libro != id_libro)
    })
  }
}










