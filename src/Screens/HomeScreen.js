import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Background from './Background';
import Button from './Button';
import {darkBlue, darkGreen} from './Constants';

const HomeScreen = (props) => {
  return (
    <Background>
      <View style={{marginHorizontal: 32, marginVertical: 400}}>
        <Text style={{color: 'darkblue', fontSize: 40, fontWeight: 'bold'}}>
          Intership
        </Text>
        <Text style={{color: 'darkblue', marginBottom:40}}>Let's Start</Text>

        <Button bColor="darkblue" textColor={'white'} buttonLabel="Login" Press={() =>props.navigation.navigate("Login")} />
        <Text>hellu</Text>
        <Button bColor="darkblue" textColor={'white'} buttonLabel="Signup" Press={() =>props.navigation.navigate("Signup")}/>
        

        
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
