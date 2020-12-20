import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from '../../shared/services/user.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService, private userSer: UserService) { }

  ngOnInit(): void {
  }

  returnLogin() {
    this.router.navigate(['login'])
  }

  onRegister(form: any){
    console.log(form.value)
    this.auth.register({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(
      res => {
        alert(`Se registro a la empresa ${form.value.name}`);
        // TODO guardar el usuario en la base de datos
        this.userSer.addUser({
          id: res.localId,
          mail: res.email,
          name: form.value.name,
          number: form.value.number,
          direction: form.value.direction,
          type: 'Empresa'
        }).subscribe(
          dbres => {
            console.log("db success", dbres)
          },
          dberr => {
            console.log("db Error", dberr)
          }
        )

        // console.log(res)
        this.router.navigate(['login'])
      },
      err => {
        console.log("ERROR:", err);
      }
    );
  }

}
