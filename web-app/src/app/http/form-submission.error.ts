import { HttpErrorResponse } from '@angular/common/http';
import { RealEstateRequest } from './real-estate.request';

export class FormSubmissionError {
  requestBody: RealEstateRequest;
  error: HttpErrorResponse | any;

  constructor(requestBody: RealEstateRequest, error: HttpErrorResponse | any) {
    (this.requestBody = requestBody), (this.error = error);
  }
}
