import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {NotFoundComponent} from "./shared/not-found/not-found.component";

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'course', loadChildren: () => import('./components/course/course.module').then(m => m.CourseModule)},
  {path:'professor', loadChildren: () => import('./components/professor/professor.module').then(m => m.ProfessorModule)},
  {path:'section', loadChildren: () => import('./components/section/section.module').then(m => m.SectionModule)},
  {path:'student', loadChildren: () => import('./components/student/student.module').then(m => m.StudentModule)},
  {path:'404', component: NotFoundComponent},
  {path:'**', redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
