import React from 'react';
import { View, Text, StyleSheet, ToastAndroid, StatusBar} from 'react-native';
import TabLabel from '../../components/TabLabel';

class StatusTab extends React.Component {
    static navigationOptions = {
        tabBarLabel: ({ focused, tintColor }) => (
            <TabLabel
                labelText='STATUS'
                no='7'
            />
        ),
    };
    
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Chats!</Text>
        </View>
      );
    }
  }
  

  export default StatusTab;