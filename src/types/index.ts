export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceType?: string;
}

export interface ServiceArea {
  county: string;
  cities: string[];
}