export default function openChat (state=false, action) {
    switch(action.type){
        case 'SHOW_CHAT':
        return !state;

        default:
        return state;
    }
}