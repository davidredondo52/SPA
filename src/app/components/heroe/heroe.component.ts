import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService,Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

   heroe:Heroe;
  constructor(private activatedRoute:ActivatedRoute,
  	          private _heroesServicce:HeroesService) { 
  	this.activatedRoute.params.subscribe(params=>{
  		console.log(params['id']);
  		this.heroe=this._heroesServicce.getHeroe(params['id']);
  	})
  
}
  

}
