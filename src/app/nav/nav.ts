import { Component, Input, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { PageInfo } from '../app.routes';

@Component({
    selector: 'app-nav',
    imports: [MatTabsModule, RouterModule],
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
