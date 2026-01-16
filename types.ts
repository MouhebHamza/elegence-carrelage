export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export enum SectionId {
  HERO = 'hero',
  SERVICES = 'services',
  PORTFOLIO = 'portfolio',
  ABOUT = 'about',
  CONTACT = 'contact',
}