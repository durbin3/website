import { Component } from '@angular/core';
import { ProjectPreview } from '../../projects/project-preview/project-preview';
import { Project } from '../../projects/project';
import { Srgan } from '../../projects/srgan/srgan';

@Component({
    selector: 'app-projects-page',
    imports: [ProjectPreview],
    templateUrl: './projects-page.html',
    styleUrl: './projects-page.scss',
})
export class ProjectsPage {
    projectList: { title: string; description: string, projectComponent?: typeof Project }[] = [
        {
            title: 'Harmonic Extension',
            description:
                'Using AI to listen to human-played melodies and add complex, but still musically correct, harmonies.',
        },
        {
            title: 'Algorithmic Trading',
            description:
                'Utilizing Modern Portfolio Theory and data science methods to create a python based algorithmic trader.',
        },
        {
            title: 'Image Enhancing',
            description: 'Making AI models compete in real time to enhance the clarity of images.',
            projectComponent: Srgan
        },
        {
            title: 'Collaborative Code Editor',
            description: 'Web-based real-time collaborative code editor with github-integration.',
        },
        {
            title: 'ML Training Optimization',
            description: 'Improving the both the training speed and model accuracy on Deep Learning models used in cross-drug interaction prediction.'
        },
        {
            title: 'Loan Repayment Prediction',
            description:
                'Estimating the probability of loan defaults using Gradient Boosted Decision Trees.',
        },
        {
            title: 'Fake Review Detection',
            description:
                'Using natural language processing techniques to decide whether online reviews were fake or genuine.',
        },
        {
            title: 'Midi File Parser',
            description: 'Custom MIDI parser with a UI to allow for modifications to MIDI files.',
        },
        {
            title: 'Music Generator',
            description:
                'Generating complex melodies and rhythms of various time signatures, keys, lengths, and chord progressions.',
        },
        {
            title: "Conway's Game of Life",
            description: 'Personal implementation of a classic theoretical evolution simulation',
        },
        {
            title: 'Discord Bot',
            description:
                'A persistent assistant to listen for references to key phrases and respond with relevant images.',
        },
        {
            title: 'Rock Paper Scissors',
            description: 'The first project I ever made, starting me on my technological journey',
        },
    ];
}
