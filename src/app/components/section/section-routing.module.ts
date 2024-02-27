import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SectionComponent} from "./section.component";
import {SectionOneComponent} from "./section-one/section-one.component";
import {SectionUpdateComponent} from "./section-update/section-update.component";
import {SectionCreateComponent} from "./section-create/section-create.component";
import {SectionAllComponent} from "./section-all/section-all.component";

const routes: Routes = [
  {
    path: '',
    component: SectionComponent,
    children: [
      {path: 'all', component: SectionAllComponent},
      {path: ':id', component: SectionOneComponent},
      {path: 'update/:id', component: SectionUpdateComponent},
      {path: 'create', component: SectionCreateComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
