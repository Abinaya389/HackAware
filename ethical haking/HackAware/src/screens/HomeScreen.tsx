import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to HackAware</Text>
            <Text style={styles.subtitle}>Your guide to online safety</Text>
            <Button
                title="Start Learning"
                onPress={() => navigation.navigate('LearnList')}
            />
            <Button
                title="Take the Quiz"
                onPress={() => navigation.navigate('Quiz')}
            />
            <Button
                title="View Checklist"
                onPress={() => navigation.navigate('Checklist')}
            />
            <Button
                title="Demo Simulations"
                onPress={() => navigation.navigate('Demo')}
            />
            <Button
                title="Profile"
                onPress={() => navigation.navigate('Profile')}
            />
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
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
});

export default HomeScreen;