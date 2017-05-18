
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';


import {HomeComponent} from './components/home/home.component';
import {HeroesComponent} from './components/heroes/heroes.component';

import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscaHeroesComponent } from './components/buscaheroes/buscaheroes.component';

const APPROUTES : Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'heroes', component: HeroesComponent},
	{path: 'heroe/:id', component: HeroeComponent},
	{path: 'buscaHeroe/:termino', component: BuscaHeroesComponent},
	{path:'**',pathMatch:'full',redirectTo:'home'}


] ;


export const APPROUTING =  RouterModule.forRoot(APPROUTES);



