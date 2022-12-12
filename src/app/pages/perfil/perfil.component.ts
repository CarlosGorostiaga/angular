import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  public newUser: Usuario

  constructor( public usuarioService : UsuarioService) {
    this.newUser = usuarioService.usuario
  }



  enviar2(nuevoNombre: string, nuevoApellido: string, nuevoCorreo: string , nuevoFoto:string) {
    console.log(this.newUser.nombre);
    console.log(this.newUser.apellidos);
    console.log(this.newUser.correo);
    console.log(this.newUser.foto);
    
    this.newUser.nombre = nuevoNombre;
    this.newUser.apellidos = nuevoApellido;
    this.newUser.correo = nuevoCorreo;
    this.newUser.foto=nuevoFoto
    
    console.log(this.newUser.nombre);
    console.log(this.newUser.apellidos);
    console.log(this.newUser.correo);
    console.log(this.newUser.foto);
    
  }
}

