import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MediumProjectPreview } from '../../projects/medium-project-preview/medium-project-preview';
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-home-page',
    imports: [MediumProjectPreview, MatButtonModule, RouterLink],
    templateUrl: './home-page.html',
    styleUrl: './home-page.scss',
})
export class HomePage {
    projectList: { title: string; description: string, imgPath?: string, projectPath?: string }[] = [
        {
            title: 'Automatic Melody Reharmonization',
            description:
                'Using AI to listen to human-played melodies and add complex, but still musically correct, harmonies.',
            imgPath: 'harmonic_test.png',
            projectPath: '/projects/melody'
        },
        {
            title: 'Algorithmic Trading',
            description:
                'Utilizing Modern Portfolio Theory and data science methods to create a python based algorithmic trader.',
            imgPath: 'mpt_balance.png',
            projectPath: '/projects/algo_trading'
        },
        {
            title: 'Image Enhancing',
            description: 'Making AI models compete in real time to enhance the clarity of images.',
            imgPath: 'gan/gan_1.JPG',
            projectPath: '/projects/gan'
        },
    ];
}
