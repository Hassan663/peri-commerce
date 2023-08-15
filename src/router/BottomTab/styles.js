import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(243, 244, 245, 0.5)',
        borderTopLeftRadius: RFPercentage(3),
        borderTopRightRadius: RFPercentage(3),
        position: 'absolute',
        bottom: 0,
        height: "10%",
        justifyContent: "center",
        alignItems: 'flex-end',
        overflow: 'hidden',
        width: "100%"
    },
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        height: "95%",
        width: "100%",
        alignItems:'center',
        paddingHorizontal: RFPercentage(3),
        borderTopLeftRadius: RFPercentage(3),
        borderTopRightRadius: RFPercentage(3),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 22,
    },
    title: {
        color: Colors.primary,
        flex: 1,
        fontWeight: "700",
        textAlign: "center"
    },
    iconContainer: (isFocused) => ({
        height: RFPercentage(5),
        width: RFPercentage(5),
        borderRadius: RFPercentage(3),
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: isFocused ? Colors.primary : null
    }),
    buttonContainer: (isFocused) => ({
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: RFPercentage(3),
        width: "100%",
        overflow: 'hidden',
        backgroundColor: isFocused ?
            Colors.inputBg
            :
            null
    }),
});