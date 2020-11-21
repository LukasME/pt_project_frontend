import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ExpeditionPreviewComponent } from './components/expedition-preview/expedition-preview.component';
import { HomeComponent } from './pages/home/home.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


// Copied from the Paper-Kit 2 template
import { CommonModule } from '@angular/common';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { SafeHtmlPipe } from './shared/pipes/safe-html.pipe';
import { ExpeditionComponent } from './pages/expedition/expedition.component';
import { HtmlContentComponent } from './components/html-content/html-content.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ExpeditionPreviewComponent,
    BlogComponent,
    AboutComponent,
    SafeHtmlPipe,
    ExpeditionComponent,
    HtmlContentComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}