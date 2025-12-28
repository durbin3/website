import { Injectable, signal } from '@angular/core';

type ThemeOption = 'light' | 'dark';
@Injectable({
    providedIn: 'root'
})
export class Theme {
    themeSignal = signal<ThemeOption>('light');

    constructor() {
        document.body.className = this.getColorTheme();
    }
    setTheme(theme: ThemeOption) {
        this.themeSignal.set(theme);
        document.body.className = this.getColorTheme();
    }

    getColorTheme() {
        const t = this.themeSignal();
        return t + '-mode';
    }
}
