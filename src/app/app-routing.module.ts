import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {BuilderComponent} from './builder/builder.component';
import { FormTypeComponent } from './form-type/form-type.component';


const routes : Routes = [
    { path:'builder', component: BuilderComponent},
    {path:'form-type',component:FormTypeComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [BuilderComponent,FormTypeComponent]