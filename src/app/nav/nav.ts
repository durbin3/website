import { Component,Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { PageInfo } from '../app.routes';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'app-nav',
    imports: [MatTabsModule, RouterModule, MatButtonModule, MatListModule],
    templateUrl: './nav.html',
    styleUrl: './nav.scss',
})
export class Nav {
    @Input() title: string = '';
    @Input() pages!: PageInfo[];
}
