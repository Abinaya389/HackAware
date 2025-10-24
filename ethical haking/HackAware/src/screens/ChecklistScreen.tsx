import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ChecklistScreen = () => {
  const checklistItems = [
    { id: 1, text: 'Enable updates — Keep OS & apps up to date.' },
    { id: 2, text: "Don't install unknown apps — Only use Play Store / App Store." },
    { id: 3, text: 'Review app permissions — Grant least privileges.' },
    { id: 4, text: 'Use strong PIN & 2FA — Protect accounts and SIM.' },
    { id: 5, text: 'Avoid public Wi‑Fi for sensitive tasks — use VPN if needed.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safety Checklist</Text>
      <ScrollView>
        {checklistItems.map(item => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.itemText}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
});

export default ChecklistScreen;