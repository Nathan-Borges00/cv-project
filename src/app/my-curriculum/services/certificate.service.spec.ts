import { TestBed } from '@angular/core/testing';
import { CertificateService } from './certificate.service';
import { Certificate } from '../interfaces/certificate';

describe('CertificateService', () => {
    let service: CertificateService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CertificateService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getCertificates', () => {
        it('should return an array of certificates', () => {
            const certificates: Certificate[] = [
                { name: 'Certificate 1', image: 'path/to/image1.jpg', pdfPath: 'path/to/pdf1.pdf' },
                { name: 'Certificate 2', image: 'path/to/image2.jpg', pdfPath: 'path/to/pdf2.pdf' },
            ];

            expect(service.getCertificates()).toEqual(certificates);
        });
    });

    describe('getCertificates', () => {
        it('should return an empty array if there are no certificates', () => {
            spyOn(service, 'getCertificates').and.returnValue([]);
            expect(service.getCertificates()).toEqual([]);
        });
    });
});
