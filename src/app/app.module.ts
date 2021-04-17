import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './component/template-driven-form/template-driven-form.component';
import { TemplateDrivenFormPatchValueComponent } from './component/template-driven-form-patch-value/template-driven-form-patch-value.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { ReactiveFormPatchValueComponent } from './component/reactive-form-patch-value/reactive-form-patch-value.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    TemplateDrivenFormPatchValueComponent,
    ReactiveFormComponent,
    ReactiveFormPatchValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
