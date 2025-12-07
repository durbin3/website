import { Injectable, signal } from '@angular/core';

type ThemeOption = 'light' | 'dark';
@Injectable({
    providedIn: 'root'
})
export class Theme {
    themeSignal = signal<ThemeOption>('light');

    setTheme(theme: ThemeOption) {
        console.log('setting theme: ', theme)
        this.themeSignal.set(theme);
    }

    getTheme() {
        return this.themeSignal();
    }
}
