import React, {Component} from 'react';
import {Image, View} from 'react-native';

export default class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Image source={pic} style={{width: 193, height: 110}}/>
            </View>
        );
    }
}
