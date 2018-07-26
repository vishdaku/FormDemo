import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {BuilderComponent} from './builder/builder.component';


const routes : Routes = [
    { path:'builder', component: BuilderComponent},


];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [BuilderComponent]