import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
     newArrivals: {}, 
     
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.NEWARRIVALS:
            return ({
                ...state,
                newArrivals: action.payload
            }) 
        
        default:
            return state;
    }

}