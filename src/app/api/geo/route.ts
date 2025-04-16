import { getGeoData } from "@/lib/api/geo-service";
import { NextResponse } from "next/server";
import { GeoData, GeoDataErrorResponse, GeoDataResponse } from "./types";

// a prox
export async function GET(): Promise<
  NextResponse<GeoDataResponse | GeoDataErrorResponse>
> {
  try {
    const response = await fetch("https://api.db-ip.com/v2/free/self");
    if (!response.ok) {
      console.log("Response not OK:", response.status, await response.text());
      return NextResponse.json(
        { error: "Failed to fetch geo data", isOkay: false },
        { status: 500 }
      );
    }
    const data = (await response.json()) as GeoData;
    return NextResponse.json({
      ipAddress: data.ipAddress,
      isOkay:
        data.ipAddress.split(".").reduce((acc, curr) => acc + Number(curr), 0) >
        100,
    });
  } catch (error) {
    console.error("Error checking IP:", error);
    return NextResponse.json(
      { error: "Failed to fetch IP data" },
      { status: 500 }
    );
  }
}
