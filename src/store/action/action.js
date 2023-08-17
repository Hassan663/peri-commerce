import firestore from '@react-native-firebase/firestore';
import ActionTypes from '../constant/constant';
export const getNewArrivals = () => {
    return async (dispatch) => {
        firestore().collection('New Arrivals').get()
            .then((querySnapshot) => {
                let newArrivals = []
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                    newArrivals.push({ id: doc.id, data: doc.data() })
                });
                dispatch({ type: ActionTypes.NEWARRIVALS, payload: newArrivals });
            })
            .catch((error) => {
                console.error("Error getting documents: ", error);
            });
    }
}