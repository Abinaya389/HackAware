import React from 'react';
import { View, Text, Button, Linking } from 'react-native';
import DemoPlayer from '../components/DemoPlayer';

const DemoScreen = () => {
  const demos = [
    {
      title: 'Fake SMS Simulation',
      url: 'demo/mock_screens/fake_sms.html',
    },
    {
      title: 'App Permissions Walkthrough',
      url: 'demo/mock_screens/permissions_walkthrough.html',
    },
    {
      title: 'Enable Updates Walkthrough',
      url: 'demo/mock_screens/enable_updates.html',
    },
  ];

  const openDemo = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Demo Simulations</Text>
      {demos.map((demo, index) => (
        <View key={index} style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 18 }}>{demo.title}</Text>
          <Button title="Open Demo" onPress={() => openDemo(demo.url)} />
        </View>
      ))}
      <DemoPlayer />
    </View>
  );
};

export default DemoScreen;