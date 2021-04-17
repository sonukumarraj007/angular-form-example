import { ReactiveFormPatchValueComponent } from './component/reactive-form-patch-value/reactive-form-patch-value.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { TemplateDrivenFormPatchValueComponent } from './component/template-driven-form-patch-value/template-driven-form-patch-value.component';
import { TemplateDrivenFormComponent } from './component/template-driven-form/template-driven-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'emplate-driven-form' },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  { path: 'template-driven-form-patch-value', component: TemplateDrivenFormPatchValueComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'reactive-form-patch-value', component: ReactiveFormPatchValueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
