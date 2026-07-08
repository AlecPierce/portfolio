export class RealEstate {
  name!: string;
  city!: string;
  address?: string;
  state!: string;
  zip_code!: string;

  constructor(name: string, city: string, state: string, zip: string, address?: string) {
    this.name = name;
    this.city = city;
    this.address = address;
    this.state = state;
    this.zip_code = zip;
  }
}
