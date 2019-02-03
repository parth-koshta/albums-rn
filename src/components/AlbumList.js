import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
    componentWillMount(){
        return fetch('https://rallycoding.herokuapp.com/api/music_albums')

        .then((response) => response.json())

        .then((responseJson) => {
        console.log(responseJson[0]);
        })

        .catch((error) => {
        console.error(error);
        });
    }


    render(){
        return (
            <View>
                <Text>List!!!!</Text>
            </View>
        );
    }

}


export default AlbumList;