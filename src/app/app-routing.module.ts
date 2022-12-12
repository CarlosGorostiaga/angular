import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlibroComponent } from './pages/addlibro/addlibro.component';
import { HomeComponent } from './pages/home/home.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { UpdatelibroComponent } from './pages/updatelibro/updatelibro.component';
import { LoginComponent } from './pages/login/login.component'

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "registro", component: RegistroComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "libros", component: LibrosComponent },
  { path: "addlibro", component: AddlibroComponent },
  { path: "updatelibro", component: UpdatelibroComponent },
  { path: "login", component: LoginComponent },
  { path: "", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


