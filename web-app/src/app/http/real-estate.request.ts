import { RealEstate } from '../classes/realEstate';

export class RealEstateRequest {
  realEstate!: RealEstate;

  constructor(realEstate: RealEstate) {
    this.realEstate = realEstate;
  }
}
