import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { Project } from '../project';
import { NgClass } from "@angular/common";
@Component({
    selector: 'project-preview',
    imports: [MatCardModule, NgClass],
    templateUrl: './project-preview.html',
    styleUrl: './project-preview.scss',
})
export class ProjectPreview {
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() projectComponent?: typeof Project;

    hover: boolean = false;
    readonly dialog = inject(MatDialog);

    openProject(): void {
        if (this.projectComponent) {
            const dialogRef = this.dialog.open(this.projectComponent, {
                autoFocus: false  
            });
        }
    }

}
