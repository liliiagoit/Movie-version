export default function getInputValueReducer (state=[], action) {
    switch(action.type) {
        case 'GET_INFO':
        return [...action.result];

        default: 
        return state;
    }
}