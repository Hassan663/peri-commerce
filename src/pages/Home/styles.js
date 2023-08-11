import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: RFPercentage(2)
    },
    circle: (size) => ({
        height: size,
        width: size,
        backgroundColor: Colors.primary,
        borderRadius: size / 2
    }
    )
});