import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { RealEstateService } from '../../services/real-estate/real-estate.service';
import { AnalysisComponent } from '../analysis/analysis.component';
import { RealEstate } from '../../classes/realEstate';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'real-estate',
  imports: [ReactiveFormsModule, AnalysisComponent, RouterLink],
  templateUrl: './real-estate.component.html',
  styleUrl: './real-estate.component.css',
  standalone: true,
})
export class RealEstateComponent {
  isShown = signal(false);
  realEstateForm: FormGroup;
  responseText = new Observable<string>((val) => val.next(''));
  private _response = signal<string>('');
  readonly response = this._response.asReadonly();

  constructor(
    private fb: FormBuilder,
    private realEstateService$: RealEstateService,
  ) {
    this.realEstateForm = this.fb.group({
      name: [''],
      street: [''],
      city: [''],
      state: [''], // Example: 2-letter state code; maybe make validator?
      zip_code: [''], // Example: US zip code pattern; maybe make validator?
      address: [''], // optional
    });
  }

  ngAfterContentInit(): void {
    document.getElementById('submit')?.addEventListener('click', () => {
      if (!this.isShown()) {
        this.requestSubmit();
      }
    });
  }

  updateResponse(response: string) {
    this._response.set(response);
  }

  requestSubmit(): void {
    if (this.checkIfRequiredControlsAreNotEmpty()) {
      this.isShown.update((isShown) => !isShown);

      const realEstateToSubmit = new RealEstate(
        this.getRealEstateFormNameControlValue(),
        this.getRealEstateFormCityControlValue(),
        this.getRealEstateFormStateControlValue(),
        this.getRealEstateFormZipCodeControlValue(),
        this.getRealEstateFormAddressControlValue(),
      );

      const response =
        this.realEstateService$.postFormSubmission(realEstateToSubmit);
      response.subscribe((res) => {
        setTimeout(() => {
          this.isShown.update((isShown) => !isShown);
        }, 5000);
        this.updateResponse(res.text);
      });
    }
  }

  getRealEstateFormNameControl(): FormControl {
    return this.realEstateForm.controls['name'] as FormControl;
  }

  getRealEstateFormCityControl(): FormControl {
    return this.realEstateForm.controls['city'] as FormControl;
  }

  getRealEstateFormStateControl(): FormControl {
    return this.realEstateForm.controls['state'] as FormControl;
  }

  getRealEstateFormZipCodeControl(): FormControl {
    return this.realEstateForm.controls['zip_code'] as FormControl;
  }

  getRealEstateFormAddressControl(): FormControl {
    return this.realEstateForm.controls['address'] as FormControl;
  }

  getRealEstateFormNameControlValue(): string {
    return this.realEstateForm.controls['name'].value as string;
  }

  getRealEstateFormCityControlValue(): string {
    return this.realEstateForm.controls['city'].value as string;
  }

  getRealEstateFormStateControlValue(): string {
    return this.realEstateForm.controls['state'].value as string;
  }

  getRealEstateFormZipCodeControlValue(): string {
    return this.realEstateForm.controls['zip_code'].value as string;
  }

  getRealEstateFormAddressControlValue(): string {
    return this.realEstateForm.controls['address'].value as string;
  }

  checkIfRequiredControlsAreNotEmpty(): boolean {
    return this.checkIfNotEmpty([
      this.getRealEstateFormNameControlValue(),
      this.getRealEstateFormCityControlValue(),
      this.getRealEstateFormStateControlValue(),
      this.getRealEstateFormZipCodeControlValue(),
    ]);
  }

  checkIfNotEmpty(stringsToCheck: string[]): boolean {
    var result = false;
    stringsToCheck.forEach((stringToCheck) => {
      result = stringToCheck?.length > 0 ? true : false;
      if (!result) {
        return;
      }
    });
    return result;
  }
}
