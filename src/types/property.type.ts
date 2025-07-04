/* eslint-disable @typescript-eslint/no-explicit-any */
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

export type TProperty = {
  _id: string;
  arthurId: number;
  property_type: string;
  property_description: string;
  ref: string;
  full_address: string;
  address_line_1: string;
  country: string;
  lat: number;
  lng: number;
  total_units: number;
  rentable_units: number;
  property_owner_id: number;
  property_owner_full_name: string;
  max_occupancy: string;
  bathrooms: string;
  bedrooms: string;
  receptions: string;
  council_tax_band: string;
  i_manage_this: boolean;
  latitude: number;
  longitude: number;
  modified: Date;
  created: Date;
  entity_id: number;

  address_line_2?: string;
  city?: string;
  county?: string;
  area?: string;
  postcode?: string;
  letting_agent_id?: number | null;
  floors?: string;
  smart_meters?: string;
  council_account_no?: string;
  council_id?: number | null;
  portal_market_rent?: number;
  portal_market_rent_frequency?: string;
  main_image_url?: string | null;
  epc_urls?: string[];
  floor_plan_urls?: string[];
  thumbnail_urls?: string[];
  image_urls: string[];
  features: string[];
  property_features: string[];
  additional_features?: string[];
  tags?: string[];
  notes: {
    id: number;
    content: string;
    tags: string[];
  }[];
  custom_fields?: any[];
};
