import { Component } from '@angular/core';
import { ProjectPopup } from "../project-popup/project-popup";
import { Project } from '../project';

@Component({
    selector: 'app-srgan',
    imports: [ProjectPopup],
    templateUrl: './srgan.html',
    styleUrl: './srgan.scss',
})
export class Srgan extends Project {}
