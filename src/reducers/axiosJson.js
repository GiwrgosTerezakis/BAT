const axiosJson = (state = 0 , action) => {
    switch(action.type){
        case 'INFO':
            
            return state = action.payload;
        default:
            return state = 0 ;
    }
};
export default axiosJson;