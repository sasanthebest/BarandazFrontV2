
export const filteredAds = (queryParametrs) => {
  if (queryParametrs === []) {
    return '/pollads/';
  } else {
    const queryString = [];
    queryParametrs.forEach((el) => {
      const query = `${el.param}=${el.value}`;
      queryString.push(query);
    });
    return `/pollads/?${queryString.join("&")}`;
  }
};
export const baseURL= "http://127.0.0.1:8000"
export const allAds = '/pollads/';
export const singleAd = (code) => `/pollads/${code}/`;
export const categoriesUrl = '/categories/';
export const singleCategory=(slug)=>`/categories/${slug}/`
export const cities='/cities/'
export const newBookmark='/bookmarks/'
export const deleteBookmark=(id)=>`/bookmarks/${id}/`

// user endpoints:
export const signUp = '/users/';
export const userInfo = '/users/me/';
export const createJwtToken = '/token/';

//phone validations endpoints
export const ValidationTokenUrl = '/send_validation_token/';
export const validateToken ='/validate_token/';

// user's stuff

export const myAdsUrl = '/myads/';
export const myAdsSingle=code=> `/myads/${code}/`
export const myBookmarksUrl = '/bookmarks/';
export const myChambersUrl = '/mychambers/';
// export const myNotes=
// export const myRecentSeen
export const myAccount = "/user/myAccount"
export const myAdds = "/user/myAds"
export const myChambers = "/user/myChambers"
export const myBookmarks = "/user/mybookmarks"
export const myLastSeen="/user/myLastSeens"



// create advertisment
export const submitAd="/submit_ad/"