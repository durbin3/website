import { Component,inject,Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { PageInfo } from '../app.routes';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Theme } from '../theme';

@Component({
    selector: 'app-nav',
    imports: [MatTabsModule, RouterModule, MatButtonModule, MatListModule, MatIconModule],
    templateUrl: './nav.html',
    styleUrl: './nav.scss',
})
export class Nav {
    @Input() title: string = '';
    @Input() pages!: PageInfo[];

    private readonly theme = inject(Theme);
    lightMode = true;

    toggleLightMode() {
        this.lightMode = !this.lightMode;
        const colorScheme = this.lightMode ? 'light' : 'dark';
        this.theme.setTheme(colorScheme);
    }
}
