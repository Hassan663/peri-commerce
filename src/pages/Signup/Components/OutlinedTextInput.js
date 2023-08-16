import React from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

import Colors from '../../../styles/Colors';
import { styles } from '../styles';
import { useState } from 'react';

const OutlinedTextInput = ({ title, val, marginY, Password, placeHolder, onChange }) => {
  const [open, setOpen] = useState(true)
  return (
    <View style={[styles.inputContainer, { marginVertical: marginY ? marginY : 10 }]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.textInputContainer}>
        {!Password ?
          <TextInput
            value={val}

            placeholder={placeHolder && placeHolder}
            onChangeText={(val) => onChange(val)}
            style={styles.input(false)} />
          :
          <>
            <View style={styles.passwordContainer}>
              <View style={{ flex: 9, }}>
                <TextInput
                  value={val}

                  placeholder={placeHolder && placeHolder}
                  onChangeText={(val) => onChange(val)}
                  secureTextEntry={open ? true : false}
                  style={styles.input(true)} />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setOpen(!open)}
                style={styles.eyeContainer}>
                <Feather
                  color={Colors.black}
                  size={RFPercentage(3)}
                  name={open ? 'eye-off' : `eye`}
                />
              </TouchableOpacity>
            </View>

          </>
        }
      </View>
    </View >
  );
};

export default OutlinedTextInput;
