
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from './Header';
import CategoryList from './CategoryList';
import TaskList from './TaskList';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <CategoryList />
      <TaskList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
