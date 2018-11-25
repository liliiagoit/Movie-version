import { combineReducers } from 'redux';
import showMenuHendler from '../reducers/showMenuReducer';
import openChat from '../reducers/showChatReducer';
import showLogInForm from '../reducers/showLogInReducer';
import showRegistrationForm from '../reducers/showRegistrationReducer';
import showPlayNow from '../reducers/playNowReducer';
import showIsLoading from '../reducers/isLoadingReducer';
import showPlaySoon from '../reducers/playSoonReducer';
import showPopular from '../reducers/showPopularReducer';
import showAppearFilmCard from '../reducers/appearFilmCardReducer';
import showWishList from '../reducers/wishListReducer';
import showFavouriteList from '../reducers/favouriteReducer';
import showTopRatedMovie from '../reducers/topRatedReducer';
import inputSearchValue from '../reducers/inputValueReducer';
import getInputValueReducer from '../reducers/getInputValueReducer';


const rootReducer = combineReducers({
    showMenuHendler,
    openChat,
    showLogInForm,
    showRegistrationForm,
    showPlayNow,
    showIsLoading,
    showPlaySoon,
    showPopular,
    showAppearFilmCard,
    showWishList,
    showFavouriteList,
    showTopRatedMovie,
    inputSearchValue,
    getInputValueReducer
})


export default rootReducer;