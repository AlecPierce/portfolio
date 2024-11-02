import { Component } from '@angular/core';

@Component({
    selector: 'app-main-menu',
    standalone: true,
    template: `
        <div class="flex items-center justify-center h-screen">
            <div class="bg-gray-800 text-black p-6 rounded-lg shadow-lg">
                <h1 class="text-2xl font-bold mb-4">Hero Class Menu</h1>
                <!-- Add your menu items here -->
            </div>
        </div>
    `,
    styles: []
})
export class MainMenuComponent {}