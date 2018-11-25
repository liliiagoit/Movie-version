export default function showPopular (state=[], action) {
    switch(action.type){
        case 'SHOW_POPULAR_MOVIES':
        return [...action.data];

        default:
        return state;
    }
}