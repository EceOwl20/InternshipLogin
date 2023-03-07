import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button({bColor, buttonLabel, textColor, Press}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: 'darkblue',
        borderRadius: 100,
        alignItems: 'center',
        width:350,
        paddingVertical:5,
        marginVertical:10
        
      }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
        {buttonLabel}
      </Text>
    </TouchableOpacity>
  );
}
