/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCurriculumComponent } from './my-curriculum.component';
import { CertificateService } from './services/certificate.service';
import { Certificate } from './interfaces/certificate';

describe('MyCurriculumComponent', () => {
    let component: MyCurriculumComponent;
    let fixture: ComponentFixture<MyCurriculumComponent>;
    let certificateService: CertificateService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MyCurriculumComponent],
            providers: [CertificateService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MyCurriculumComponent);
        component = fixture.componentInstance;
        certificateService = TestBed.inject(CertificateService);
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should retrieve the certificates', () => {
        const certificates: Certificate[] = [{ name: 'teste', image: 'teste.png', pdfPath: '/src/teste' }];
        spyOn(certificateService, 'getCertificates').and.returnValue(certificates);
        component.ngOnInit();
        expect(component.certificates).toEqual(certificates);
    });

    it('should open a PDF in a new tab', () => {
        spyOn(window, 'open');
        component.openPdf('http://example.com/certificate.pdf');
        expect(window.open).toHaveBeenCalledWith('http://example.com/certificate.pdf', '_blank');
    });

    it('should display a page load message', () => {
        const element = document.createElement('div');
        element.setAttribute('id', 'status-message');
        spyOn(document, 'getElementById').and.returnValue(element);
        component.loadPageMassage();
        expect(element.textContent).toEqual('Curriculo de Nathan Ferreira Borges carregado com sucesso!');
    });
});
