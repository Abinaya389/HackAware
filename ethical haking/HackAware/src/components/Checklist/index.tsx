import React from 'react';
import { View, Text, StyleSheet, CheckBox } from 'react-native';

const Checklist = () => {
  const checklistItems = [
    { id: 1, text: 'Enable updates — Keep OS & apps up to date.', completed: false },
    { id: 2, text: "Don't install unknown apps — Only use Play Store / App Store.", completed: false },
    { id: 3, text: 'Review app permissions — Grant least privileges.', completed: false },
    { id: 4, text: 'Use strong PIN & 2FA — Protect accounts and SIM.', completed: false },
    { id: 5, text: 'Avoid public Wi‑Fi for sensitive tasks — use VPN if needed.', completed: false },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safety Checklist</Text>
      {checklistItems.map(item => (
        <View key={item.id} style={styles.item}>
          <CheckBox value={item.completed} />
          <Text style={styles.itemText}>{item.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Checklist;