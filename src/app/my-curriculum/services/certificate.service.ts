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
            name: 'Certificado conclusão Introdução a linguagem JavaScript',
            image: '../assets/certifications/certificadoJavaScript.jpeg',
            pdfPath: '../assets/certifications/IntroduçãolinguagemJavaScript.pdf',
        },
        {
            name: 'Certificado conclusão introdução entity framework core',
            image: '../assets/certifications/Certificado_IntroduçãoaoEntityFrameworkCore_NathanFerreiraBorges.png',
            pdfPath: '../assets/certifications/Certificado_IntroduçãoaoEntityFrameworkCore_NathanFerreiraBorges.png',
        },
        {
            name: 'Certificado conclusão asp .net core',
            image: '../assets/certifications/Certificado_IniciandocomASP.NETCore_NathanFerreiraBorges.png',
            pdfPath: '../assets/certifications/Certificado_IniciandocomASP.NETCore_NathanFerreiraBorges.png',
        },
        {
            name: 'Certificado conclusão fundamentos arquitetura de software',
            image: '../assets/certifications/Certificado_FundamentosdeArquiteturadeSoftware_NathanFerreiraBorges.png',
            pdfPath: '../assets/certifications/Certificado_FundamentosdeArquiteturadeSoftware_NathanFerreiraBorges.png',
        },
    ];

    constructor() {}

    getCertificates(): Certificate[] {
        return this.certificates;
    }
}
