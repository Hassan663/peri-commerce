import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        borderTopLeftRadius: RFPercentage(3),
        borderTopRightRadius: RFPercentage(3),
        elevation: 10,
        position: 'absolute',
        bottom: 0,
        padding: RFPercentage(2)

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
        borderRadius: RFPercentage(2.5),
        width: "100%",
        overflow: 'hidden',
        backgroundColor: isFocused ? Colors.lightGray : null
    }),
});