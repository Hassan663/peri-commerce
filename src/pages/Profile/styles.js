import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        // justifyContent: 'center',
        // alignItems: "center"
    },
    circle: (size) => ({
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        width: size,
        backgroundColor: Colors.lightGray,
        borderRadius: size / 2
    }),
    logOutContainer: {
        height: 50,
        width: "80%",
        position: 'absolute',
        zIndex: 2,
        bottom: '15%',
        alignSelf: "center"
    },
    line: { textDecorationLine: 'underline', },
    title: {
        fontSize: 16,
        width: "90%",
        marginVertical: RFPercentage(.5),
        alignSelf: "center",
        alignItems: 'center',
        flexDirection: 'row',
    },
    titleContainer: {
        marginVertical: RFPercentage(4.5),
        paddingVertical: RFPercentage(2),
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        borderRadius: RFPercentage(1.5),
        width: "90%",
        alignSelf: "center"
    },
});