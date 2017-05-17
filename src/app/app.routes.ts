
import { RouterModule, Routes } from '@angular/router';


import {HomeComponent} from './components/home/home.component';



const APPROUTES : Routes = [
	{path: 'home', component: HomeComponent},
	{path:'**',pathMatch:'full',redirectTo:'home'}


] ;


export const APPROUTING =  RouterModule.forRoot(APPROUTES);



