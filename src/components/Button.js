// @app
import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';

import { styles } from './style';

const Button = ({
    customStyle,
    primary,
    icon,
    titleStyle,
    title,
    callBack }) => {
    return (
        <TouchableOpacity
            style={primary ? styles.primaryBtn : customStyle}
            activeOpacity={0.8}
            onPress={() => callBack && callBack()}
        >
            {icon && icon}
            <Text style={primary ? styles.primaryText : titleStyle}>{title}</Text>
        </TouchableOpacity>
    );
};
export default Button;
