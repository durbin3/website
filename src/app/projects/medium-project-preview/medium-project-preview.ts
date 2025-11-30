import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'medium-project-preview',
    imports: [MatCardModule],
    templateUrl: './medium-project-preview.html',
    styleUrl: './medium-project-preview.scss'
})
export class MediumProjectPreview {
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() imgPath: string | null = null;
}
