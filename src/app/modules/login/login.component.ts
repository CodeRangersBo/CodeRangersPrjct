import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/shared/services/user.service";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService, private usSer: UserService) {}

  ngOnInit() {
    if (this.authService.verifyLogged()) {
      this.router.navigate(["home"]);
    }
  }

  onLogin(form: any) {
    // console.log("Form", form.value);s
    this.authService
      .login({
        email: form.value.email,
        password: form.value.password,
        returnSecureToken: true
      })
      .subscribe(
        res => {
          //TODO
          this.usSer.getUsersById(res.localId).subscribe(
            dbres => {
              Object.entries(dbres).map((p:any) => {
                if (p[1].type == 'Admin') {
                  this.router.navigate(["admin"])
                } else if(p[1].type == 'Auditor'){
                  this.router.navigate(["auditHome"]);
                }else if (p[1].type == 'Empresa') {
                  this.router.navigate(["home"])
                } else {
                  console.log("Not a Type of Account")
                }
                
              })
              // if (dbres.type == 'Empresa'){
              //   this.router.navigate(["home"]);
              // }else if (dbres.type == 'Auditor'){
              //   this.router.navigate(["auditHome"]);
              // }
            },
            dberr => {
              console.log('db Error:', dberr)
            }
          );

          // if (form.value.email == "ministerio@bo.com") {
          //   console.log("LOGIN RESPONSE: ", res);
          //   this.router.navigate(["auditHome"]);
          // }else{
          //   this.router.navigate(["home"]);
          // }
        },
        err => {
          // console.log("LOGIN ERROR: ");
          alert("Usuario o Contraseña incorrecta")
        }
      );
  }

  onRegister() {
    this.router.navigate(['register']);
    // console.log("Arreglar");
  }
}
