import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import TaskItem from "./components/TaskItem";

export default function App() {

  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([])

  const handleTask = () => {
    setTasks([...tasks, task])
    setTask('')
  }

  const completeTodo = (index) => {
    let itemsCopy = [...tasks];
    itemsCopy.splice(index, 1);

    setTasks(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todo App</Text>

        <View style={styles.items}>
          {tasks.map((item, index) => <TouchableOpacity onPress={() => completeTodo(index)}><TaskItem text={item}
                                                                                                      key={index}/></TouchableOpacity>)}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput placeholder={'Enter todos...'} style={styles.input} onChangeText={text => setTask(text)}
                   value={task}/>
        <TouchableOpacity onPress={() => handleTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    marginBottom: 15,
    fontSize: 24,
    fontWeight: 'bold'
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  addText: {},

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#FFF',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
    paddingLeft: 30
  }
});
