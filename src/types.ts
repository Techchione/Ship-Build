export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specs: { label: string; value: string }[];
  tag: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface Certification {
  name: string;
  code: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  message: string;
}
