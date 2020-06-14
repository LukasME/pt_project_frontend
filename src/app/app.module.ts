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
import { ExpeditionPresentationComponent } from './components/expedition-presentation/expedition-presentation.component';
import { HomeComponent } from './pages/home/home.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Copied from the Paper-Kit 2 template
import { CommonModule } from '@angular/common';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ExpeditionMenuItemComponent,
    ExpeditionPresentationComponent,
    BlogComponent,
    AboutComponent
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
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}