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
  MatTabsModule,
  MatCardModule,
  MatDialogModule } from '@angular/material';

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
import { ProjectsComponent } from './projects/projects.component';
import { AnagramComponent } from './anagram/anagram.component';
import { IqTestComponent } from './iq-test/iq-test.component';
import { MaterialModule } from './material.module';
import { AnagramModalComponent } from './anagram-modal/anagram-modal.component';
import { CreatePhoneNumberModalComponent } from './create-phone-number-modal/create-phone-number-modal.component';
// import { HorizontalTimelineComponent } from './horizontal-timeline/horizontal-timeline.component';

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
    NotFoundComponent,
    ProjectsComponent,
    AnagramComponent,
    IqTestComponent,
    AnagramModalComponent,
    CreatePhoneNumberModalComponent,
    // HorizontalTimelineComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
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
    MatTabsModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'challenges', component: ChallengesComponent},
      { path: 'projects', component: ProjectsComponent},
      { path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreatePhoneNumberModalComponent,
    AnagramModalComponent
    ]
})
export class AppModule { }
