import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { BacSiComponent } from './BacSi/BacSi.component';
import { LichKhamComponent } from './LichKham/lichKham.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    BacSiComponent,
    LichKhamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
