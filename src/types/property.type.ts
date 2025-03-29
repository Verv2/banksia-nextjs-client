interface IAvailability {
  available_from: string;
  minimum_term: string;
  maximum_term: string;
}

interface ILocation {
  area: string;
  transport_links: string;
}

interface IContractTerms {
  deposit?: string;
  minimum_stay: string;
  students_recent_graduates: string;
  self_employed_non_working?: string;
  employed?: string;
}

interface IAmenities {
  furnishings: string;
  parking: boolean;
  garage: boolean;
  garden_patio: boolean;
  balcony_roof_terrace: boolean;
  disabled_access: boolean;
  living_room: string;
  broadband_included: boolean;
}

interface IHouseHold {
  total_flatmates: number;
  total_rooms: number;
  smoker: boolean;
  any_pets: boolean;
  occupation: string;
  gender: string;
}

interface IPreferences {
  couples_ok: boolean;
  smoking_ok: boolean;
  pets_ok: boolean;
  occupation: string;
  references_required: boolean;
  minAge?: number;
  maxAge?: number;
}

interface IImageUrls {
  src: string;
  alt: string;
  thumbnail: string;
}

export interface IListingData {
  id: string;
  title: string;
  rent: number;
  currency: string;
  payment_frequency: string;
  room_type: string;
  deposit: number;
  bills_included: boolean;
  availability: IAvailability;
  location: ILocation;
  description?: string;
  contract_terms: IContractTerms;
  whats_included: string[];
  amenities: IAmenities;
  household?: IHouseHold;
  preferences: IPreferences;
  image_urls: IImageUrls[];
}
