import React, {Component} from "react";
import { View, Text, StyleSheet} from "react-native";

import VacationItem from "../Components/VacationItem";
import Header from "../Components/Header";
export default class HolidayList extends Component{
    constructor(props) {
        super(props);
        let holidayList = require("../data/holidaylist.json").holidayList;
        this.state = {holidayList : holidayList}
    }
    render(){
        
        //console.log(holidayList);
        return(
        <View style={styles.container}>
            <Header></Header>
            {this.state.holidayList.map((obj,index) => <VacationItem key={index} from={obj.from} to={obj.to} />)}
        </View>);
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems : "center",
        //justifyContent : "center",
        alignSelf : "stretch"
    }
});