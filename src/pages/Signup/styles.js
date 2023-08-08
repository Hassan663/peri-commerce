import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: RFPercentage(2)
    },
    loginIcon: {
        height: 100,
        tintColor: Colors.primary,
        resizeMode: "contain",
        marginBottom: RFPercentage(0),
        alignSelf: 'center',
        width: 100,
    },
    inputContainer: {
        height: 65,
        justifyContent: "flex-end",
        marginVertical: 10,
    },
    title: {
        fontWeight: 'bold',
        position: "absolute",
        paddingHorizontal: RFPercentage(1),
        zIndex: 2,
        backgroundColor: Colors.white,
        left: '3%',
        color: Colors.gray,
        fontSize: 14,
        fontWeight: '400',
        top: '0%',
    },
    input: (pass) => ({
        borderWidth: pass ? 0 : RFPercentage(.1),
        borderRadius: 5,
        borderColor: Colors.gray,
        alignItems: "center",
        paddingHorizontal: pass ? 0 : RFPercentage(3),
        width: "100%",
        height: pass ? '100%' : '85%',

    }),
    input2: {
        borderWidth: RFPercentage(.1),
        borderRadius: 5,
        borderColor: Colors.gray,
        width: "100%",
        height: '100%',
    },
    subHeading: {
        width: '70%',
        marginVertical: RFPercentage(1)
    },
    passwordContainer: {
        borderWidth: 1,
        flexDirection: 'row',
        borderWidth: RFPercentage(.1),
        borderRadius: 5,
        borderColor: Colors.gray,
        paddingHorizontal: RFPercentage(3),
        width: "100%",
        height: '85%'
    },
    eyeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    textInputContainer: {
        flexDirection: 'row',
        width: "100%",
        height: "85%"
    },
    selfEnd: {
        flexDirection: 'row',
        alignItems: "center",
        margin: RFPercentage(1)
    },
    btnWrapper: {
        height: 55,
        width: "100%",
        marginVertical: RFPercentage(2)
    },
    circle: {
        height: 35,
        width: 35,
        justifyContent: 'center',
        marginHorizontal: RFPercentage(1),
        alignItems: "center",
        borderRadius: 18,
        borderWidth: RFPercentage(0.1),
        borderColor: Colors.gray
    },
    rowWrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: RFPercentage(1)
    },

});