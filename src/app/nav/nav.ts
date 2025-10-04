import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-nav',
    imports: [],
    templateUrl: './nav.html',
    styleUrl: './nav.scss',
})
export class Nav {
    @Input() title: string = '';
    @Input() links!: any[];
}
