import { Component } from '@angular/core';
import { ProjectPopup } from "../project-popup/project-popup";
import { Project } from '../project';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from "@angular/material/list";

@Component({
    selector: 'app-srgan',
    imports: [ProjectPopup, MatGridListModule, MatListModule],
    templateUrl: './srgan.html',
    styleUrl: './srgan.scss',
})
export class Srgan extends Project {}
