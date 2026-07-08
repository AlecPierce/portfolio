import {
  HttpClient,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RealEstateResponse } from '../../http/real-estate.response';
import { RealEstateRequest } from '../../http/real-estate.request';
import { RealEstate } from '../../classes/realEstate';

@Injectable({
  providedIn: 'root',
})
export class RealEstateService {
  private static _handleError(
    err: HttpErrorResponse | any,
  ): Observable<RealEstateResponse> {
    const realEstateResponse = new RealEstateResponse(
      new RealEstate('', '', '', '', ''),
      400,
      '',
      err.message || 'Error: Unable to complete request.',
    );
    const errorObservable = new Observable<RealEstateResponse>((realEstate) => {
      realEstate.next(realEstateResponse);
    });
    return errorObservable;
  }

  // POST form submission for real estate analysis
  postFormSubmission(
    realEstateToSubmit: RealEstate,
  ): Observable<RealEstateResponse> {
    const realEstate = realEstateToSubmit;
    const text =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    const mockResponse = new RealEstateResponse(
      realEstate,
      HttpStatusCode.Accepted,
      text,
    );
    try {
      var response: Observable<RealEstateResponse> = of(
        mockResponse,
      ) as Observable<RealEstateResponse>;

      return response;
    } catch (err) {
      return RealEstateService._handleError(err);
    }
  }
}
