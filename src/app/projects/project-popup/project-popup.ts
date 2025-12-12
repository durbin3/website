import { Component, Input } from '@angular/core';
import { MatDialogModule } from "@angular/material/dialog";

@Component({
    selector: 'project-popup',
    imports: [ MatDialogModule ],
    templateUrl: './project-popup.html',
    styleUrl: './project-popup.scss'
})
export class ProjectPopup {
    @Input() projectTitle: string = '';    
}
