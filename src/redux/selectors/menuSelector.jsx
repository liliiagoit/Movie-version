export const playNowLength = (state) => state.showPlayNow.length;

export const sortPlayNow = state => state.showPlayNow.map(el => ({...el, release_date: new Date(el.release_date).getTime()})).sort((a, b) => b.release_date - a.release_date);

// =================================================================

export const playSoonLength = state => state.showPlaySoon.length;

export const sortPlaySoon = state => state.showPlaySoon.map(el => ({...el, release_date: new Date(el.release_date).getTime()})).sort((a,b) => b.release_date - a.release_date);

// ==================================================

export const playPopularLength = state => state.showPopular.length;

export const sortPopular = state => state.showPopular.map(el => ({...el, release_date: new Date(el.release_date).getTime()})).sort((a, b) => b.release_date - a.release_date);


// ==================================================================


export const playFavouriteLength = state => state.showFavouriteList.length;

export const sortFavouriteList = state => state.showFavouriteList.map(el => ({...el, release_date: new Date(el.release_date).getTime()})).sort((a, b) => b.release_date - a.release_date);

// ===============================================================


export const playWishListLength = state => state.showWishList.length;

export const sortWishList = state => state.showWishList.map(el => ({...el, release_date: new Date(el.release_date).getTime()})).sort((a,b) => b.release_date - a.release_date);



