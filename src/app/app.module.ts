import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormioModule} from 'angular-formio';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import {AppRoutingModule,routingComponents} from './app-routing.module';
import { FormTypeComponent } from './form-type/form-type.component';



@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    routingComponents,
    FormTypeComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
