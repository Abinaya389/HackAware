export interface Lesson {
    id: string;
    title: string;
    content: string;
    duration: number; // duration in seconds
}

export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface UserProgress {
    userId: string;
    preScore: number;
    postScore: number;
    quizScores: Record<string, number>; // lessonId: score
    timestampPre: Date;
    timestampPost: Date;
}