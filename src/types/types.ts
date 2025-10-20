export type NeededItem = {
  id?: string | number;
  name: string;
  quantity?: string | number;
};

export type Organization = {
  name: string;
  location?: string;
};

export type Campaign = {
  id?: string | number;
  title: string;
  description?: string;
  organization: Organization;
  neededItems?: NeededItem[];
};