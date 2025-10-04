import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePage,
    },
    {
        path: 'projects',
        loadComponent: () =>
            import('./pages/projects-page/projects-page').then((m) => m.ProjectsPage),
    },
    {
        path: 'challenges',
        loadComponent: () =>
            import('./pages/challenges-page/challenges-page').then((m) => m.ChallengesPage),
    },
    {
        path: 'resume',
        loadComponent: () => import('./pages/resume-page/resume-page').then((m) => m.ResumePage),
    },
    {
        path: '',
        component: HomePage,
    },
];
