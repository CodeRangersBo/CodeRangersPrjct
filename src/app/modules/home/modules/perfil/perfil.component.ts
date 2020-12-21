import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit, OnDestroy{

  formulario: FormGroup;
  getUserSub: Subscription;
  updateSub: Subscription;
  idTabla;

  constructor(private formBuilder: FormBuilder, private userSer: UserService, private auth: AuthService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nombre: "",
      email: "",
      direccion: "",
      numero: ""
    });
    this.loadData();
  }

  loadData() {
    this.getUserSub = this.userSer.getUsersById(this.auth.getUserId()).subscribe(
      res => {
        console.log(this.formulario.value)
        Object.entries(res).map((p:any) => {
          console.log(p)
          this.idTabla = p[0];
          this.formulario.patchValue({
            nombre: p[1].name,
            email: p[1].mail,
            direccion: p[1].direction,
            numero: p[1].number
          });
          
        });
      }
    );
  }

  updateProfile() {
    this.updateSub = this.userSer.updateUser(this.idTabla, {
      name: this.formulario.value.nombre,
      mail: this.formulario.value.email,
      direction: this.formulario.value.direccion,
      number: this.formulario.value.numero,
      id: this.auth.getUserId(),
      type: "Empresa"
    }).subscribe(
      res => {
        console.log("Update Success");
        this.loadData();
      }
    )
  }

  ngOnDestroy(){
    this.getUserSub ? this.getUserSub.unsubscribe() : "";
  }

}