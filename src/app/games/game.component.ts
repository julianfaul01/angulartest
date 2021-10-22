import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../models/game'
import { Jackpot } from '../models/jackpot';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input()
  bannerSrc:string;

  @Input()
  game: Game

  @Input()
  category: String

  @Input()
  jackpots: Jackpot[]
  

  constructor() { }

  ngOnInit(): void {
  }

}
