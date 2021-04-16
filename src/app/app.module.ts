import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './component/template-driven-form/template-driven-form.component';
import { TemplateDrivenFormPatchValueComponent } from './component/template-driven-form-patch-value/template-driven-form-patch-value.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    TemplateDrivenFormPatchValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
