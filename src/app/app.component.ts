import { Component, OnInit } from '@angular/core';
import { GamesService } from './services/games.service';
import { catchError, concatMap, filter, map, mergeMap, shareReplay, switchMap, tap, toArray } from 'rxjs/operators';
import { PopulateCategoriesPipe } from './pipes/populate-category-pipe';
import { of, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PopulateCategoriesPipe]
})
export class AppComponent implements OnInit {

  
  games = [];
  categories = [];
  jackpots = [];
  constructor(private gameService: GamesService, private populateCategories: PopulateCategoriesPipe) {
  }

  ngOnInit(){
    this.getGames();
    this.getJackpots();
  }

  getGames(){
    this.gameService.getGames().subscribe(res => {
      this.games = res;
      this.createCategories();
    })
   }

   createCategories(){
    this.categories = this.populateCategories.transform(this.games);
   }

   getJackpots(){
    const myTimer$ = timer(0, 3000);
    myTimer$
    .pipe(
      switchMap(() => {
        return this.gameService.getJackpots()
          .pipe(catchError(err => {
            console.error(err);
            return of(undefined);
          }));
      }),
      filter(jackpots => jackpots !== undefined)
    )
    .subscribe((jackpots) => {
      this.jackpots = jackpots;
    });
   }
   
   hasBanner(a, b){
     if(a.includes('new') && b != 'new'){
      return "https://res.cloudinary.com/n3phylum/image/upload/v1611212257/new-ribbon.png"
     }else if(a.includes('top') && b != 'top'){
      return "https://res.cloudinary.com/n3phylum/image/upload/v1611212257/top-ribbon.png"
     }else{
       return undefined
     }
   }
}
