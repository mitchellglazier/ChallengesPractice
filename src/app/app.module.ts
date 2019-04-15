import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ExesandooosComponent } from './exesandooos/exesandooos.component';
import { UniqueInOrderComponent } from './unique-in-order/unique-in-order.component';
import { CreatePhoneNumberComponent } from './create-phone-number/create-phone-number.component';
import { SumArraysComponent } from './sum-arrays/sum-arrays.component';

@NgModule({
  declarations: [
    AppComponent,
    ExesandooosComponent,
    UniqueInOrderComponent,
    CreatePhoneNumberComponent,
    SumArraysComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
