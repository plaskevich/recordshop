import { Condition, Status } from '@/types';

export const isAuthenticated = () => {
  if (localStorage.getItem('token')) {
    return true;
  } else {
    return false;
  }
};

export const getDate = (date: number | string | Date) => {
  return new Date(date).toLocaleDateString();
};

export const getStatus = (status: Status) => {
  switch (status) {
    case 'sold':
      return 'Sold';
    case 'inStock':
      return 'In Stock';
    default:
      return;
  }
};

export const getPrice = (price: number) => {
  return price ? `${price}€` : '-';
};

export const getCondition = (condition: Condition) => {
  switch (condition) {
    case 'm':
      return 'Mint (M)';
    case 'nm':
      return 'Near Mint (NM)';
    case 'vg+':
      return 'Very Good+ (VG+)';
    case 'vg':
      return 'Very Good (VG)';
    case 'g':
      return 'Good (G)';
    case 'p':
      return 'Poor (P)';
    default:
      return;
  }
};
