import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatMenuModule,
  MatInputModule,
  MatGridListModule,
  MatListModule,
  MatSelectModule,
  MatDialogModule }
from '@angular/material';

import { AppComponent } from './app.component';
import { ExesandooosComponent } from './exesandooos/exesandooos.component';
import { UniqueInOrderComponent } from './unique-in-order/unique-in-order.component';
import { CreatePhoneNumberComponent } from './create-phone-number/create-phone-number.component';
import { SumArraysComponent } from './sum-arrays/sum-arrays.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReverseANumberComponent } from './reverse-anumber/reverse-anumber.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { FunctionalAdditionComponent } from './functional-addition/functional-addition.component';
import { HomeComponent } from './home/home.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ExesandooosComponent,
    UniqueInOrderComponent,
    CreatePhoneNumberComponent,
    SumArraysComponent,
    NavbarComponent,
    ReverseANumberComponent,
    MultiplyComponent,
    FunctionalAdditionComponent,
    HomeComponent,
    ChallengesComponent,
    NotFoundComponent
  ],
  imports: [
  BrowserModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    MatSelectModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'challenges', component: ChallengesComponent},
      { path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
