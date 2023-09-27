import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button, Touchable, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { Center } from 'native-base';
import reactDom from 'react-dom';

export default function activationPage() {
    return (
    // container met arrow
    <View style={{backgroundColor:"white", height:"100%"}}> 
     <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
        <Image style={{width:25, height:25, marginTop:30, marginLeft:10,}} source={require('../assets/arrow.png')} />
        <Text style={{fontSize: 20, color:"black", marginTop:30, marginLeft:1, fontWeight:"bold"}}>Upload hier jouw foto's</Text>
        <Image style={{width:70, height:60, marginTop:10, marginRight:10,}} source={require('../assets/fyxedballoon.jpeg')}/>
    </View>
    
    {/* Activatie tekst */}
    <View style={{height: '15%', width:'100%', marginTop:40,}}>
      <Text style={{color:"#FFBF00", textAlign:"center", fontSize:30, marginTop:10, fontWeight:"bold", fontStyle:'italic' }}>De éérste indruk maak je maar één keer!</Text>
    </View>

    {/* button upload */}
    <View style={{marginTop:5, width:"100%", justifyContent:"center", alignItems:"center"}}>
        <View style={{height:45, width:105, backgroundColor:"#FFBF00", justifyContent:"center",borderRadius:10}}>
            <Text style={{color:"white", textAlign:"center", fontWeight:"bold"}}>Upload</Text>
        </View>
    </View>

{/* fotos upload */}
<View style={{width:"100%", height:400, justifyContent:'center', alignItems:'center'}}>

{/* BOX 1 */}
  <View style={{width:"90%", flexDirection:"row", justifyContent:'space-evenly'}}>
     <View style={{height:150, width: 100, borderRadius:5, backgroundColor:"#FFBF00"}}>
          <Text style={{fontSize:50, textAlign:'center', marginTop:40}}>+</Text>
     </View>
    
{/* BOX 2 */}
      <View style={{height:150, width: 100,  borderRadius:5, backgroundColor:"#D3D3D3"}}>
          <Text style={{fontSize:50, textAlign:'center', marginTop:40}}>+</Text>
      </View>
    
{/* BOX 3 */}
      <View style={{height:150, width: 100, borderRadius:5, backgroundColor:"#FFBF00"}}>
          <Text style={{fontSize:50, textAlign:'center', marginTop:40}}>+</Text>
      </View>

  </View>

<View style={{flexDirection:"row", paddingTop:15}}>

  {/* Tweede rij foto's box */}

{/* BOX 4 */}
      <View style={{width:"90%", flexDirection:"row", justifyContent:'space-evenly'}}>
  <View style={{height:150, width: 100, borderRadius:5, backgroundColor:"#D3D3D3"}}>
      <Text style={{fontSize:50, textAlign:'center', marginTop:40}}>+</Text>
  </View>
  
  {/* BOX 5 */}
  <View style={{height:150, width: 100, borderRadius:5, backgroundColor:"#FFBF00"}}>
      <Text style={{fontSize:50, textAlign:'center', marginTop:40}}>+</Text>
  </View>

  {/* BOX 6 */}
  <View style={{height:150, width: 100,  borderRadius:5, backgroundColor:"#D3D3D3"}}>
  <Text style={{fontSize:50, textAlign:'center', marginTop:40}}>+</Text>
  </View>

      </View>

      </View>
    </View>

    {/* fyxedlogo */}
    <View style={{width:"100%", height:"100%"}}>
    <Image style={{width:250, height:60, alignItems:"center", marginTop:10, marginLeft:70 }}source={require('../assets/fyxedlogo.png')}/>  
    </View> 
     


    </View> 
    
    );
  }
