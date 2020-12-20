import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
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
    private userSer: UserService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formularioForm = this.formBuilder.group({
      email: "",
      type: "",
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
    // console.log("Form group: ", this.formularioForm.value);

    this.auth.register({
      email: this.formularioForm.value.email,
      password: this.formularioForm.value.password,
      returnSecureToken: true
    }).subscribe(
      res => {
        this.userSer.addUser({
          id: res.localId,
          mail: res.email,
          type: this.formularioForm.value.type
        }).subscribe(
          dbres => {
            console.log("da success", dbres)
          },
          dberr => {
            console.log("db Error", dberr)
          }
        )

        // console.log(res)
        this.router.navigate(['admin'])
      },
      err => {
        console.log("ERROR:", err);
      }
    );

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
 