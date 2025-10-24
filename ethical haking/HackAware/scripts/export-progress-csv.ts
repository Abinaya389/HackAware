import { writeFileSync } from 'fs';
import { ProgressContext } from '../src/context/ProgressContext';

const exportProgressToCSV = async () => {
    const progressData = await ProgressContext.getProgressData(); // Assuming this function fetches user progress data
    const csvRows = [];

    // Add header row
    csvRows.push('User ID,Pre-Test Score,Post-Test Score,Quiz Scores,Timestamp Pre,Timestamp Post');

    // Add data rows
    progressData.forEach(user => {
        const row = [
            user.userId,
            user.pre_score,
            user.post_score,
            JSON.stringify(user.quiz_scores),
            user.timestamp_pre,
            user.timestamp_post
        ].join(',');
        csvRows.push(row);
    });

    // Create CSV file
    const csvString = csvRows.join('\n');
    writeFileSync('user_progress.csv', csvString);
    console.log('Progress data exported to user_progress.csv');
};

exportProgressToCSV();