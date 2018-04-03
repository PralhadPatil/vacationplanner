import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";

export default class Header extends Component {
    render(){
        return(
            <View style={styles.headerStyle}>
                <Text style={styles.headerText}>Vacation Planner</Text>
            </View>
        );
    }
}

const headerColor = "#2C734D";
const styles = StyleSheet.create({
        headerStyle : {
            justifyContent : "center",
            alignSelf : "stretch",
            alignItems : "center",
            paddingTop : 20,
            paddingBottom : 20,
            paddingLeft : 20,
            paddingRight : 20,
            elevation : 2,
           // backgroundColor : "#64ACEB"
           backgroundColor : headerColor
        },
        headerText : {
            fontSize : 24,
            color : "#ffffff"
        }
    }
);