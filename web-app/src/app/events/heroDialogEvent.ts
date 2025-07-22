import { Hero } from "../classes/hero";
import { HeroDialogAction as DialogAction } from "../enums/dialogActions.enum";

export class HeroDialogEvent {
    action: DialogAction;
    hero: Hero;

    constructor(action: DialogAction, hero: Hero) {
        this.action = action;
        this.hero = hero;
    }
}