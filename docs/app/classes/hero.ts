import { Stats } from "./stats";

export class Hero {
    id: number;
    heroName: string;
    jobClass: string;
    totalExp: number;
    stats: Stats;
    isInParty: boolean = false;

    constructor(id: number, heroName: string, jobClass: string, totalExp: number) {
        this.id = id;
        this.heroName = heroName;
        this.jobClass = jobClass;
        this.totalExp = totalExp;
        this.stats = new Stats(this.id, 1, this.totalExp);
        this.isInParty = false;
    }
}