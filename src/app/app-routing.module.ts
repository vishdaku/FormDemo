import {NgModule, Component} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {BuilderComponent} from './builder/builder.component';
import { FormTypeComponent } from './form-type/form-type.component';
import { FormListViewerComponent } from './form-list-viewer/form-list-viewer.component';
import { FormViewerComponent } from './form-viewer/form-viewer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    {path: 'form-type', component: FormTypeComponent},
    { path: 'builder', component: BuilderComponent},
    {path: 'form-list-viewer', component: FormListViewerComponent},
    {path: 'form-viewer/:formId', component: FormViewerComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [BuilderComponent, FormTypeComponent, FormListViewerComponent, FormViewerComponent,
    RegisterComponent, LoginComponent]