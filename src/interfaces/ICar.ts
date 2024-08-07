export interface ICar {
  make: string;
  model: string;
  engineSize: string;
  fuel: string;
  year: number;
  mileage: number;
  auctionDateTime: string;
  startingBid: number;
  favourite: boolean;
  details: ICarDetails;
  imageCar: string;
  formatted: {
    startingBid: string
    auctionDateTime: string
  }
}

export interface ICarFormatted {
  specification: ICarSpecification;
  ownership: ICarOwnership;
  equipment: string[];
}

export interface ICarDetails {
  specification: ICarSpecification;
  ownership: ICarOwnership;
  equipment: string[];
}

export interface ICarSpecification {
  vehicleType: string;
  colour: string;
  fuel: string;
  transmission: string;
  numberOfDoors: number;
  co2Emissions: string;
  noxEmissions: number;
  numberOfKeys: number;
}

export interface ICarOwnership {
  logBook: string;
  numberOfOwners: number;
  dateOfRegistration: string;
}
