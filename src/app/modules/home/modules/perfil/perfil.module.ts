import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfilComponent } from "./perfil.component";
import { PerfilRoutingModule } from "./perfil-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  imports: [
    CommonModule, 
    PerfilRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [PerfilComponent]
})
export class PerfilModule {}
