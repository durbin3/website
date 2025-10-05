import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomePage,
    },
    {
        path: 'projects',
        title: 'Projects',
        loadComponent: () =>
            import('./pages/projects-page/projects-page').then((m) => m.ProjectsPage),
    },
    {
        path: 'challenges',
        title: 'Challenges',
        loadComponent: () =>
            import('./pages/challenges-page/challenges-page').then((m) => m.ChallengesPage),
    },
    {
        path: 'resume',
        title: 'Resume',
        loadComponent: () => import('./pages/resume-page/resume-page').then((m) => m.ResumePage),
    },
    {
        path: 'work-experience',
        title: 'Work Experience',
        loadComponent: () => import('./pages/work-page/work-page').then((m) => m.WorkPage),
    },
];
