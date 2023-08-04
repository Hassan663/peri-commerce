// @app
import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import { styles } from './style';
// import { styles } from './index.style';

const Title = ({ title, type, color, weight }) => {
    if (type == 'Poppin-12') return <Text style={[{ color: color, fontWeight: weight }, styles.poppin_12]} >{title}</Text>;
    if (type == 'Poppin-14') return <Text style={[{ color: color, fontWeight: weight }, styles.poppin_14]} >{title}</Text>;
    if (type == 'Poppin-16') return <Text style={[{ color: color, fontWeight: weight }, styles.poppin_16]} >{title}</Text>;
    if (type == 'Poppin-20') return <Text style={[{ color: color, fontWeight: weight }, styles.poppin_20]} >{title}</Text>;

};
export default Title;
