import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { ExpeditionMenuItemComponent } from './expedition-menu-item/expedition-menu-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ExpeditionPresentationComponent } from './expedition-presentation/expedition-presentation.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        NoopAnimationsModule
    ],
    declarations: [
        ComponentsComponent,
        ExpeditionMenuItemComponent,
        ExpeditionPresentationComponent
    ],
})
export class ComponentsModule { }
