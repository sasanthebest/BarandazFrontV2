
export const filteredAds = (queryParametrs) => {
  if (queryParametrs === []) {
    return '/pollads';
  } else {
    const queryString = [];
    queryParametrs.forEach((el) => {
      const query = `${el.param}=${el.value}`;
      queryString.push(query);
    });
    return `/pollads/?${queryString.join("&")}`;
  }
};
export const allAds = '/pollads/';
export const singleAd = (id) => `/pollads/${id}`;
export const categories = '/categories/';

// user endpoints:
export const signUp = '/users/';
export const userInfo = '/users/me/';
export const createJwtToken = '/token/';

//phone validations endpoints
export const sendValidationToken = '/send_validation_token/';
export const validateToken ='/validate_token/';

// user's stuff

export const myAds = 'myads/';
export const myBookmarks = '/bookmarks/';
export const myChambers = 'mychambers/';
// export const myNotes=
// export const myRecentSeen
