import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';

export interface PageInfo {
    path: string,
    label: string
} 

export const routes: Routes = [
    {
        path: '',
        title: 'Eric Durbin',
        component: HomePage,
    },
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
];

export const pages: PageInfo[] = [
    {
        path: '',
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
]
