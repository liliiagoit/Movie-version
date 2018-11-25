export default function showPlaySoon (state=[], action) {
    switch(action.type) {
        case 'SHOW_SOON_PLAYING':
        return [...action.data];

        default:
        return state;
    }

}