import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = "http://localhost:3000/";
  public logueado: boolean = false;
  public usuario: Usuario

// ************con el constructor se inyecta el http y hace peticiones a la API************


  constructor(private http: HttpClient) { }

  // **********metodo para register**************

  public register(user: Usuario) {

    return this.http.post(this.url + "registro", user)
  }

  // **********metodo para login**************

  public login(user: Usuario) {

    return this.http.post(this.url + "login", user)
  }
}









