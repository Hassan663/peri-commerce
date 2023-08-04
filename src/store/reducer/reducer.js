import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
     dummyData: {}, 
     
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.DUMMYDATA:
            return ({
                ...state,
                dummyData: action.payload
            }) 
        
        default:
            return state;
    }

}