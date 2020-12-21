import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/shared/services/auth.service";
import { UserService } from "src/app/shared/services/user.service";

export interface PeriodicElement {
  id:string;
  mail:string;
  tipo:string;
}

@Component({
  selector: "empresa",
  templateUrl: "./empresa.component.html",
  styleUrls: ["./empresa.component.scss"]
})
export class EmpresaComponent implements OnInit,  OnDestroy {
  @Input() state;

  products = [];
  productGetSubs: Subscription;
  userDeleteSubs: Subscription;
  displayedColumns: string[];
  dataSource;

  /**
  sendElement(e){
    this.b_Layer.currentElent = e;
    this.router.navigate(['/auditHome/audit-approve']);
  }
}
  */
  constructor(
    private userService: UserService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct(): void {
    this.products = [];
    this.productGetSubs = this.userService.getUser().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
      this.displayedColumns = ["id", "mail", "type", "delete"];
      this.dataSource = this.products.filter( s => s.type == this.state ) ;
    });
  }

  onDelete(user: any): void {

    this.userService.getUsersById(user.id).subscribe(
      res => {
        console.log(Object.entries(res).map( (p:any) => p[0]))
        this.userDeleteSubs = this.userService.updateUser(Object.entries(res).map( (p:any) => p[0]), {
          ...user,
          type: "None"
        }).subscribe(
          res => {
            this.loadProduct()
            console.log("Success", res)
          },
          err => {
            console.log("Error")
          }
        );
      }
    )


    

    // console.log(id)
    // this.auth.deleteUser({
    //   idToken: id
    // }).subscribe(
    //   res => {
    //     console.log("entro 1er res")
    //     this.userDeleteSubs = this.userService.deleteUser(id).subscribe(
    //       res => {
    //         console.log("RESPONSE: ", res);
    //         this.loadProduct();
    //       },
    //       err => {
    //         console.log("ERROR: ");
    //       }
    //     );
    //   },
    //   err => {

    //   }
    // );

    /*this.userDeleteSubs = this.userService.deleteUser(id).subscribe(
      res => {
        console.log("RESPONSE: ", res);
        this.loadProduct();
      },
      err => {
        console.log("ERROR: ");
      }
    );*/
  }

  ngOnDestroy() {
    /*this.userGetSubs ? this.userGetSubs.unsubscribe() : "";*/
    this.userDeleteSubs ? this.userDeleteSubs.unsubscribe() : "";
  }
}