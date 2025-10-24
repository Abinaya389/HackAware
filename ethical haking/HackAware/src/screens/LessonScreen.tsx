import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VideoPlayer from '../components/VideoPlayer';
import { useRoute } from '@react-navigation/native';
import lessons from '../data/lessons';

const LessonScreen = () => {
    const route = useRoute();
    const { lessonId } = route.params;
    const lesson = lessons[lessonId];

    return (
        <View style={styles.container}>
            <VideoPlayer source={lesson.videoUrl} />
            <Text style={styles.summary}>{lesson.summary}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    summary: {
        marginTop: 16,
        fontSize: 16,
        color: '#333',
    },
});

export default LessonScreen;