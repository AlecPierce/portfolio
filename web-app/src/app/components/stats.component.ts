import { Component, Input } from '@angular/core';
import { Stats } from '../classes/stats';


@Component({
    selector: 'stats',
    template: `
        @if (!isFullStats) {
          <span>
            <p>Level: {{stats.getLevel()}}</p>
            <p>EXP: {{stats.getTotalExp()}}</p>
            <p>HP: {{stats.getPrimaryStats().getHp()}}</p>
            <p>MP: {{stats.getPrimaryStats().getMp()}}</p>
          </span>
        }
        @if (isFullStats) {
          <span>
            <p>HP: {{stats.getPrimaryStats().getHp()}}</p>
            <p>MP: {{stats.getPrimaryStats().getMp()}}</p>
            <p>Attack: {{stats.getPrimaryStats().getAtk()}}</p>
            <p>Defense: {{stats.getPrimaryStats().getDef()}}</p>
            <p>Special Attack: {{stats.getPrimaryStats().getSpatk()}}</p>
            <p>Special Defense: {{stats.getPrimaryStats().getSpdef()}}</p>
            <p>Magic: {{stats.getSecondaryStats().getMag()}}</p>
            <p>Dexterity: {{stats.getSecondaryStats().getDex()}}</p>
            <p>Luck: {{stats.getSecondaryStats().getLuk()}}</p>
            <p>Speed: {{stats.getSecondaryStats().getSpd()}}</p>
            <p>Accuracy: {{stats.getSecondaryStats().getHit()}}</p>
            <p>Evasion: {{stats.getSecondaryStats().getEva()}}</p>
            <p>Resistance: {{stats.getSecondaryStats().getRes()}}</p>
          </span>
        }
        `,
    standalone: true,
    styleUrls: [],
    imports: []
})
export class StatsComponent {
    @Input({ required: true })
    stats!: Stats;

    @Input({ required: false })
    isFullStats?: boolean;
}