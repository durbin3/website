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
        path: 'work-experience',
        label: 'Work Experience',
    },
];
