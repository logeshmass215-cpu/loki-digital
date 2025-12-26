export enum AppRoute {
  HOME = '/',
  SERVICES = '/services',
  WORK = '/work',
  WHY_US = '/why-us',
  CONTACT = '/contact',
}

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  category: 'Video Editing' | 'Graphic Design';
  imageUrl: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}