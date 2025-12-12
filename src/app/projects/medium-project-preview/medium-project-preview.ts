import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from "@angular/router";

@Component({
    selector: 'medium-project-preview',
    imports: [MatCardModule, RouterLink],
    templateUrl: './medium-project-preview.html',
    styleUrl: './medium-project-preview.scss'
})
export class MediumProjectPreview {
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() imgPath?: string;
    @Input() projectPath?: string = '';
}
