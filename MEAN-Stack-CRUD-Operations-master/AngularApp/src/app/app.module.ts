import { RouterModule } from '@angular/router';

import { DichVuComponent } from './DichVu/dichVu.component';
import { BSDichVuComponent } from './BSDichVu/BSDichVu.component';
import { BacSiComponent } from './BacSi/BacSi.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { LichKhamComponent } from './LichKham/lichKham.component';
// import { AppRoutingModule } from './app-routing.module'; // CLI imports 
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LichKhamComponent,
    BacSiComponent,
    BSDichVuComponent,
    DichVuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: BacSiComponent},
      {path: 'bacsi', component: BacSiComponent},
      {path: 'lichkham', component: LichKhamComponent},
      {path: 'dichvu', component: DichVuComponent},
      {path: 'bacsi-dichvu', component: BSDichVuComponent},
    ])
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
