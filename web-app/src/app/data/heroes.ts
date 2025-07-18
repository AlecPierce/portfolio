import { Hero } from "../classes/hero";
import { Stats } from "../classes/stats";


export const availableHeroes: Hero[] = [
    {
        id: 1, 
        heroName: 'Makoto', 
        description: 'The main character from Persona 3', 
        jobClass: 'Hero', 
        totalExp: 0,
        stats: new Stats(1, 1, 0),
        isInParty: false
    },
        {
        id: 2, 
        heroName: 'Yukari', 
        description: 'One of the heroines from Persona 3; She fights alongside the team with a bow and wind abilities', 
        jobClass: 'Archer', 
        totalExp: 0,
        stats: new Stats(1, 1, 0),
        isInParty: false
    },
        {
        id: 3, 
        heroName: 'Aigis', 
        description: 'One of the heroines from Persona 3; She is a robot built to exterminate shadows; She fights with her built-in weapons and physical attacks', 
        jobClass: 'Red Mage', 
        totalExp: 0,
        stats: new Stats(1, 1, 0),
        isInParty: false
    },
        {
        id: 4, 
        heroName: 'Fuuka', 
        description: 'One of the heroines from Persona 3; She guides the team through the Dark Hour with the help of her persona', 
        jobClass: 'Support', 
        totalExp: 0,
        stats: new Stats(1, 1, 0),
        isInParty: false
    },
        {
        id: 5, 
        heroName: 'Mitsuru', 
        description: 'One of the heroines from Persona 3; She leads the team until Makoto showed up', 
        jobClass: 'Blue Mage', 
        totalExp: 0,
        stats: new Stats(1, 1, 0),
        isInParty: false
    },
        {
        id: 6, 
        heroName: 'Junpei', 
        description: 'One of the heroes from Persona 3; He fights alongside the team with a baseball bat; Specializes in fire skills', 
        jobClass: 'Brawler', 
        totalExp: 0,
        stats: new Stats(1, 1, 0),
        isInParty: false
    },
        {
        id: 7, 
        heroName: 'Akihiko', 
        description: 'One of the heroes from Persona 3; He fights with his knuckles and electric abilities', 
        jobClass: 'Berserker', 
        totalExp: 0,
        stats: new Stats(1, 1, 0),
        isInParty: false
    },
        {
        id: 8, 
        heroName: 'Ken', 
        description: 'One of the heroes from Persona 3; Small lad that joins later on in the story; Uses electric/healing abilities', 
        jobClass: 'Lancer', 
        totalExp: 0,
        stats: new Stats(1, 1, 0),
        isInParty: false
    },
    {
        id: 9, 
        heroName: 'Koromaru', 
        description: 'One of the heroes from Persona 3; Friendly neighborhood dog who lost his owner and finds himself a new home; Uses dark/fire abilities and fights with a kunai', 
        jobClass: 'Red Mage', 
        totalExp: 0,
        stats: new Stats(1, 1, 0),
        isInParty: false
    },

]

export class HeroFactory {
    private makoto: Hero = new Hero(0,'', '', '',0);
    private yukari: Hero = new Hero(0,'', '', '',0);
    private aigis: Hero = new Hero(0,'', '', '',0);
    private fuuka: Hero = new Hero(0,'', '', '',0);
    private mitsuru: Hero = new Hero(0,'', '', '',0);
    private junpei: Hero = new Hero(0,'', '', '',0);
    private akihiko: Hero = new Hero(0,'', '', '',0);
    private ken: Hero = new Hero(0,'', '', '',0);
    private koromaru: Hero = new Hero(0,'', '', '',0);

    createHeroList(): Hero[] {
        this.makoto = availableHeroes[0];
        this.yukari = availableHeroes[1];
        this.aigis = availableHeroes[2];
        this.fuuka = availableHeroes[3];
        this.mitsuru = availableHeroes[4];
        this.junpei = availableHeroes[5];
        this.akihiko = availableHeroes[6];
        this.ken = availableHeroes[7];
        this.koromaru = availableHeroes[8];

        return [this.makoto, this.yukari, this.aigis, this.fuuka, this.mitsuru, this.junpei, this.akihiko, this.ken, this.koromaru];
    }
}