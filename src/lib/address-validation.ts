import { validatePostalCode } from "@/data/countries";

export interface AddressDetails {
  street1: string;
  street2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  countryCode: string;
  formattedAddress?: string;
  phone?: string;
  phoneCountryCode?: string;
}

export interface AddressValidationError {
  street1?: string;
  street2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  phone?: string;
}

export interface ValidationRule {
  pattern: RegExp;
  message: string;
}

export const phoneValidationRules: Record<string, ValidationRule> = {
  US: {
    pattern: /^\+1[2-9]\d{9}$/,
    message: "US phone numbers must be in format: +1 followed by 10 digits"
  },
  GB: {
    pattern: /^\+44[1-9]\d{9}$/,
    message: "UK phone numbers must be in format: +44 followed by 10 digits"
  },
  AU: {
    pattern: /^\+61[2-578]\d{8}$/,
    message: "Australian phone numbers must be in format: +61 followed by 9 digits"
  },
  PH: {
    pattern: /^\+63[2-9]\d{9}$/,
    message: "Philippine phone numbers must be in format: +63 followed by 10 digits"
  }
};

export const validatePhone = (phone: string, countryCode: string): string | undefined => {
  if (!phone) return "Phone number is required";
  
  const rule = phoneValidationRules[countryCode];
  if (!rule) return undefined; // No validation rule for this country
  
  if (!rule.pattern.test(phone)) {
    return rule.message;
  }
  
  return undefined;
};

export const formatPhoneNumber = (phone: string, countryCode: string): string => {
  // Remove all non-digit characters except '+'
  const digits = phone.replace(/[^\d+]/g, '');
  
  // If the number doesn't start with '+', add the country code
  if (!digits.startsWith('+')) {
    switch (countryCode) {
      case 'US':
        return `+1${digits}`;
      case 'GB':
        return `+44${digits}`;
      case 'AU':
        return `+61${digits}`;
      default:
        return digits;
    }
  }
  
  return digits;
};

export const validateAddress = (address: AddressDetails): AddressValidationError => {
  const errors: AddressValidationError = {};

  if (!address.street1) {
    errors.street1 = "Street address is required";
  }

  if (!address.city) {
    errors.city = "City is required";
  }

  if (!address.state) {
    errors.state = "State/Province/Region is required";
  }

  if (!address.postalCode) {
    errors.postalCode = "Postal code is required";
  } else if (address.countryCode) {
    const isValid = validatePostalCode(address.postalCode, address.countryCode);
    if (!isValid) {
      errors.postalCode = `Invalid postal code format for ${address.country}`;
    }
  }

  if (!address.country) {
    errors.country = "Country is required";
  }

  if (address.phone && address.countryCode) {
    const phoneError = validatePhone(address.phone, address.countryCode);
    if (phoneError) {
      errors.phone = phoneError;
    }
  }

  return errors;
};

export const hasValidationErrors = (errors: AddressValidationError): boolean => {
  return Object.keys(errors).length > 0;
};

export const standardizeAddress = (address: AddressDetails): AddressDetails => {
  return {
    ...address,
    // Standardize postal code format (uppercase, remove extra spaces)
    postalCode: address.postalCode.toUpperCase().trim(),
    // Standardize phone number to E.164 format if present
    ...(address.phone && {
      phone: formatPhoneNumber(address.phone, address.countryCode)
    }),
    // Standardize state/region names to proper case
    state: address.state
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' '),
    // Ensure consistent street address formatting
    street1: address.street1.trim(),
    street2: address.street2?.trim(),
    // Standardize city names to proper case
    city: address.city
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  };
}; 