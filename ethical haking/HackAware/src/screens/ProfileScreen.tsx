import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressContext } from '../context/ProgressContext';

const ProfileScreen = () => {
  const { preScore, postScore, improvement } = useContext(ProgressContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.label}>Pre-Test Score: {preScore}</Text>
      <Text style={styles.label}>Post-Test Score: {postScore}</Text>
      <Text style={styles.label}>Improvement: {improvement}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default ProfileScreen;