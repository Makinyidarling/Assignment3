import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, Button, TextInput } from 'react-native';

const initialTasks = [
  { key: '1', task: 'Complete React Native project' },
  { key: '2', task: 'Read a book' },
  { key: '3', task: 'Exercise for 30 minutes' },
  { key: '4', task: 'Cook dinner' },
  { key: '5', task: 'Study for exams' },
  { key: '6', task: 'Write a blog post' },
  { key: '7', task: 'Call family' },
  { key: '8', task: 'Plan weekend trip' },
  { key: '9', task: 'Clean the house' },
  { key: '10', task: 'Go grocery shopping' },
  { key: '11', task: 'Fix the bike' },
  { key: '12', task: 'Learn a new language' },
  { key: '13', task: 'Watch a documentary' },
  { key: '14', task: 'Meditate for 20 minutes' },
  { key: '15', task: 'Practice coding' },
];

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { key: String(tasks.length + 1), task: newTask }]);
      setNewTask('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text style={styles.task}>{item.task}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  task: {
    fontSize: 18,
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default TaskList;
