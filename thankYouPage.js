import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button, Touchable, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { Center } from 'native-base';
import reactDom from 'react-dom';

export default function thankYouPage() {
    return (
     // container met arrow
     <View style={{backgroundColor:"white", height:"100%"}}> 
     <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
        <Image style={{width:25, height:25, marginTop:30, marginLeft:10,}} source={require('../assets/arrow.png')} />
        <Image style={{width:70, height:60, marginTop:10, marginRight:10,}} source={require('../assets/fyxedballoon.jpeg')}/>
    </View>
    
   {/* // thankyou */}
    <View>
    <Text style={{color:"#FFBF00", textAlign:"center", fontSize:40, marginTop:50, fontWeight:"bold" }}>THANK YOU!</Text>
    </View>
    
    <View>
        <Image 
        source={{uri: 'https://media.giphy.com/media/3oEjI5VtIhHvK37WYo/giphy.gif'}}  
        style={{width:300, height:200, marginTop:70, marginLeft:50}} 
    /></View>
    
    
    {/* Activatie tekst */}
    <View>
    <Text style={{color:"#000000", textAlign:"center", fontSize:15, marginTop:70, fontWeight:"normal" }}>Bedankt voor je registratie! je ontvangt een email met activatielink om jouw account te verifiëren. </Text>
    <Text style={{color:"#FFBF00", textAlign:"center", fontSize:10, marginTop:5, fontWeight:"normal" }}>Geen mail ontvangen? Klik hier</Text>
    </View>

    {/* fyxedlogo */}
    <View style={{width:"100%", height:"100%"}}>
    <Image style={{width:250, height:60, alignItems:"center", marginTop:90, marginLeft:70 }}source={require('../assets/fyxedlogo.png')}/>  
    </View> 
     


    </View> 
    
    );
  }
