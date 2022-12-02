import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ServicioService } from 'src/app/shared/servicio.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  public newBook: Libro[]


  constructor(public servicioService: ServicioService) {
    this.newBook = this.servicioService.getAll()
  }

  public searchLibro(campoID_Book:string){
    if(campoID_Book == ""){
      this.newBook = this.servicioService.getAll()
    }else{
      this.newBook = [this.servicioService.getOne(parseInt(campoID_Book))]
    }
  }

  public deleteLibro(campoID_Book:number){
    let bookExists = this.servicioService.delete(campoID_Book)
    if(!bookExists){
      console.log("Eso no existe");
      
    }
  }

  ngOnInit():void{}
}










