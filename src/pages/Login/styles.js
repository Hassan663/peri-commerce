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
        marginTop: RFPercentage(10),
        marginBottom: RFPercentage(5),
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
        top: '0%',
    },
    input: {
        borderWidth: RFPercentage(.1),
        borderRadius: 5,
        borderColor: Colors.gray,
        paddingHorizontal: RFPercentage(3),
        width:"100%",
        height: '85%',
    },
    subHeading: {
        width: '70%',
        marginVertical: RFPercentage(1)
    },
});