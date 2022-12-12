import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {

  constructor(public usuarioService: UsuarioService, private router: Router) { }

  //añadir el metodo login
  public goSesion(correo: string, password: string) {
    let user = new Usuario(-1, "", "", correo, "", password)
    this.usuarioService.login(user).subscribe((result: any) => {
      console.log(result);
      
      if (result.error) {
        console.log("Usuario no encontrado");
      } else {
        this.usuarioService.usuario = new Usuario(result.id_usuario,result.nombre,result.apellidos,result.correo,result.foto,"")
        this.usuarioService.logueado = true;
        this.router.navigateByUrl("libros")
      }
    })
  }

}

















