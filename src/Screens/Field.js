import {TextInput, Text} from 'react-native';
import React from 'react';
import {darkBlue} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: 'darkblue',
        paddingHorizontal: 10,
        width: '80%',
        backgroundColor: 'white',
        marginVertical: 10,
      }}
      placeholderTextColor={darkBlue}></TextInput>
  );
};

export default Field;
