import { useState, useEffect } from 'react';
import { getProgressData, saveProgressData } from '../services/firebase';

const useProgress = () => {
    const [progress, setProgress] = useState({ preScore: 0, postScore: 0, quizScores: {} });

    useEffect(() => {
        const fetchProgress = async () => {
            const data = await getProgressData();
            if (data) {
                setProgress(data);
            }
        };

        fetchProgress();
    }, []);

    const updateProgress = (newData) => {
        const updatedProgress = { ...progress, ...newData };
        setProgress(updatedProgress);
        saveProgressData(updatedProgress);
    };

    return { progress, updateProgress };
};

export default useProgress;