import { Pipe, PipeTransform } from "@angular/core";
import { Game } from "../models/game";
import { Jackpot } from "../models/jackpot";

@Pipe({
    name: "filterCategory"
})

export class filterCategoryPipe implements PipeTransform {
    transform(games: Game[], category: string, jackpots: Jackpot[]) {
        category.toLocaleLowerCase();

        if (!games) {
            return [];
        }
        if (!jackpots) {
            return [];
        }

        if (!category) {
            return games;
        }

        return games.filter((game) => {
            if (game.categories.includes('ball') || game.categories.includes('fun') || game.categories.includes('virtual')) {
                game.categories.splice(game[0], 1, 'other')
            }

            if (category === "jackpots") {
                return jackpots.find(jackpot => jackpot.game === game.id)
            }


            if (game.categories.includes(category)) {
                return game;
            }
        })
    }
}