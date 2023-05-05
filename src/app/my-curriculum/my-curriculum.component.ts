import { Component, OnInit } from '@angular/core';
import { CertificateService } from './services/certificate.service';
import { Certificate } from './interfaces/certificate';
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-my-curriculum',
    templateUrl: './my-curriculum.component.html',
    styleUrls: ['./my-curriculum.component.scss'],
})
export class MyCurriculumComponent implements OnInit {
    cakeCandles = faCakeCandles;

    certificates: Certificate[] = [];

    constructor(private certificateService: CertificateService) {}

    ngOnInit() {
        this.certificates = this.certificateService.getCertificates();
        this.loadPageMassage();
    }

    openPdf(pdfPath: string): void {
        window.open(pdfPath, '_blank');
    }

    loadPageMassage() {
        const statusMessage = document.getElementById('status-message');
        if (statusMessage) {
            statusMessage.textContent = 'Curriculo de Nathan Ferreira Borges carregado com sucesso!';
        }
    }
}
