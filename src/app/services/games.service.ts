import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from '../models/game';
import { Jackpot } from '../models/jackpot';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _http: HttpClient ) { }
  
  getGames(): Observable<Game[]>{
    return this._http.get<Game[]>("http://stage.whgstage.com/front-end-test/games.php")
    .pipe(map((games: Game[]) => games));
  }
  getJackpots(): Observable<Jackpot[]>{
    return this._http.get<Jackpot[]>("http://stage.whgstage.com/front-end-test/jackpots.php")
    .pipe(map((jackpots: Jackpot[]) => jackpots));
  }
}
