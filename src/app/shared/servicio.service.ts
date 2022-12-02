import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private libros: Libro[]

  constructor() {

    this.libros =
      [
        new Libro("TODO ARDE", "Dura", "Juan Gomez Jurado", 20.99, "../../../assets/img/todo-arde.jpg", 1, 2),
        new Libro("HARRY POTTER", "Blanda", "J.K Rowling", 23.99, "../../../assets/img/harry potter.jpg", 2),
        new Libro("LUISIANA", "Dura", "Luz Gabás", 27.99, "../../../assets/img/luisiana.jpg", 3),
        new Libro("MUJERCITAS", "Blanda", "Luisa May Alcott", 18.99, "../../../assets/img/mujercitas.webp", 4),


      ]
  }

  // **********Getter y Setterr***********
  public setLibros(libros: Libro[]) {
    this.libros = libros;
    return libros;
  }

  public getLibros(): Libro[] {
    return this.libros
  }

  // ******************Acaban los Getter y Setter************

  //**************EMPIEZAN LOS METODOS *************/

  public getAll(): Libro[] {

    return this.libros

  }

  public getOne(id_libro: number): Libro {

    let searchLibro: Libro;
    for (let i = 0; i < this.libros.length; i++) {
      if (id_libro == this.libros[i].id_libro) {
        searchLibro = this.libros[i]
      }
    }
    return searchLibro
  }


  public add(libro: Libro): void {


    this.libros.push(libro)
    console.log(this.libros);


  }

  public edit(libro: Libro): boolean {
    let libroEncontrado = this.libros.find(item => item.id_libro == libro.id_libro)
    let numeroBook = libroEncontrado != undefined;

    if (numeroBook == true) {
      libroEncontrado.titulo = libro.titulo,
        libroEncontrado.tipoLibro = libro.tipoLibro,
        libroEncontrado.autor = libro.autor,
        libroEncontrado.precio = libro.precio,
        libroEncontrado.photo = libro.photo,
        libroEncontrado.id_usuario = libro.id_usuario

    } else {
    }
    return numeroBook
  }


  public delete(id_libro: number): boolean {
    let buscaID: number = this.libros.findIndex(element => element.id_libro == id_libro);
    let borrarOK: boolean = buscaID != -1;
    if (borrarOK) {
      this.libros.splice(buscaID, 1);
    } else {
      let message = "No existe ese libro"
      console.log(message);
    }
    return borrarOK
  }
}

