export const later = () =>
  new Promise(r => setTimeout(() => r(), 2000));
