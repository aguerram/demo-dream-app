import { GeoDataResponse } from "@/app/api/geo/types";

export async function getGeoData(): Promise<GeoDataResponse> {
    const response = await fetch('/api/geo');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch geo data: ${response.status} ${response.body}`);
    }
    return response.json();
  }