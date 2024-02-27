import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { SectionAllComponent } from './section-all/section-all.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionCreateComponent } from './section-create/section-create.component';
import { SectionUpdateComponent } from './section-update/section-update.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SectionComponent} from "./section.component";


@NgModule({
  declarations: [
    SectionComponent,
    SectionAllComponent,
    SectionOneComponent,
    SectionCreateComponent,
    SectionUpdateComponent
  ],
  imports: [
    CommonModule,
    SectionRoutingModule,
    ReactiveFormsModule
  ]
})
export class SectionModule { }
