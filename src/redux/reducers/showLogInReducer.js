export default function showLogInForm (state=false, action) {
    switch(action.type) {
        case 'SHOW_LOGIN_FORM':
        return !state;

        default:
        return state;
    }
}