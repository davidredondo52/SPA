import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService ,Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-buscaheroes',
  templateUrl: './buscaheroes.component.html'
})
export class BuscaHeroesComponent implements OnInit {

  heroes:Heroe[]=[];
  termino:string;
  constructor(private activatedRoute:ActivatedRoute,
  			  private _heroesService:HeroesService) { 
   
  
}

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params=>{
  		console.log(params['termino']);
  	this.heroes=this._heroesService.buscarHeroes(params['termino']);
  	this.termino=params['termino'];
  	console.log(this.heroes);
  });
  }

}
