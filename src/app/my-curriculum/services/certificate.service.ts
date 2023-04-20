import { Injectable } from '@angular/core';
import { Certificate } from '../interfaces/certificate';

@Injectable({
    providedIn: 'root',
})
export class CertificateService {
    certificates: Certificate[] = [
        {
            name: 'Diploma faculdade UNIP',
            image: '../assets/certifications/diplomaFaculdadeUnip.jpeg',
            pdfPath: '../assets/certifications/DiplomaFaculdade.pdf',
        },
        {
            name: 'Certificado conclusão teste nível de inglês',
            image: '../assets/certifications/certificadoTesteNivelInglesCIT.jpeg',
            pdfPath: '../assets/certifications/CertificadoInglesCIT.pdf',
        },
        {
            name: 'Certificado Introdução a linguagem JavaScript',
            image: '../assets/certifications/certificadoJavaScript.jpeg',
            pdfPath: '../assets/certifications/IntroduçãolinguagemJavaScript.pdf',
        },
        {
            name: 'Certificado conclusão teste nível de inglês',
            image: '../assets/certifications/',
            pdfPath: '../assets/certifications/',
        },
        {
            name: 'Certificado conclusão teste nível de inglês',
            image: '../assets/certifications/',
            pdfPath: '../assets/certifications/',
        },
    ];

    constructor() {}

    getCertificates(): Certificate[] {
        return this.certificates;
    }
}
