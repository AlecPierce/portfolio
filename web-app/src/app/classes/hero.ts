import { Stats } from "./stats";

export class Hero {
    id: number;
    name: string;
    jobClass: string;
    totalExp: number;
    stats: Stats;

    constructor(id: number, name: string, jobClass: string, totalExp: number) {
        this.id = id;
        this.name = name;
        this.jobClass = jobClass;
        this.totalExp = totalExp;
        this.stats = new Stats(this.id, 1, this.totalExp);
    }
}