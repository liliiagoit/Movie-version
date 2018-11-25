export default function showFavouriteList (state=[], action){
    switch(action.type){
        case 'ADD_TO_FAVOURITE':
        return action.arr;

        case 'DELETE_FROM_FAVOURITE':
        let update = JSON.parse(localStorage.getItem('favourite'));
        update = update.filter(el => el.id !== +action.id)
        localStorage.setItem('favourite', JSON.stringify(update))
        return update;

        case 'GET_FAVOURITE':
        let result = JSON.parse(localStorage.getItem('favourite'))
        return result;

        default:
        return state;
    }
}