import { Component, Input, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Route, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-nav',
    imports: [MatTabsModule, RouterModule],
    templateUrl: './nav.html',
    styleUrl: './nav.scss',
})
export class Nav implements OnInit {
    @Input() title: string = '';
    @Input() links!: Routes;

    activeLink!: Route;

    ngOnInit(): void {
        if (this.links?.length) {
            this.activeLink = this.links[0];
        }
    }
}
