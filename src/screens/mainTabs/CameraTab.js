import React from 'react';
import { View, Text, StyleSheeet} from 'react-native';
import TabLabel from '../../components/TabLabel';

class CameraTab extends React.Component {

    static navigationOptions = {
        tabBarLabel: ({ focused,tintColor }) => (
         <View style={{width:10}}>
           
         </View>
        ),
      };
    
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Camera</Text>
        </View>
      );
    }
  }
  

  export default CameraTab;