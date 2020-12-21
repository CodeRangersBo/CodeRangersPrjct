import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { elementAt } from 'rxjs/operators';
import { BusinessLayerService } from 'src/app/shared/services/business-layer.service';
import { AuthService } from "../../../../../../shared/services/auth.service";


export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

@Component({
  selector: "app-espera",
  templateUrl: "./espera.component.html",
  styleUrls: ["./espera.component.css"]
})
export class EsperaComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "sucursal",
    "negocio",
    "estado",
    "detalles",
    "delete"
  ];

  espera = [];
  dataSource = [];
  esperaGetSubs: Subscription;
  esperaDeleteSubs: Subscription;
  @Input() status

  constructor(
    private authService: AuthService,
    private b_Layer: BusinessLayerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct(): void {
    this.espera = [];
    const userId = this.authService.getUserId();
    this.esperaGetSubs = this.b_Layer
      .getProductsById(userId)
      .subscribe(res => {
        Object.entries(res).map((p: any) => {
          if (p[1][1].estado == this.status) {
            this.espera.push({ id: p[1][0], ...p[1][1] });
          }
          this.dataSource = this.espera;
        });
      });
  }

  onDelete(id: any): void {
    this.esperaDeleteSubs = this.b_Layer.deleteProduct(id).subscribe(
      res => {
        console.log("RESPONSE: ", res);
        this.loadProduct();
      },
      err => {
        console.log("ERROR: ");
      }
    );
  }

  mandarElement(e: any) {
    console.log(e);
    this.authService.guardarForm(e);
    this.router.navigate(["/home/detalle"]);
  }

  ngOnDestroy() {
    this.esperaGetSubs ? this.esperaGetSubs.unsubscribe() : "";
    //this.esperaDeleteSubs ? this.esperaDeleteSubs.unsubscribe() : "";
  }
}
