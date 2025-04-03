export interface CountryData {
  code: string;
  name: string;
  states: { code: string; name: string }[];
  postalCodeFormat?: string;
  postalCodeRegex?: RegExp;
  addressFormat?: string;
}

export const countries: CountryData[] = [
  {
    code: "US",
    name: "United States",
    postalCodeFormat: "NNNNN or NNNNN-NNNN",
    postalCodeRegex: /^\d{5}(-\d{4})?$/,
    addressFormat: "{street1}\n{street2}\n{city}, {state} {postalCode}",
    states: [
      { code: "AL", name: "Alabama" },
      { code: "AK", name: "Alaska" },
      { code: "AZ", name: "Arizona" },
      { code: "AR", name: "Arkansas" },
      { code: "CA", name: "California" },
      { code: "CO", name: "Colorado" },
      { code: "CT", name: "Connecticut" },
      { code: "DE", name: "Delaware" },
      { code: "FL", name: "Florida" },
      { code: "GA", name: "Georgia" },
      { code: "HI", name: "Hawaii" },
      { code: "ID", name: "Idaho" },
      { code: "IL", name: "Illinois" },
      { code: "IN", name: "Indiana" },
      { code: "IA", name: "Iowa" },
      { code: "KS", name: "Kansas" },
      { code: "KY", name: "Kentucky" },
      { code: "LA", name: "Louisiana" },
      { code: "ME", name: "Maine" },
      { code: "MD", name: "Maryland" },
      { code: "MA", name: "Massachusetts" },
      { code: "MI", name: "Michigan" },
      { code: "MN", name: "Minnesota" },
      { code: "MS", name: "Mississippi" },
      { code: "MO", name: "Missouri" },
      { code: "MT", name: "Montana" },
      { code: "NE", name: "Nebraska" },
      { code: "NV", name: "Nevada" },
      { code: "NH", name: "New Hampshire" },
      { code: "NJ", name: "New Jersey" },
      { code: "NM", name: "New Mexico" },
      { code: "NY", name: "New York" },
      { code: "NC", name: "North Carolina" },
      { code: "ND", name: "North Dakota" },
      { code: "OH", name: "Ohio" },
      { code: "OK", name: "Oklahoma" },
      { code: "OR", name: "Oregon" },
      { code: "PA", name: "Pennsylvania" },
      { code: "RI", name: "Rhode Island" },
      { code: "SC", name: "South Carolina" },
      { code: "SD", name: "South Dakota" },
      { code: "TN", name: "Tennessee" },
      { code: "TX", name: "Texas" },
      { code: "UT", name: "Utah" },
      { code: "VT", name: "Vermont" },
      { code: "VA", name: "Virginia" },
      { code: "WA", name: "Washington" },
      { code: "WV", name: "West Virginia" },
      { code: "WI", name: "Wisconsin" },
      { code: "WY", name: "Wyoming" },
      { code: "DC", name: "District of Columbia" }
    ]
  },
  {
    code: "CA",
    name: "Canada",
    postalCodeFormat: "ANA NAN",
    postalCodeRegex: /^[A-Z]\d[A-Z] \d[A-Z]\d$/,
    addressFormat: "{street1}\n{street2}\n{city}, {state} {postalCode}",
    states: [
      { code: "AB", name: "Alberta" },
      { code: "BC", name: "British Columbia" },
      { code: "MB", name: "Manitoba" },
      { code: "NB", name: "New Brunswick" },
      { code: "NL", name: "Newfoundland and Labrador" },
      { code: "NS", name: "Nova Scotia" },
      { code: "NT", name: "Northwest Territories" },
      { code: "NU", name: "Nunavut" },
      { code: "ON", name: "Ontario" },
      { code: "PE", name: "Prince Edward Island" },
      { code: "QC", name: "Quebec" },
      { code: "SK", name: "Saskatchewan" },
      { code: "YT", name: "Yukon" }
    ]
  },
  {
    code: "GB",
    name: "United Kingdom",
    postalCodeFormat: "AA9A 9AA, A9A 9AA, A9 9AA, A99 9AA, AA9 9AA, AA99 9AA",
    postalCodeRegex: /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/,
    addressFormat: "{street1}\n{street2}\n{city}\n{state}\n{postalCode}",
    states: []
  },
  {
    code: "AU",
    name: "Australia",
    postalCodeFormat: "NNNN",
    postalCodeRegex: /^\d{4}$/,
    addressFormat: "{street1}\n{street2}\n{city} {state} {postalCode}",
    states: [
      { code: "ACT", name: "Australian Capital Territory" },
      { code: "NSW", name: "New South Wales" },
      { code: "NT", name: "Northern Territory" },
      { code: "QLD", name: "Queensland" },
      { code: "SA", name: "South Australia" },
      { code: "TAS", name: "Tasmania" },
      { code: "VIC", name: "Victoria" },
      { code: "WA", name: "Western Australia" }
    ]
  },
  {
    code: "DE",
    name: "Germany",
    postalCodeFormat: "NNNNN",
    postalCodeRegex: /^\d{5}$/,
    addressFormat: "{street1}\n{street2}\n{postalCode} {city}",
    states: [
      { code: "BW", name: "Baden-Württemberg" },
      { code: "BY", name: "Bavaria" },
      { code: "BE", name: "Berlin" },
      { code: "BB", name: "Brandenburg" },
      { code: "HB", name: "Bremen" },
      { code: "HH", name: "Hamburg" },
      { code: "HE", name: "Hesse" },
      { code: "MV", name: "Mecklenburg-Western Pomerania" },
      { code: "NI", name: "Lower Saxony" },
      { code: "NW", name: "North Rhine-Westphalia" },
      { code: "RP", name: "Rhineland-Palatinate" },
      { code: "SL", name: "Saarland" },
      { code: "SN", name: "Saxony" },
      { code: "ST", name: "Saxony-Anhalt" },
      { code: "SH", name: "Schleswig-Holstein" },
      { code: "TH", name: "Thuringia" }
    ]
  }
] as const;

// Add more countries with their specific formats...
// This is just a starter set - we can add more as needed

export const getCountryByCode = (code: string): CountryData | undefined => {
  return countries.find(country => country.code === code);
};

export const validatePostalCode = (postalCode: string, countryCode: string): boolean => {
  const country = getCountryByCode(countryCode);
  if (!country?.postalCodeRegex) return true; // If no regex defined, assume valid
  return country.postalCodeRegex.test(postalCode);
};

export const formatAddress = (
  address: {
    street1: string;
    street2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  },
  countryCode: string
): string => {
  const country = getCountryByCode(countryCode);
  if (!country?.addressFormat) {
    // Default format if none specified
    return `${address.street1}
${address.street2 ? address.street2 + '\n' : ''}${address.city}, ${address.state} ${address.postalCode}
${address.country}`;
  }

  let formatted = country.addressFormat;
  Object.entries(address).forEach(([key, value]) => {
    if (value) {
      formatted = formatted.replace(`{${key}}`, value);
    }
  });

  // Remove empty lines and trim
  return formatted
    .split('\n')
    .filter(line => line.trim())
    .join('\n');
}; 