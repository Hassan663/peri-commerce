import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent:'center',
        alignItems:"center"
    },
    splash_Icon: {
      tintColor:Colors.white,
        height: RFPercentage(35),
        width: RFPercentage(35)
    }
});