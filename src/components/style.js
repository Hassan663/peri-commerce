import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../styles/Colors';
export const styles = StyleSheet.create({
    poppin_20: { fontSize: 20, },
    poppin_12: { fontSize: 12, },
    poppin_14: { fontSize: 14, },
    poppin_16: { fontSize: 16, },
    primaryBtn: {
        flex: 1,
        backgroundColor: Colors.primary,
        borderRadius: RFPercentage(1),
        justifyContent: "center",
        alignItems: 'center'
    },
    primaryText: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.white,
        textTransform: 'uppercase',
    }
});