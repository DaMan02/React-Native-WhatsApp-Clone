import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Colors from '../assets/colors';

class TabLabel extends React.Component {
    
    render() {
      return (
        <View style={styles.main}>
        <Text style={styles.label}>{this.props.labelText}</Text>
        <View style={{...styles.iconIndicator,opacity:this.props.showNo?1:0}}>
        <Text style={styles.no}>{this.props.no}</Text></View>
      </View> 
      );
    }
  }
  

  const styles = StyleSheet.create({
      main:{
        paddingStart:5,
        paddingEnd:5,
        flexDirection:'row',
        paddingTop:5,
        paddingBottom:5
      },
      label:{
        color:'white',
        fontWeight:'bold'
      },
      iconIndicator:{
        backgroundColor:'white',
        marginStart:5,
        height:18
        ,alignSelf:'center',
        width:18,
        borderRadius:50
      },
      no:{
          color:Colors.primaryColor,
          alignSelf:'center',
          fontSize:12,
          fontWeight:'500'
          
      }
  })

  export default TabLabel;