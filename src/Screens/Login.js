import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import Background from './Background';
import {darkblue} from './Constants';
import Field from './Field';
import Button from './Button';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const {height,width} = Dimensions.get('window');

const Login = (props) => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 410, marginVertical: 370}}>
        
        <View
          style={{
            backgroundColor: 'orange',
            height: 700,
            width: 400,
            borderTopLeftRadius: 130,
            paddingTop: 15,
            alignItems: 'center',
          }}>
            <Text style={{color: 'darkblue', fontSize: 40, fontWeight: 'bold'}}>
          Login Page
        </Text>
          
          <Field placeholder="Email" keyboardType={'email.address'} />
          <Field placeholder="password" secureTextEntry={true} />
          <View
            style={{alignItems: 'flex-end', width: '80%', paddingRight: 20}}>
            <Text style={{color: 'grey', fontSize: 15}}>Forgot password</Text>
          </View>
          <Button
            textColor="white"
            bColor={darkblue}
            buttonLabel="Signup"
            Press={() => {alert('Account created') 
            props.navigation.navigate("Signup")}}
          />
          
          <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <Text style={{color: 'grey', fontSize: 19, fontWeight: 'bold'}}>
              Don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
              >
              <Text style={{color: 'darkblue', fontWeight: 'bold', fontSize: 20}}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </Background>
  );
};

export default Login;
