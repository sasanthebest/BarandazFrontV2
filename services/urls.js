const domain = "http://127.0.0.1:8000";
export const allAds = `${domain}/pollads/`;
export const singleAd = (id) => `${domain}/pollads/${id}`;
export const categories = `${domain}/categories/`;

export const filteredAds = ({ param, value }) => {
  return `${domain}/pollads/?${param}=${value}`;
};
