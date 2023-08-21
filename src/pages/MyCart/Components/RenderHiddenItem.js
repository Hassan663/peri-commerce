
// @app
import React, {
    useState
} from 'react';
import {
    Image,
    TouchableOpacity,
    View,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import auth from '@react-native-firebase/auth';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../../../styles/Colors';
import Title from '../../../components/Title';
import { styles } from '../styles';
import {
    addItem,
    getItem
} from '../../../store/action/action';

export const RenderItem = ({ data, rowMap, settotalPrice, totalPrice }) => {
    const [noOfItem, setNoOfItem] = useState(data?.item?.noOfItem)
    return (

        <View style={styles.rowFront}>
            <Image style={styles.cartItemImg} source={{ uri: data.item.photoURL }} />

            <View style={styles.cartItemContentWrapper}>
                <View>
                    <Title
                        type={`Poppin-14`}
                        color={Colors.primary}
                        weight={`600`}
                        title={data?.item?.name}
                    />
                    <Title
                        type={`Poppin-11`}
                        color={Colors.fontColor}
                        weight={`400`}
                        title={data?.item?.company} />
                </View>
                <View style={styles.cartItemContentBody}>
                    <Title type={`Poppin-14`} color={Colors.primary} weight={`700`} title={(Number(data?.item?.price) * noOfItem).toFixed(2)} />
                    <View style={[styles.noOfItemWrapper, styles.mr2]}>
                        <AntDesign
                            onPress={() => {
                                if (noOfItem > 1) {
                                    setNoOfItem(noOfItem - 1)
                                    let newPrice = Number(totalPrice) - Number(data?.item?.price)
                                    settotalPrice(newPrice)
                                }
                            }}
                            color={Colors.primary}
                            name={'minus'}
                            size={RFPercentage(2)} />
                        <Title
                            title={noOfItem}
                            color={Colors.primary}
                            weight={'400'}
                            type={`Poppin-14`} />
                        <AntDesign
                            onPress={() => {
                                noOfItem < 10 && setNoOfItem(noOfItem + 1)
                                let newPrice = Number(totalPrice) + Number(data?.item?.price)
                                settotalPrice(newPrice)
                            }}
                            color={Colors.primary}
                            name={'plus'}
                            size={RFPercentage(2)} />
                    </View>
                </View>
            </View>
        </View>
    )
}
export const renderHiddenItem = (data, rowMap, setmyCarts, settotalPrice) => (
    <View style={styles.rowBack}>
        <View style={{ flex: 1, }} />
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={async () => {
                const myCart = await getItem('myCart');
                const currentUserUid = auth().currentUser?.uid;
                if (myCart !== null) {
                    let myCartFilter = JSON.parse(myCart).filter((val) => val.userUid == currentUserUid)
                    let objClone = JSON.parse(JSON.stringify(myCartFilter))
                    let getIndex = objClone.findIndex((val) => val.id == data.item.id)
                    objClone.splice(getIndex, 1)
                    let price = 0
                    objClone.map((item) => { price = price + item.price })
                    settotalPrice(price)

                    await addItem('myCart', JSON.stringify(objClone))
                    setmyCarts(objClone)

                }
            }} style={styles.deleteContainer} >
            <MaterialIcons name={`delete`} size={RFPercentage(3)} color={Colors.white} />
        </TouchableOpacity>
    </View>
)