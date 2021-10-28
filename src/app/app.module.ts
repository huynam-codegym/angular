import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule} from '@angular/material';
import { NavbarComponent } from './nav-bar/navbar/navbar.component';
import { HomeComponent } from './trangchu/home/home.component';
import { FooterComponent } from './nav-bar/footer/footer.component';
import { FontSizeComponent } from './font_size/font-size/font-size.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormloginComponent } from './register/formlogin/formlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    FontSizeComponent,
    FormloginComponent
  ],
    imports: [
      MatInputModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
