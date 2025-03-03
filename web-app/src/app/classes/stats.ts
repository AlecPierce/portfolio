export class Stats {
    private primary: PrimaryStats;
    private secondary: SecondaryStats;
    private totalExp: number;
    private level: number;
    private characterId: number;

    constructor(characterId: number, level: number = 1, totalExp: number = 0) {
        this.primary = new PrimaryStats();
        this.secondary = new SecondaryStats();
        this.totalExp = totalExp;
        this.level = level;
        this.characterId = characterId;
    }

    getStats() {
        return {
            primary: this.primary,
            secondary: this.secondary
        };
    }

    setStats(stats: Stats) {
        this.primary = stats.primary;
        this.secondary = stats.secondary;
    }

    getPrimaryStats() {
        return this.primary;
    }

    setPrimaryStats(primary: PrimaryStats) {
        this.primary = primary;
    }

    getSecondaryStats() {
        return this.secondary;
    }

    setSecondaryStats(secondary: SecondaryStats) {
        this.secondary = secondary;
    }

    getTotalExp() {
        return this.totalExp;
    }

    setTotalExp(totalExp: number) {
        this.totalExp = totalExp;
    }

    getLevel() {
        return this.level;
    }

    setLevel(level: number) {
        this.level = level;
    }

    getCharacterId() {
        return this.characterId;
    }

    setCharacterId(characterId: number) {
        this.characterId = characterId;
    }
}

class PrimaryStats {
    private hp: number;
    private mp: number;
    private atk: number;
    private def: number;
    private spatk: number;
    private spdef: number;

    constructor() {
        this.hp = 1;
        this.mp = 1;
        this.atk = 1;
        this.def = 1;
        this.spatk = 1;
        this.spdef = 1;
    }

    getStats() {
        return {
            hp: this.hp,
            mp: this.mp,
            atk: this.atk,
            def: this.def,
            spatk: this.spatk,
            spdef: this.spdef
        };
    }

    setStats(hp: number, mp: number, atk: number, def: number, spatk: number, spdef: number): void {
        this.hp = hp;
        this.mp = mp;
        this.atk = atk;
        this.def = def;
        this.spatk = spatk;
        this.spdef = spdef;
    }

    getHp() {
        return this.hp;
    }

    setHp(hp: number) {
        this.hp = hp;
    }

    getMp() {
        return this.mp;
    }

    setMp(mp: number) {
        this.mp = mp;
    }

    getAtk() {
        return this.atk;
    }

    setAtk(atk: number) {
        this.atk = atk;
    }

    getDef() {
        return this.def;
    }

    setDef(def: number) {
        this.def = def;
    }

    getSpatk() {
        return this.spatk;
    }

    setSpatk(spatk: number) {
        this.spatk = spatk;
    }

    getSpdef() {
        return this.spdef;
    }

    setSpdef(spdef: number) {
        this.spdef = spdef;
    }
}

class SecondaryStats {
    private mag: number;
    private dex: number;
    private luk: number;
    private spd: number;
    private hit: number;
    private eva: number;
    private res: number;

    constructor() {
        this.mag = 1;
        this.dex = 1;
        this.luk = 1;
        this.spd = 1;
        this.hit = 1;
        this.eva = 1;
        this.res = 1;
    }

    getStats() {
        return {
            mag: this.mag,
            dex: this.dex,
            luk: this.luk,
            spd: this.spd,
            hit: this.hit,
            eva: this.eva,
            res: this.res
        };
    }

    setStats(mag: number, dex: number, luk: number, spd: number, hit: number, eva: number, res: number): void {
        this.mag = mag;
        this.dex = dex;
        this.luk = luk;
        this.spd = spd;
        this.hit = hit;
        this.eva = eva;
        this.res = res;
    }

    getMag() {
        return this.mag;
    }

    setMag(mag: number) {
        this.mag = mag;
    }

    getDex() {
        return this.dex;
    }

    setDex(dex: number) {
        this.dex = dex;
    }

    getLuk() {
        return this.luk;
    }

    setLuk(luk: number) {
        this.luk = luk;
    }

    getSpd() {
        return this.spd;
    }

    setSpd(spd: number) {
        this.spd = spd;
    }

    getHit() {
        return this.hit;
    }

    setHit(hit: number) {
        this.hit = hit;
    }

    getEva() {
        return this.eva;
    }

    setEva(eva: number) {
        this.eva = eva;
    }

    getRes() {
        return this.res;
    }

    setRes(res: number) {
        this.res = res;
    }
}