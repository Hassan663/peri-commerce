import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

const windowWidth = Dimensions.get('window').width;
const widthFlex1 = windowWidth / 10

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: RFPercentage(2)
    },
    circle: (size) => ({
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        width: size,
        backgroundColor: Colors.primary,
        borderRadius: size / 2
    }),
    headerContainer: {
        height: RFPercentage(10),
        flexDirection: 'row',
        marginTop: RFPercentage(3),
        marginVertical: RFPercentage(1),
        justifyContent: "space-between",
        alignItems: 'center',
    },
    inputContainer: {
        height: "100%",
        width: "80%",
        backgroundColor: Colors.inputBg,
        paddingHorizontal: RFPercentage(2),
        borderRadius: RFPercentage(4),
        flexDirection: 'row',
        alignItems: "center",
    },
    searchContainer: {
        flex: 1,
        paddingHorizontal: RFPercentage(1),
    },
    filterContainer: {
        height: "100%",
        width: "20%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    bannerContainer: {
        width: widthFlex1 * 8, backgroundColor: "red",
        overflow: 'hidden',
        height: '100%',
        marginLeft: 20,
        backgroundColor: Colors.inputBg,
        borderRadius: RFPercentage(4)
    },
    banner: {
        position: "absolute",
        height: "100%",
        width: "100%"
    },
    bannerContentContainer: {
        paddingHorizontal: RFPercentage(3),
        paddingVertical: RFPercentage(2),
        justifyContent: "space-between",
        height: "100%",
        width: '100%'
    },
    getNowContainer: {
        height: 30,
        width: 80,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: RFPercentage(3)
    },
    getNowTitle: {
        color: Colors.white,
        fontWeight: '700'
    },
    row: {
        width: '100%',
        marginVertical: RFPercentage(3),
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cartContainer: {
        overflow: "hidden",
        alignItems: 'center',
        marginVertical: RFPercentage(1),
        width: '48%',
    },
    cartImg: {
        height: 200,
        borderRadius: RFPercentage(3),
        marginBottom: 10,
        backgroundColor: "white",
        width: '98%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.09,
        shadowRadius: 4.65,

        elevation: 7,
    },
    cartHeart: {
        position: "absolute",
        right: '8%',
        top: "5%"
    },
    inputWrapper: {
        height: 50,
        width: "100%",
        marginVertical: RFPercentage(2),
        flexDirection: "row",
    }
});