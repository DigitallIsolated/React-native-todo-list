import React from 'react';
import {KeyboardAvoidingView, Platform, Text, TextInput, View} from "react-native";
import {StyleSheet} from "react-native";

const TaskItem = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <Text>{text}</Text>
        </View>
        <View style={styles.checkBox}>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  item: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 12,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  itemLeft: {
    marginLeft: 15,
    alignItems: 'center'
  },

  checkBox: {
    width: 12,
    height: 12,
    borderColor: 'blue',
    borderRadius: 5,
    borderWidth: 2,
    marginTop: 3
  }
})

export default TaskItem;