import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { pages } from './app.routes';
import { Theme } from './theme';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Nav],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    readonly theme = inject(Theme);
    protected readonly title = signal('Eric Durbin - Software Engineer');
    pages = pages;
}
