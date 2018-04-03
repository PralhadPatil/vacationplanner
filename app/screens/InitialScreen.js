import React, {Component} from "react";
import {View, Image, StyleSheet, Text} from 'react-native';

export default class InitalScreen extends Component {
    render(){
        return(
            <View style={styles.imageContainer}>
                <Image source={require("../images/travel.png")}></Image>
                <Text>Upload your holiday calendar and we'll suggest you list of hoidays you can plan</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
});