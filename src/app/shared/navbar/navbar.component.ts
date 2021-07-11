import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { findLastIndex } from 'lodash';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    private scrolledWindowHeight: boolean = false;

    @HostListener("window:scroll", []) onWindowScroll(event) {
        // do some stuff here when the window is scrolled
        this.scrolledWindowHeight = window.pageYOffset > window.innerHeight;
    }

    constructor(public location: Location, private element : ElementRef) {
        this.sidebarVisible = true;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }

    isHome() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isBlog() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/blog' ) {
            return true;
        }
        else {
            return false;
        }
    }
}
