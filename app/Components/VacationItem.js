import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class VacationItem extends Component {
  render() {
    return (
      <View style={styles.vacationItem}>
        <View style={styles.dates}>
          <Text style={styles.cardText}>{this.props.from}</Text>
          <Text>to</Text>
          <Text style={styles.cardText}>{this.props.to}</Text>
        </View>
        <View style={styles.noOfDaysContainer}>
            <Text style={styles.cardText}>5</Text>
            <Text>Days</Text>
        </View>
        <View style={styles.noOfLeavesContainer}>
            <Text style={styles.cardText}>2</Text>
            <Text>Leaves</Text>
        </View>
        <View style={styles.actionsContainer}>
            <Text>Actions</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  vacationItem: {
    flex: 1,
    height: 16,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "stretch",
    paddingBottom: 5,
    elevation: 1,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  dates: {
    flex: 0.3,
    alignItems: "center",
    justifyContent :"center",
    //backgroundColor: "red",
    //paddingLeft: 10
  },
  noOfDaysContainer :{
    flex : 0.2,
    alignItems: "center",
    justifyContent :"center",
    
  },
  noOfLeavesContainer:{
    flex: 0.2,
    alignItems: "center",
    justifyContent :"center",
  },
  actionsContainer:{
    flex : 0.3,
    alignItems: "center",
    justifyContent :"center",
  },
  cardText: {
    fontSize: 24
  },
  cardInfoText:{

  }
});
