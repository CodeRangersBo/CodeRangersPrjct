import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditHomeComponent } from './audit-home.component';

const routes: Routes = [
  {
    path: "",
    component: AuditHomeComponent,
    children: [
      { path: "", redirectTo: "audit-history", pathMatch: "full" },
      {
        path: "audit-history",
        loadChildren: () =>
          import("./modules/audit-history/audit-history.module").then(
            m => m.AuditHistoryModule
          )
      },
      {
        path: "audit-approve",
        loadChildren: () =>
          import("./modules/audit-approve/audit-approve.module").then(
            m => m.AuditApproveModule
          )
      },
      {
        path: "audit-profile",
        loadChildren: () =>
          import("./modules/audit-profile/audit-profile.module").then(
            m => m.AuditProfileModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditHomeRoutingModule { }