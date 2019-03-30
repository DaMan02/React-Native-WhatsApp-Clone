import React from 'react';
import { View,Text, StyleSheet,Image } from 'react-native';
import Colors from '../assets/colors';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';


class ChatHead extends React.Component {

    render() {
        return (
            <TouchableNativeFeedback>
                {/* <View style={styles.divider}></View> */}
                <Divider style={styles.divider}/>

                  <View style={styles.container}>

                     <View style={styles.profilePic}>
                       <Image source={require('../assets/images/person.png')}
                        style={{ alignSelf: 'center', resizeMode: 'contain', width: 65, height: 65 }} />
                     </View>
                    
                    <View style={{justifyContent:'center'}}>
                        <Text style={styles.name}>{this.props.name}</Text>
                        <Text style={styles.msg}>{this.props.msg}</Text>
                    </View>

                    <View style={{position:'absolute',right:10}}>
                        <Text style={{...styles.time,color:this.props.unread?Colors.accent:Colors.lighterGrey}}>{this.props.time}</Text>
                        <View style={{...styles.icon,opacity:this.props.unread?1:0}}>
                        <Text style={{color:'white',alignSelf:'center',fontWeight:'bold',fontSize:11}}>{this.props.unreadNo}</Text></View>
                    </View>

                </View>
            </TouchableNativeFeedback>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        padding: 6,
        flex:1
    },
    profilePic: {
        borderRadius: 50,
        height: 55,
        width: 55,
        backgroundColor:Colors.lightestGrey,
        marginStart: 10
    },
    name: {
        color: Colors.blackText,
        fontWeight: '500',
        fontSize: 17,
        paddingStart: 14
    },
    msg: {
        paddingStart: 14
    },
    divider:{
        marginStart:84,
        marginEnd:12,
    },
    time:{
        fontSize:12
    },
    icon:{
      height:20,
      width:20,
      alignSelf:'flex-end',
      justifyContent:'center',
      marginTop:10,
      borderRadius:40,
      backgroundColor:Colors.accent
    }
})

export default ChatHead;