import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import ChatsTab from './ChatsTab';
import StatusTab from './StatusTab';
import CallsTab from './CallsTab';
import CameraTab from './CameraTab';
import Colors from '../../assets/colors';

const TabNavigator = createMaterialTopTabNavigator({
    // Camera:CameraTab,
    Chats: ChatsTab,
    Status: StatusTab,
    Calls:CallsTab,
   },
    {    tabBarOptions: {
            style: {
                backgroundColor: Colors.primaryColor,
            },
            indicatorStyle: {
                backgroundColor: 'white',
            }
        },
    });

export default createAppContainer(TabNavigator);