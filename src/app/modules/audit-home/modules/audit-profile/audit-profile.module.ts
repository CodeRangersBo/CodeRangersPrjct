import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditProfileRoutingModule } from './audit-profile-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuditProfileComponent } from './audit-profile.component';


@NgModule({
  declarations: [AuditProfileComponent],
  imports: [
    CommonModule,
    AuditProfileRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class AuditProfileModule { }
