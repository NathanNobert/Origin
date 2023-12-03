import { Component } from '@angular/core';
import { MetaService } from '../../meta-tags/meta-tags.service';
import { MetaTagPage } from '../../meta-tags/meta-tags-config';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [],
    template: `
        <div class="max-w-5xl mx-auto my-40">
            <h1 class="text-9xl">Hello</h1>
            <h2 class="text-6xl mt-5 pl-1">
                I'm
                <span class="text-blue-500">Nathan Nobert </span>
                and I love
                <span class="text-green-500"> building. </span>
            </h2>
            <div class="divider"></div>
            <div class="mt-20">
                <h2 class="text-5xl">About me</h2>
                <p class="text-2xl mt-5">
                    I am a software engineer with a passion for building
                    beautiful, scalable, and performant web applications. I have
                    experience working with a wide range of technologies and
                    frameworks, and I am always looking to learn more.
                </p>
            </div>
            <div class="mt-10">
                <h2 class="text-5xl">My work</h2>
                <ul>
                    <li class="text-2xl mt-5">
                        <a class="text-blue-500" href="https://prosperse.com">
                            Prosperse
                        </a>
                        - A powerful, automated stock screener
                    </li>
                </ul>
            </div>
            <div class="mt-10">
                <h2 class="text-5xl">Skills</h2>
                <ul>
                    <li class="text-2xl mt-2">
                        <span class="text-neutral-500">Languages: </span>
                        Typescript, Javascript, Python, C#, Rust
                    </li>
                    <li class="text-2xl mt-5">
                        <span class="text-neutral-500">Frameworks: </span>
                        Angular, .NET
                    </li>
                    <li class="text-2xl mt-5">
                        <span class="text-neutral-500">Libraries: </span>
                        MediatR, Entity Framework, TailwindCSS,
                    </li>
                    <li class="text-2xl mt-5">
                        <span class="text-neutral-500">Databases: </span>
                        MySQL
                    </li>
                    <li class="text-2xl mt-5">
                        <span class="text-neutral-500">Cloud: </span>
                        AWS, Azure
                    </li>
                    <li class="text-2xl mt-5">
                        <span class="text-neutral-500">Tools: </span>
                        Git, Docker
                    </li>
                </ul>
            </div>
        </div>
    `,
})
export class LandingPageComponent {
    //**************************************************
    //* Constructor
    //**************************************************

    //--------------------------------------------------
    constructor(private readonly metaService: MetaService) {
        this.metaService.setTags(MetaTagPage.LandingPage);
    }
}
