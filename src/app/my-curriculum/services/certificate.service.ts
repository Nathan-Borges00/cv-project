import { Injectable } from '@angular/core';
import { Certificate } from '../interfaces/certificate';

@Injectable({
    providedIn: 'root',
})
export class CertificateService {
    certificates: Certificate[] = [
        {
            name: 'Certificado conclusão teste nível de inglês',
            image: '../assets/imgs/certificadoTesteNivelInglesCIT.jpeg',
            pdfPath: '../assets/certifications/CertificadoInglesCIT.pdf',
        },
        {
            name: 'Certificado conclusão teste nível de inglês',
            image: '../assets/imgs/certificadoTesteNivelInglesCIT.jpeg',
            pdfPath: '../assets/certifications/CertificadoInglesCIT.pdf',
        },
        {
            name: 'Certificado conclusão teste nível de inglês',
            image: '../assets/imgs/certificadoTesteNivelInglesCIT.jpeg',
            pdfPath: '../assets/certifications/CertificadoInglesCIT.pdf',
        },
        {
            name: 'Certificado conclusão teste nível de inglês',
            image: '../assets/imgs/certificadoTesteNivelInglesCIT.jpeg',
            pdfPath: '../assets/certifications/CertificadoInglesCIT.pdf',
        },
        {
            name: 'Certificado conclusão teste nível de inglês',
            image: '../assets/imgs/certificadoTesteNivelInglesCIT.jpeg',
            pdfPath: '../assets/certifications/CertificadoInglesCIT.pdf',
        },
    ];

    constructor() {}

    getCertificates(): Certificate[] {
        return this.certificates;
    }
}
