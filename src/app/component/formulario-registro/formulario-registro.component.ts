import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent {
  constructor(public usuarioService: UsuarioService, private router: Router) { }

  public registro(nombre: string, apellidos: string, correo: string, foto: string, password: string, password2: string) {
    if (password === password2) {
      let newUser = new Usuario(-1, nombre, apellidos, correo, foto, password)
      this.usuarioService.register(newUser).subscribe((respuesta) => {
        this.router.navigateByUrl("login")
        console.log(respuesta);
      })
    } else {
      alert("Las contraseñas no coinciden")
    }
  }



}










