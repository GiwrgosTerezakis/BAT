const modelReducer = (state = 0 , action) => {
    switch(action.type){
        case 'CHANGE':
            
            return state = action.payload;
        default:
            return state = 0 ;
    }
};
export default modelReducer;