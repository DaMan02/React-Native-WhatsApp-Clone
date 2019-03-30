import React from 'react';
import { View, StyleSheet, TouchableOpacity, StatusBar,Image } from 'react-native';
import Colors from '../assets/colors';
import { Appbar } from 'react-native-paper';
import PopUpMenu from '../components/PopUpMenu';

import FeedTabs from './mainTabs/FeedTabs';




class MainActivity extends React.Component {

    state = {
        showMenu: false
    }

    static navigationOptions = {
        header: null,
    };

    _onMore = () => { this.setState({ showMenu: true }) };
    _onSearch = () => { };

    showPopUp() {
        if (this.state.showMenu)
            return (
                <PopUpMenu onBackdropPress={() => this.setState({ showMenu: false })}
                />
            )
    }

    render() {
        return (
            <View style={styles.master}>
                <StatusBar backgroundColor={Colors.statusbar} barStyle="light-content" />
                <TouchableOpacity activeOpacity={1} >
                    <Appbar.Header style={styles.header} >
                        {this.showPopUp()}
                        <Appbar.Content
                            title="WhatsApp"
                        />
                        <Appbar.Action icon="search" onPress={this._onSearch} />
                        <Appbar.Action icon="more-vert" onPress={this._onMore} />
                    </Appbar.Header>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.fab}>
                    <Image source={require('../assets/images/message.png')}
                        style={{ alignSelf: 'center', resizeMode: 'contain', width: 25, height: 25 }} />
                </TouchableOpacity>
                <TouchableOpacity  style={styles.fabBack}>                   
                </TouchableOpacity>

                <FeedTabs />
            </View>

        );
    }
}



const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primaryColor,
    },
    master: {
        flex: 1
    },
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: 56,
        width: 56,
        justifyContent:'center',
        borderRadius: 50,
        backgroundColor: Colors.accent,
        elevation:100,
        shadowColor:'grey',
        shadowRadius:10
    },
    fabBack:{
        position: 'absolute',
        bottom: 17.8,
        right: 19,
        height: 58,
        width: 58,
        borderRadius: 50,
        backgroundColor:'#E1E1E1'
    }
});


export default MainActivity;