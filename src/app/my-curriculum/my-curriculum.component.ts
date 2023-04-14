import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-my-curriculum',
    templateUrl: './my-curriculum.component.html',
    styleUrls: ['./my-curriculum.component.css'],
})
export class MyCurriculumComponent implements OnInit {
    public imageUrl: any;

    constructor(private sanitizer: DomSanitizer) {}

    ngOnInit() {
        const imageSrc = 'assets/image.png'; // caminho da imagem na pasta de assets
        this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageSrc);
    }
}
