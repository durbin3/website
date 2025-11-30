import { Component } from '@angular/core';
import { ProjectPreview } from '../../projects/project-preview/project-preview';
import { MatButtonModule } from '@angular/material/button';
import { MediumProjectPreview } from '../../projects/medium-project-preview/medium-project-preview';

@Component({
    selector: 'app-home-page',
    imports: [MediumProjectPreview, MatButtonModule],
    templateUrl: './home-page.html',
    styleUrl: './home-page.scss',
})
export class HomePage {
    projectList: { title: string; description: string, imgPath?: string }[] = [
        {
            title: 'Harmonic Extension',
            description:
                'Using AI to listen to human-played melodies and add complex, but still musically correct, harmonies.',
            imgPath: 'harmonic_test.png'
        },
        {
            title: 'Algorithmic Trading',
            description:
                'Utilizing Modern Portfolio Theory and data science methods to create a python based algorithmic trader.',
        },
        {
            title: 'Image Enhancing',
            description: 'Making AI models compete in real time to enhance the clarity of images.',
        },
    ];
}
