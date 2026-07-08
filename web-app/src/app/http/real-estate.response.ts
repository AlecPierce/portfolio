import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { RealEstate } from '../classes/realEstate';

export class RealEstateResponse {
  realEstate!: RealEstate;
  status!: HttpStatusCode;
  text!: string;
  error?: HttpErrorResponse;

  constructor(body: RealEstate, status: HttpStatusCode, text: string, error?: HttpErrorResponse) {
    this.realEstate = body;
    this.status = status;
    this.text = text;
    this.error = error;
  }
}
