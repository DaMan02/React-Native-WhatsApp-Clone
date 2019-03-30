import React from 'react';
import { View, Text, StyleSheet,FlatList,TouchableOpacity,TouchableHighlight} from 'react-native';
import Colors from '../assets/colors';
import {Overlay} from 'react-native-elements';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

class PopUpMenu extends React.Component {
    
    render() {

     var mainMenuArray = [
         {key:'New group'},
         {key:'New broadcast'},
         {key:'WhatsApp Web'},
         {key:'Starred messages'},
         {key:'Settings'}];

      return (
        <Overlay  isVisible={true} windowBackgroundColor="rgba(255, 255, 255, 0)" 
          overlayStyle={styles.main}
          animationType='fade'
          height={230}
          onBackdropPress={this.props.onBackdropPress}>
         <FlatList
          data={mainMenuArray}
          scrollEnabled={false}
          renderItem={({item}) => <TouchableNativeFeedback>
              <Text style={styles.menu}>{item.key}</Text>
              </TouchableNativeFeedback> }
         />
        </Overlay> 
      );
    }
  }
  

  const styles = StyleSheet.create({
      main:{
        width:200,
        position:'absolute',
        top:4,
        right:4,
        backgroundColor:'white'
      },
     menu:{
         color:Colors.blackText,
         fontSize:16,
         paddingTop:10,
         paddingBottom:10,
         marginStart:10
     }
  })

  export default PopUpMenu;