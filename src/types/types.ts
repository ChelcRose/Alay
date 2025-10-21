export type NeededItem = {
  id?: string | number;
  name: string;
};

export type Organization = {
  name: string;
  location?: string;
};

export type Campaign = {
  id?: string | number;
  title: string;
  description?: string;
  charityID: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  neededItems?: NeededItem[];
};