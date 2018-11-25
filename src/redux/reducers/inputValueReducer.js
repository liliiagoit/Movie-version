export default function inputSearchValue (state='', action) {
    switch(action.type){
        case 'INPUT_VALUE':
        return action.data;

        case 'CLEAR_INPUT':
        return '';

        default:
        return state;
    }
}