export default function showTopRatedMovie (state=[], action) {
   switch(action.type){
       case 'SHOW_TOP_MOVIE':
       return action.data;

       default:
       return state;
   }
}