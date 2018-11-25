export default function showAppearFilmCard (state={}, action) {
    switch(action.type){
        case 'SHOW_APPEAR_CARD':
        return action.data;

        default:
        return state;
    }
}