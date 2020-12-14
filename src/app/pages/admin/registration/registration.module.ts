import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { registrationRouting } from '../registration/registration.routing';
import { InstallfpoComponent } from '../registration/installfpo/installfpo.component';
import { RegisteredusersComponent } from '../registration/registeredusers/registeredusers.component';
import { MarketvendorsComponent } from '../registration/marketvendors/marketvendors.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    InstallfpoComponent,
    MarketvendorsComponent,
    RegisteredusersComponent
],
imports     : [
    RouterModule.forChild(registrationRouting),
    SharedModule,
    DataTablesModule,
    MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        CKEditorModule,
        MatSlideToggleModule,
        MatSelectModule
]
})
export class RegistrationModule { }