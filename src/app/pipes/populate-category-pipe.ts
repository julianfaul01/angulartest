import { Pipe, PipeTransform } from "@angular/core";
import { Game } from "../models/game";

@Pipe({
    name: "populateCategories"
})
export class PopulateCategoriesPipe implements PipeTransform {
    transform(games: Game[]){
        const categories = [];
        const exludedCategories = ["ball", "fun", "virtual"];
        games.map((game) => {
            game.categories.map(category => {
              if(categories.indexOf(category) === -1){
                if(exludedCategories.includes(category.toString())){
                  return;
                }
                categories.push(category)
              }
            })
          })
          categories.push("jackpots");
          categories.push("other");
          return categories
    }
}