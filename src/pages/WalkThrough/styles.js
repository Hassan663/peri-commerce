import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    wrapper: {},
    slide1: {
        paddingHorizontal: RFPercentage(2),
        position: "absolute",
        zIndex: 1,
        width: "100%",
        bottom: 0,
        height: '42%',
        justifyContent: 'center',
        backgroundColor: Colors.white

    },
    slide2: {
        paddingHorizontal: RFPercentage(2),
        position: "absolute",
        zIndex: 1,
        width: "100%",
        bottom: 0,
        height: '42%',
        justifyContent: 'center',
        backgroundColor: Colors.white
    },
    slide3: {
        paddingHorizontal: RFPercentage(2),
        position: "absolute",
        zIndex: 1,
        width: "100%",
        bottom: 0,
        height: '42%',
        justifyContent: 'center',
        backgroundColor: Colors.white
    },
    footer: {
        flexDirection: "row",
        position: "absolute",
        bottom: RFPercentage(2),
        width: "100%",
        alignSelf: "center",
        alignItems: 'flex-end',
        justifyContent: "space-between"
    },
    splash_Icon: {
        tintColor: Colors.white,
        position: "absolute",
        alignSelf: "center",
        height: RFPercentage(25),
        width: RFPercentage(25)
    }
});