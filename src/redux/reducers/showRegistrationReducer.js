export default function showRegistrationForm (state=false, action) {
    switch(action.type){
        case 'SHOW_REGISTRATION_FORM':
        return !state;

        default: 
        return state;
    }
}