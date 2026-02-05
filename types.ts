
export interface CompanyData {
  cnpj: string;
  name: string;
  email: string;
  phone: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}
