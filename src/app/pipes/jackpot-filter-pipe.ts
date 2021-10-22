import { Pipe, PipeTransform } from "@angular/core";
import { Jackpot } from "../models/jackpot";

@Pipe({
    name: 'filterjackpot'
})

export class JackpotFilterPipe implements PipeTransform {
    transform(jackpots: Jackpot[], gameID: string) {
        if (!jackpots) {
            return [];
        }

        if (!gameID) {
            return jackpots;
        }

        return jackpots.filter(jackpot => jackpot.game === gameID)


    }
}