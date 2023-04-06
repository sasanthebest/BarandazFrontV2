const domain = "http://127.0.0.1:8000";
export const allAds = `${domain}/pollads/`;
export const singleAd = (id) => `${domain}/pollads/${id}`;
export const categories = `${domain}/categories/`;

export const filteredAds = (queryPrametrs) => {
  if (queryPrametrs === "undefined") {
    return `${domain}/pollads/`;
  }
  const queryString = [];
  queryPrametrs.forEach((el) => {
    const query = `${el.param}=${el.value}`;
    queryString.push(query);
  });
  return `${domain}/pollads/?${queryString.join("&")}`;
};

// user endpoints:
export const signUp = `${domain}/users/`;
export const signIn = `${domain}/users/me/`;
export const createJwtToken = `${domain}/token/`;

//phone validations endpoints
export const sendValidationToken = `${domain}/send_validation_token/`;
export const validateToken = `${domain}/validate_token/`;
