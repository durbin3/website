import { Component,Input, OnInit } from '@angular/core';
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
export class Nav implements OnInit {
    @Input() title: string = '';
    @Input() pages!: PageInfo[];

    activeLink!: PageInfo;

    ngOnInit(): void {
        if (this.pages?.length) {
            this.activeLink = this.pages[0];
        }
    }
}
