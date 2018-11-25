export default function showWishList (state=[], action) {
    switch(action.type) {
        case 'ADD_TO_WISHLIST':
        return action.arr;

        case 'DELETE_FROM_WISH_LIST':
        let update = JSON.parse(localStorage.getItem('wishlist'));
        update = update.filter(el => el.id !== +action.id);
        localStorage.setItem('wishlist', JSON.stringify(update))
        return update;

        case 'COMPONENT_DID_MOUNT':
        let result = JSON.parse(localStorage.getItem('wishlist'));
        return result;

        default: 
        return state;
    }
}