export interface GeoData {
  ipAddress: string;
  continentCode: string;
  continentName: string;
  countryCode: string;
  countryName: string;
  stateProv: string;
  city: string;
}
export interface GeoDataResponse {
  ipAddress: string;
  isOkay: boolean;
}

export interface GeoDataErrorResponse {
    error: string;
}