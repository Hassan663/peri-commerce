// @app
import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import { styles } from './style';

const Title = ({ title, type, color, weight }) => {
    if (type == 'Poppin-7') return <Text style={[{ color: color, fontWeight: weight }, styles.poppin_7]} >{title}</Text>;
    if (type == 'Poppin-9') return <Text style={[{ color: color, fontWeight: weight }, styles.poppin_9]} >{title}</Text>;
    if (type == 'Poppin-11') return <Text style={[{ color: color, fontWeight: weight }, styles.poppin_11]} >{title}</Text>;
    if (type == 'Poppin-12') return <Text style={[{ color: color, fontWeight: weight }, styles.poppin_12]} >{title}</Text>;
    if (type == 'Poppin-14') return <Text style={[{ color: color, fontWeight: weight }, styles.poppin_14]} >{title}</Text>;
    if (type == 'Poppin-16') return <Text style={[{ color: color, fontWeight: weight }, styles.poppin_16]} >{title}</Text>;
    if (type == 'Poppin-18') return <Text style={[{ color: color, fontWeight: weight }, styles.poppin_18]} >{title}</Text>;
    if (type == 'Poppin-20') return <Text style={[{ color: color, fontWeight: weight }, styles.poppin_20]} >{title}</Text>;
    if (type == 'Poppin-25') return <Text style={[{ color: color, fontWeight: weight }, styles.poppin_25]} >{title}</Text>;

};
export default Title;
