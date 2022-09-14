export const limit = 30;
export const radius = 300;
export const defaultQuery = "";
export const locationInput = <HTMLInputElement>(
  document.getElementById("location-input")
);
export const searchButton = document.getElementById("search-location-button");
export const useMyLocation = document.getElementById("useLocation");
export const locationNoun = "Ospedali";
export const locationNounPlural = "Ospedali";

// Live Api query variables
var script_tag = document.getElementById('js-locator');
export const liveAPIKey = script_tag.getAttribute('data');
export const savedFilterId = "1234994255";
export const entityTypes = "healthcareFacility";
export const loadLocationsOnLoad = true;
export const enableAutocomplete = true;
export const base_url = "https://liveapi.yext.com/v2/accounts/me/";
export const useMiles = false;

export type locationOption = {
  // The value of the content, either a field name or a constant value
  value: string;
  // Determines where this value comes from. Generally either FIELD or text.
  contentSource: string;
  // Determines whether the content defined in value should be parsed as RTF.
  isRtf: boolean | undefined;
};

export const locationOptions = {
  cardTitle: {
    value: "c_nomeStruttura",
    contentSource: "FIELD",
    isRtf: true,
  },
  cardTitleLinkUrl: {
    value: "slug",
    contentSource: "FIELD",
  },
  hours: {
    value: "hours",
    contentSource: "FIELD",
  },
  address: {
    value: "address",
    contentSource: "FIELD",
  },
  phoneNumber: {
    value: "mainPhone",
    contentSource: "FIELD",
  },
  getDirectionsLabel: {
    value: "Ottieni indicazioni",
    contentSource: "text",
    isRtf: true,
  },
  coordinates: {
    value: "geocodedCoordinate",
    contentSource: "FIELD",
  },
  viewDetailsLinkText: {
    value: "Dettagli",
    contentSource: "text",
  },
  viewDetailsLinkUrl: {
    value: "/",
    contentSource: "text",
  },
};
