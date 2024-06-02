import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-web';

const Header = () => {
return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Hello, Devs</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 3,
    backgroundColor: 'black',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Header;
