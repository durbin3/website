import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from "@angular/material/dialog";

@Component({
    selector: 'project-popup',
    imports: [ MatDialogModule, MatCardModule ],
    templateUrl: './project-popup.html',
    styleUrl: './project-popup.scss'
})
export class ProjectPopup {
    @Input() projectTitle: string = '';    
}
