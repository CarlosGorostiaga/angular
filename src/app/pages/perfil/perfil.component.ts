import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  public newUser: Usuario

  constructor() {
    this.newUser = new Usuario(1, "Carlos", "Gorostiaga", "Carlos@gmail.com ", "../../../assets/img/personaje.png", "toki2796")
  }



  enviar2(nuevoNombre: string, nuevoApellido: string, nuevoCorreo: string , nuevoFoto:string) {
    console.log(this.newUser.nombre);
    console.log(this.newUser.apellidos);
    console.log(this.newUser.correo);
    console.log(this.newUser.url);
    
    this.newUser.nombre = nuevoNombre;
    this.newUser.apellidos = nuevoApellido;
    this.newUser.correo = nuevoCorreo;
    this.newUser.url=nuevoFoto
    
    console.log(this.newUser.nombre);
    console.log(this.newUser.apellidos);
    console.log(this.newUser.correo);
    console.log(this.newUser.url);
    
  }
}

