import React from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar} from 'react-native';
import TabLabel from '../../components/TabLabel';
import ChatHead from '../../components/ChatHead';

class ChatsTab extends React.Component {

    static navigationOptions = {
        tabBarLabel: ({ focused,tintColor }) => (
         <TabLabel
         labelText='CHATS'
         no='9'
         showNo={true}/>
        ),
      };
    
    render() {
        var chatData = [{key:'1',name:'Android app',msg:'sure',unread:true,unreadNo:'8',time:'Yesterday'},
        {key:'2',name:'+91 8888888888',msg:'pankaj : 8888888888',unread:false,unreadNo:'0',time:'3/26/19'},
        {key:'3',name:'PR Sharma',msg:'+91 8888888888 : Haven\'t sub...',unread:false,unreadNo:'0',time:'2:43 PM'},
        {key:'4',name:'Ariana',msg:'https://www.instuctables.com/i...',unread:true,unreadNo:'1',time:'10:17 PM'},
        {key:'5',name:'PL Batch 2020',msg:'+91 8888888888 : Analytical reas...',unread:false,unreadNo:'0',time:'2:43 PM'},
        {key:'6',name:'Megan',msg:'APP MOBI Still downloading...',unread:false,unreadNo:'0',time:'3/27/19'},
        {key:'7',name:'Devops',msg:'Aryan : Nahi',unread:false,unreadNo:'0',time:'3/27/19'},
    ]
      return (
        <View >
        <FlatList
          data={chatData}
          
          renderItem={({item}) =>
           <ChatHead 
            name={item.name} 
            msg={item.msg}
            unread={item.unread}
            unreadNo={item.unreadNo}
            time={item.time}
            /> }
        />
        </View>
      );
    }
  }
  

  export default ChatsTab;