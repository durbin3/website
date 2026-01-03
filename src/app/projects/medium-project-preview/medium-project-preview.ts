import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Project } from '../project';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'medium-project-preview',
    imports: [MatCardModule],
    templateUrl: './medium-project-preview.html',
    styleUrl: './medium-project-preview.scss'
})
export class MediumProjectPreview {
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() imgPath!: string;
    @Input() projectComponent?: typeof Project;
    
    readonly dialog = inject(MatDialog);

    openProject(): void {
        if (this.projectComponent) {
            const dialogRef = this.dialog.open(this.projectComponent, {});
        }
    }
}
