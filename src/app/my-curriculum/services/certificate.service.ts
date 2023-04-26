import { Injectable } from '@angular/core';
import { Certificate } from '../interfaces/certificate';

@Injectable({
    providedIn: 'root',
})
export class CertificateService {
    certificates: Certificate[] = [
        {
            name: 'UNIP college diploma.',
            image: '../assets/certifications/diplomaFaculdadeUnip.jpeg',
            pdfPath: '../assets/certifications/DiplomaFaculdade.pdf',
        },
        {
            name: 'Certificate of completion of English proficiency test.',
            image: '../assets/certifications/certificadoTesteNivelInglesCIT.jpeg',
            pdfPath: '../assets/certifications/CertificadoInglesCIT.pdf',
        },
        {
            name: 'Certificate of completion of Introduction to JavaScript Language course.',
            image: '../assets/certifications/certificadoJavaScript.jpeg',
            pdfPath: '../assets/certifications/IntroduçãolinguagemJavaScript.pdf',
        },
        {
            name: 'Certificate of completion of Introduction to Entity Framework Core course.',
            image: '../assets/certifications/Certificado_IntroduçãoaoEntityFrameworkCore_NathanFerreiraBorges.png',
            pdfPath: '../assets/certifications/Certificado_IntroduçãoaoEntityFrameworkCore_NathanFerreiraBorges.png',
        },
        {
            name: 'Certificate of completion of ASP.NET Core course.',
            image: '../assets/certifications/Certificado_IniciandocomASP.NETCore_NathanFerreiraBorges.png',
            pdfPath: '../assets/certifications/Certificado_IniciandocomASP.NETCore_NathanFerreiraBorges.png',
        },
        {
            name: 'Certificate of completion of Fundamentals of Software Architecture course.',
            image: '../assets/certifications/Certificado_FundamentosdeArquiteturadeSoftware_NathanFerreiraBorges.png',
            pdfPath: '../assets/certifications/Certificado_FundamentosdeArquiteturadeSoftware_NathanFerreiraBorges.png',
        },
    ];

    constructor() {}

    getCertificates(): Certificate[] {
        return this.certificates;
    }
}
