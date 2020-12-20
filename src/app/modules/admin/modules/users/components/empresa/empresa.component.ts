import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
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
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct(): void {
    this.products = [];
    this.productGetSubs = this.userService.getUser().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
      this.displayedColumns = ["id", "mail", "type","update","delete"];
      this.dataSource = this.products.filter( s => s.tipo == this.state ) ;
    });
  }

  onDelete(id: any): void {
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
    /*this.userGetSubs ? this.userGetSubs.unsubscribe() : "";
    this.userDeleteSubs ? this.userDeleteSubs.unsubscribe() : "";*/
  }
}