import { Routes } from '@angular/router';
import { BasePageComponent } from './features/base-page/base-page.component';

export const routes: Routes = [
    {
        path: '',
        component: BasePageComponent,
        title: 'Nathan Nobert',
        children: [
            {
                path: '',
                loadComponent: () =>
                    import(
                        './features/landing-page/landing-page.component'
                    ).then((m) => m.LandingPageComponent),
                title: 'Hello | Nathan Nobert',
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
