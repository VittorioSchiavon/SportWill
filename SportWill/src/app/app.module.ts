import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WillCardComponent } from './will-card/will-card.component';
import { WillDetailComponent } from './will-detail/will-detail.component';
import { FooterComponent } from './footer/footer.component';
import { AddWillComponent } from './add-will/add-will.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormElementComponent } from './form-element/form-element.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    WillCardComponent,
    WillDetailComponent,
    FooterComponent,
    AddWillComponent,
    SignInComponent,
    SignUpComponent,
    FormElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
