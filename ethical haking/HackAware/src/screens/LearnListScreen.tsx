import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import lessons from '../data/lessons'; // Assuming lessons are imported from JSON files

const LearnListScreen = () => {
    const navigation = useNavigation();

    const renderLessonItem = ({ item }) => (
        <TouchableOpacity
            style={styles.lessonItem}
            onPress={() => navigation.navigate('LessonScreen', { lessonId: item.id })}
        >
            <Text style={styles.lessonTitle}>{item.title}</Text>
            <Text style={styles.lessonDuration}>{item.duration}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Available Lessons</Text>
            <FlatList
                data={lessons}
                renderItem={renderLessonItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    lessonItem: {
        padding: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 8,
    },
    lessonTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    lessonDuration: {
        fontSize: 14,
        color: '#666',
    },
});

export default LearnListScreen;