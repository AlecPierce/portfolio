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
    const textIfAddress = `[[Approximation]]Year-to-date sales for ${realEstate.name} at ${realEstate.address} in ${realEstate.city}, ${realEstate.state} ${realEstate.zip_code} are approximated to be in the range of about $10 million to $15 million, with a central estimate around $12.5 million. This is a rough guess since location-level sales for a private company are not publicly disclosed.&&Explanation&&- Public data: There is no publicly available, precise sales figure for the ${realEstate.name} location in ${realEstate.city} (zip ${realEstate.zip_code}). - The estimate uses reasonable proxies rather than actual disclosed numbers.- Store size assumption: The calculation assumes a typical ${realEstate.name}-sized supermarket in the region, roughly in the 32,000–40,000 square-foot range. - Revenue per square foot: For grocery stores, annual revenue per square foot commonly falls in a broad range (roughly $500–$700 per sf per year in many markets). This yields a plausible annual store revenue in the mid-teens to low-twenties millions for a 35k sf store.- Year-to-date fraction: “Year-to-date” through about July is roughly 58–60% of the year, assuming a relatively even monthly distribution (not accounting for seasonality spikes or promotions).- Resulting rough math (illustrative):  - If store is ~35,000 sf and annual revenue is $500–$700 per sf:    - Annual revenue ≈ $17.5M – $24.5M    - YTD (≈ 58–60% of year) ≈ $10.1M – $14.7M  - Center estimate ≈ about $12.5M YTD, with a broader plausible range of ~$10M to ~$15M- Important caveats:  - Actual store size could be smaller or larger, shifting the estimate.  - Real-world revenue per sf varies by location, competition, promotions, supplier terms, and local demand.  - ${realEstate.name} exact ownership structure and reporting practices can affect how sales would be recorded and disclosed at a location level.- Additional factors to consider for refinement:  - Population and household density within a few miles of the ${realEstate.city} ${realEstate.name} (the more people and households, the larger potential shopper base).  - Local traffic patterns and competition (other grocers nearby, discount formats, and convenience stores).  - Local promotions, seasonal demand (holidays, football season, ${realEstate.state}-specific shopping trends).  - Economic conditions affecting discretionary spending and grocery spending.- If you can provide or allow me to estimate more specifics (store size in SF, approximate weekly foot traffic, or known nearby store performance), I can tighten the range further.`;

    const textNoAddress = `[[Approximation]]Year-to-date sales for ${realEstate.name} in ${realEstate.city}, ${realEstate.state} ${realEstate.zip_code} are approximated to be in the range of about $10 million to $15 million, with a central estimate around $12.5 million. This is a rough guess since location-level sales for a private company are not publicly disclosed.&&Explanation&&- Public data: There is no publicly available, precise sales figure for the ${realEstate.name} location in ${realEstate.city} (zip ${realEstate.zip_code}). - The estimate uses reasonable proxies rather than actual disclosed numbers.- Store size assumption: The calculation assumes a typical ${realEstate.name}-sized supermarket in the region, roughly in the 32,000–40,000 square-foot range. - Revenue per square foot: For grocery stores, annual revenue per square foot commonly falls in a broad range (roughly $500–$700 per sf per year in many markets). This yields a plausible annual store revenue in the mid-teens to low-twenties millions for a 35k sf store.- Year-to-date fraction: “Year-to-date” through about July is roughly 58–60% of the year, assuming a relatively even monthly distribution (not accounting for seasonality spikes or promotions).- Resulting rough math (illustrative):  - If store is ~35,000 sf and annual revenue is $500–$700 per sf:    - Annual revenue ≈ $17.5M – $24.5M    - YTD (≈ 58–60% of year) ≈ $10.1M – $14.7M  - Center estimate ≈ about $12.5M YTD, with a broader plausible range of ~$10M to ~$15M- Important caveats:  - Actual store size could be smaller or larger, shifting the estimate.  - Real-world revenue per sf varies by location, competition, promotions, supplier terms, and local demand.  - ${realEstate.name} exact ownership structure and reporting practices can affect how sales would be recorded and disclosed at a location level.- Additional factors to consider for refinement:  - Population and household density within a few miles of the ${realEstate.city} ${realEstate.name} (the more people and households, the larger potential shopper base).  - Local traffic patterns and competition (other grocers nearby, discount formats, and convenience stores).  - Local promotions, seasonal demand (holidays, football season, ${realEstate.state}-specific shopping trends).  - Economic conditions affecting discretionary spending and grocery spending.- If you can provide or allow me to estimate more specifics (store size in SF, approximate weekly foot traffic, or known nearby store performance), I can tighten the range further.`;

    const mockResponse = new RealEstateResponse(
      realEstate,
      HttpStatusCode.Accepted,
      realEstate.address ? textIfAddress : textNoAddress,
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
