const domain = "http://127.0.0.1:8000";
export const filteredAds = (queryParametrs) => {
  if (queryParametrs == []) {
    return `${domain}/pollads/`;
  } else {
    const queryString = [];
    queryParametrs.forEach((el) => {
      const query = `${el.param}=${el.value}`;
      queryString.push(query);
    });
    return `${domain}/pollads/?${queryString.join("&")}`;
  }
};
export const allAds = `${domain}/pollads/`;
export const singleAd = (id) => `${domain}/pollads/${id}`;
export const categories = `${domain}/categories/`;

// user endpoints:
export const signUp = `${domain}/users/`;
export const signIn = `${domain}/users/me/`;
export const createJwtToken = `${domain}/token/`;

//phone validations endpoints
export const sendValidationToken = `${domain}/send_validation_token/`;
export const validateToken = `${domain}/validate_token/`;

// user's stuff

export const myAds = `${domain}/myads/`;
export const myBookmarks = `${domain}/bookmarks/`;
export const myChambers = `${domain}/chambers/`;
// export const myNotes=
// export const myRecentSeen
