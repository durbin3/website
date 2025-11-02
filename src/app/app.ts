import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { pages } from './app.routes';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Nav],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    protected readonly title = signal('Eric Durbin - Software Engineer');
    pages = pages;
}
