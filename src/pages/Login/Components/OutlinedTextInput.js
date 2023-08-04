import React from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  View,
  TextInput,
  StyleSheet,
  Text
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

import Colors from '../../../styles/Colors';
import { styles } from '../styles';
import { useState } from 'react';

const OutlinedTextInput = ({ title, Password }) => {
  const [open, setOpen] = useState(true)
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ flexDirection: 'row', backgroundColor: "red", width: "100%" }}>
        {!Password ?
          <TextInput style={styles.input} />
          :
          <>
            <View style={{ flex: 9, backgroundColor: 'red' }}>
              <TextInput secureTextEntry={Password ? true : false} style={styles.input} />
            </View>
            <View style={{ flex: 1, backgroundColor: 'blue' ,justifyContent:'center',alignItems:"center"}}>
              <Feather
                color={Colors.black}
                size={RFPercentage(3)}
                name={open ? 'eye-off' : `eye`}
              />
            </View>
          </>
        }
      </View>
    </View>
  );
};

export default OutlinedTextInput;
