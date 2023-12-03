import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-base-page',
    standalone: true,
    imports: [RouterOutlet],
    template: `
        <div class="hide-scrollbar flex min-h-screen flex-col">
            <div class="flex-1 ">
                <router-outlet (activate)="onActivate()" />
            </div>
        </div>
    `,
    styles: ``,
})
export class BasePageComponent {
    //**************************************************
    //* Methods
    //**************************************************

    //--------------------------------------------------
    protected onActivate() {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant',
            });
        }
    }
}
