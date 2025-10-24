import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import quizData from '../data/quizzes/quizA.json'; // Adjust the path as necessary

const QuizScreen = () => {
    const navigation = useNavigation();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const currentQuestion = quizData.questions[currentQuestionIndex];

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < quizData.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizFinished(true);
        }
    };

    const handleFinishQuiz = () => {
        Alert.alert('Quiz Finished', `Your score is ${score}/${quizData.questions.length}`, [
            { text: 'OK', onPress: () => navigation.navigate('HomeScreen') },
        ]);
    };

    useEffect(() => {
        if (isQuizFinished) {
            handleFinishQuiz();
        }
    }, [isQuizFinished]);

    return (
        <View style={{ padding: 20 }}>
            {!isQuizFinished ? (
                <>
                    <Text style={{ fontSize: 20 }}>{currentQuestion.question}</Text>
                    {currentQuestion.answers.map((answer, index) => (
                        <Button
                            key={index}
                            title={answer.text}
                            onPress={() => handleAnswer(answer.isCorrect)}
                        />
                    ))}
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

export default QuizScreen;