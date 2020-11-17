import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ExpeditionMenuItemComponent } from './components/expedition-menu-item/expedition-menu-item.component';
import { HomeComponent } from './pages/home/home.component';
import { SVK1Component } from './components/Slovensko1/svk1.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";


// Copied from the Paper-Kit 2 template
import { CommonModule } from '@angular/common';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { BAL1Component } from './components/balkan1/bal1.component';
import { NORComponent } from './components/norsko/nor.component';
import { ITFRSComponent } from './components/itfrs/itfrs.component';
import { IRLComponent } from './components/irsko/irl.component';
import { SVK2Component } from './components/slovensko2/svk2.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ExpeditionMenuItemComponent,
    SVK1Component,
    BAL1Component,
    NORComponent,
    ITFRSComponent,
    IRLComponent,
    SVK2Component,
    BlogComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}