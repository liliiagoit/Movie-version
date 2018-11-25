export default function showIsLoading (state=true, action) {
    switch(action.type) {
        case 'SHOW_LOADING':
        return false;

        case 'SHOW_END':
        return true;

        default:
        return state;
    }
}