export type Record = {
  id: string;
  artist: string;
  title: string;
  status: Status;
  label: string;
  condition: Condition;
  genre: string;
  price: number;
  year: number;
  notes: string;
  img_uri: string;
  date_added: string;
};

export type DiscogsRecord = {
  artist: string[];
  title: string;
  label: string[];
  genre: string[];
  year: number;
  img_uri: string;
};

export type Condition = 'm' | 'nm' | 'vg+' | 'vg' | 'g' | 'p';
export type Status = 'sold' | 'inStock';

export type FilterOptions = 'all' | 'sold' | 'inStock';
