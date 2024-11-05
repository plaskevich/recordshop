export const isAuthenticated = () => {
  if (localStorage.getItem('token')) {
    return true;
  } else {
    return false;
  }
};

export const getDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export const getStatus = (status) => {
  switch (status) {
    case 'sold':
      return 'Sold';
    case 'inStock':
      return 'In Stock';
    default:
      return;
  }
};

export const getPrice = (price) => {
  return price ? `${price}€` : '-';
};

export const getCondition = (condition) => {
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
