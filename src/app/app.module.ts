import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";


import { FormioModule} from 'angular-formio';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import {AppRoutingModule,routingComponents} from './app-routing.module';
import { FormTypeComponent } from './form-type/form-type.component';
import { FormViewerComponent } from './form-viewer/form-viewer.component';
import { FormListViewerComponent } from './form-list-viewer/form-list-viewer.component';

import { LocalStorageModule } from '@ngx-pwa/local-storage';


@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    routingComponents,
    FormTypeComponent,
    FormViewerComponent,
    FormListViewerComponent,
    
    

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormioModule,
    HttpClientModule, 
    FormsModule ,
    LocalStorageModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
