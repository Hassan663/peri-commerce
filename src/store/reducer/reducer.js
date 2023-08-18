import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    newArrivals: {},
    myOrders: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.NEWARRIVALS:
            return ({
                ...state,
                newArrivals: action.payload
            })
        case ActionTypes.MYORDERS :
            return ({
                ...state,
                myOrders: action.payload
            })

        default:
            return state;
    }

}