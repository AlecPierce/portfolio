import { Component } from '@angular/core';

@Component({
    selector: 'hero-class',
    template: `            <div class="bg-gray-700 p-4 mx-40 my-10 rounded-lg shadow-lg">
    <div class="rounded-lg p-10 bg-gray-500">
    <h2 class="text-2xl font-italic mb-4">Hero Name</h2>
    <p>Hero Description</p>
    <p>Hero Class</p>
    <p>Hero Level</p>
    <p>Hero Experience</p>
    <p>Hero Hit Points</p>
    <p>Hero Mana Points</p>
    </div>
</div>`,
standalone: true,
    styleUrls: []
})
export class HeroClassComponent {
    title = 'Hero Component';
}