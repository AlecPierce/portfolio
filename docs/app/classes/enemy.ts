import { Stats } from "./stats";

export class Enemy {
    id: number;
    name: string;
    enemyClass: string;
    stats: Stats;
    expEarned: number;
    goldEarned: number;

    constructor(id: number, name: string, enemyClass: string, expEarned: number, goldEarned: number) {
        this.id = id;
        this.name = name;
        this.enemyClass = enemyClass;
        this.expEarned = expEarned;
        this.goldEarned = goldEarned;
        this.stats = new Stats(this.id, 1, 0);
    }
}