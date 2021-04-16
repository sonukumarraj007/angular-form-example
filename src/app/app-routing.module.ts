import { TemplateDrivenFormPatchValueComponent } from './component/template-driven-form-patch-value/template-driven-form-patch-value.component';
import { TemplateDrivenFormComponent } from './component/template-driven-form/template-driven-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'emplate-driven-form' },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  { path: 'template-driven-form-patch-value', component: TemplateDrivenFormPatchValueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
