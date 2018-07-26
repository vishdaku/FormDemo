import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormioModule} from 'angular-formio';

import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import {AppRoutingModule,routingComponents} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    routingComponents,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
