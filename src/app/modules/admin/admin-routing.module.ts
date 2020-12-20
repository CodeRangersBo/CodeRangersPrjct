import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {path: "", redirectTo: "usuarios", pathMatch: "full" },
      {
        path: "usuarios",
        loadChildren: () =>
          import("./modules/users/users.module").then(
            m => m.UsersModule
          )
      },
      {
        path: "register",
        loadChildren: () =>
          import("./modules/register/register.module").then(
            m => m.RegisterModule
          )
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
