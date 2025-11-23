import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
    selector: 'project-preview',
    imports: [MatCardModule],
    templateUrl: './project-preview.html',
    styleUrl: './project-preview.scss',
})
export class ProjectPreview {
    @Input() title: string = '';
    @Input() description: string = '';
}
