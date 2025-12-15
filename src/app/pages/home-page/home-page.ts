import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MediumProjectPreview } from '../../projects/medium-project-preview/medium-project-preview';
import { RouterLink } from "@angular/router";
import { Project } from '../../projects/project';
import { Srgan } from '../../projects/srgan/srgan';
import { MatCardModule } from "@angular/material/card";

@Component({
    selector: 'app-home-page',
    imports: [MediumProjectPreview, MatButtonModule, RouterLink, MatCardModule],
    templateUrl: './home-page.html',
    styleUrl: './home-page.scss',
})
export class HomePage {
    projectList: { title: string; description: string, imgPath: string, projectComponent?: typeof Project }[] = [
        {
            title: 'Automatic Melody Reharmonization',
            description:
                'Using AI to listen to human-played melodies and add complex, but still musically correct, harmonies.',
            imgPath: 'harmonic_test.png',
        },
        {
            title: 'Algorithmic Trading',
            description:
                'Utilizing Modern Portfolio Theory and data science methods to create a python based algorithmic trader.',
            imgPath: 'mpt_balance.png',
            
        },
        {
            title: 'Image Enhancing',
            description: 'Making AI models compete in real time to enhance the clarity of images.',
            imgPath: 'gan/gan_1.JPG',
            projectComponent: Srgan
        },
    ];
}
