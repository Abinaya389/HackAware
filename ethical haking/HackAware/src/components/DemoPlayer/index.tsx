import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

const DemoPlayer = () => {
    const demoLinks = [
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
        <View>
            <Text>Demo Player</Text>
            {demoLinks.map((demo, index) => (
                <Button
                    key={index}
                    title={demo.title}
                    onPress={() => openDemo(demo.url)}
                />
            ))}
        </View>
    );
};

export default DemoPlayer;