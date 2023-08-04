import { TouchableOpacity, View } from "react-native"
import { styles } from "../styles"
import { useRef } from "react"
import { useNavigation } from '@react-navigation/native';
import Title from "../../../components/Title"
import Colors from "../../../styles/Colors"
import { changeSlide } from "./CallBack"

export const Slide = ({ swiperRef }) => {
    const navigation = useNavigation();

    const handleSkip = () => navigation.navigate('Login')

    return (
        <View style={styles.slide1}>
            <Title color={Colors.black} weight={'700'} title={'Lorem ipsum dolor sit.'} type={`Poppin-20`} />
            <Title
                color={Colors.gray}
                weight={'400'}
                title={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                type={`Poppin-12`} />
            <View style={styles.footer}>
                <TouchableOpacity onPress={handleSkip}>
                    <Title color={Colors.black} weight={'600'} title={'Skip'} type={`Poppin-14`} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeSlide(swiperRef)}>
                    <Title color={Colors.black} weight={'600'} title={'Next'} type={`Poppin-14`} />
                </TouchableOpacity>
            </View>
        </View>
    )
}