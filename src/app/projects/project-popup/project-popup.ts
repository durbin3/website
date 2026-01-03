import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'project-popup',
    imports: [ MatDialogModule, MatButtonModule ],
    templateUrl: './project-popup.html',
    styleUrl: './project-popup.scss'
})
export class ProjectPopup {
    private readonly dialogRef = inject(MatDialogRef);

    onClose() {
        this.dialogRef.close();
    }
}
