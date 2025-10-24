import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import quizData from '../../data/quizzes/quizA.json'; // Adjust the path as needed

const Quiz = () => {
    const navigation = useNavigation();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            Alert.alert('Quiz Completed', `Your score: ${score + (isCorrect ? 1 : 0)} out of ${quizData.length}`, [
                { text: 'OK', onPress: () => navigation.goBack() },
            ]);
        }
    };

    const currentQuestion = quizData[currentQuestionIndex];

    return (
        <View>
            <Text>{currentQuestion.question}</Text>
            {currentQuestion.answers.map((answer, index) => (
                <Button
                    key={index}
                    title={answer.text}
                    onPress={() => handleAnswer(answer.isCorrect)}
                />
            ))}
        </View>
    );
};

export default Quiz;