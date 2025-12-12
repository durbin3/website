import { Routes } from '@angular/router';

export interface PageInfo {
    path: string;
    label: string;
}

export const routes: Routes = [
    {
        path: 'projects',
        title: 'Eric Durbin - Projects',
        loadComponent: () =>
            import('./pages/projects-page/projects-page').then((m) => m.ProjectsPage),
    },
    {
        path: 'challenges',
        title: 'Eric Durbin - Challenges',
        loadComponent: () =>
            import('./pages/challenges-page/challenges-page').then((m) => m.ChallengesPage),
    },
    {
        path: 'resume',
        title: 'Eric Durbin - Resume',
        loadComponent: () => import('./pages/resume-page/resume-page').then((m) => m.ResumePage),
    },
    {
        path: 'work-experience',
        title: 'Eric Durbin - Work Experience',
        loadComponent: () => import('./pages/work-page/work-page').then((m) => m.WorkPage),
    },
    {
        path: 'home',
        title: 'Eric Durbin',
        loadComponent: () => import('./pages/home-page/home-page').then((m) => m.HomePage)
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
];

export const pages: PageInfo[] = [
    {
        path: 'home',
        label: 'Home',
    },
    {
        path: 'projects',
        label: 'Projects',
    },
    {
        path: 'challenges',
        label: 'Challenges',
    },
    {
        path: 'resume',
        label: 'Resume',
    },
    {
        path: 'work-experience',
        label: 'Work Experience',
    },
];
