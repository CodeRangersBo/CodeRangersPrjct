import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formularioForm: FormGroup;
  userLayerSubs: Subscription;
  ckeditorContent;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.formularioForm = this.formBuilder.group({
      mail: "",
      tipo: "",
      password:""
      //mail: ["", [Validators.required]],
      //tipo: ["", [Validators.required]]
    });
  }

  onUpdate(){
  
  }

  /**
  onCreate() {
    console.log("Form group: ", this.formularioForm.value);
    this.b_LayerSubs = this.b_Layer
      .addProduct({
        ...this.formularioForm.value,
        ownerId: this.authService.getUserId(),
        estado: "En Espera",
        propuesta: this.ckeditorContent
      })
      .subscribe(
        res => {
          console.log("Resp: ", res);
          // this.historialSubs = this.b_Layer
          //   .addProduct({
          //     sucursal: this.formularioForm.value.direccion,
          //     negocio: this.formularioForm.value.negocio,
          //     estado: "En Espera",
          //     ownerId: this.authService.getUserId()
          //   })
          //   .subscribe(
          //     res => {
          //       console.log("Resp: ", res);
          //     },
          //     err => {
          //       console.log("Error de servidor");
          //     }
          //   );
          this.router.navigate(["/home/historial"]);
        },
        err => {
          console.log("Error de servidor");
        }
      );
  }
  ngOnDestroy() {
    this.b_LayerSubs ? this.b_LayerSubs.unsubscribe() : "";
  }
}
8
   */
  createUser(){
    console.log("Form group: ", this.formularioForm.value);
    /*this.userLayerSubs = this.userService.addUser({
      mail: this.formularioForm.value.mail,
      tipo: this.formularioForm.value.tipo,
      password: this.formularioForm.value.password
    }).subscribe(
      res => {
        console.log("Resp: ", res);
      },err => {
        console.log("Error de servidor");
      }
    );*/
  }
}
 