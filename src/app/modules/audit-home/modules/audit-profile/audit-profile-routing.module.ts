import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditProfileComponent } from './audit-profile.component';

const routes: Routes = [{ path: "", component: AuditProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditProfileRoutingModule { }
