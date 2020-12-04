import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { AuthService } from './shared/services/auth.service';
import { BusinessLayerService } from './shared/services/business-layer.service';
import { DataLayerService } from './shared/services/data-layer.service';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadChildren: () =>
      import("./modules/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "home",
    loadChildren: () =>
      import("./modules/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "auditHome",
    loadChildren: () =>
      import("./modules/audit-home/audit-home.module").then(m => m.AuditHomeModule)
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule
  ],
  providers: [AuthService,BusinessLayerService,DataLayerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
