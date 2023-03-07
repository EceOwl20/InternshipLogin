import {View, ImageBackground,Text} from 'react-native'
import React from 'react'
 

 const Background = ({children}) => {
  return (
    <View>
      <ImageBackground source={require('../images/akdenizLogo.jpg')}
       style={{height:'80%'}}/>
       
       <View style={{position:'absolute'}}>
        {children}
       </View>
    </View>
  );
}

export default Background;