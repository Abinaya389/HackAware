import { render, screen, fireEvent } from '@testing-library/react';
import Quiz from '../../src/components/Quiz';

describe('Quiz Component', () => {
  const mockQuestions = [
    {
      question: 'What is phishing?',
      options: ['A type of fish', 'A cyber attack', 'A programming language'],
      answer: 'A cyber attack',
    },
    {
      question: 'What should you do if you receive a suspicious link?',
      options: ['Click it', 'Ignore it', 'Verify the sender'],
      answer: 'Verify the sender',
    },
  ];

  test('renders quiz questions and options', () => {
    render(<Quiz questions={mockQuestions} />);

    expect(screen.getByText('What is phishing?')).toBeInTheDocument();
    expect(screen.getByText('A type of fish')).toBeInTheDocument();
    expect(screen.getByText('A cyber attack')).toBeInTheDocument();
    expect(screen.getByText('A programming language')).toBeInTheDocument();
  });

  test('allows user to select an answer', () => {
    render(<Quiz questions={mockQuestions} />);

    const option = screen.getByText('A cyber attack');
    fireEvent.click(option);

    expect(option).toHaveClass('selected'); // Assuming selected class is added on selection
  });

  test('submits the quiz and shows results', () => {
    render(<Quiz questions={mockQuestions} />);

    fireEvent.click(screen.getByText('A cyber attack')); // Select answer
    fireEvent.click(screen.getByText('Submit')); // Assuming there's a submit button

    expect(screen.getByText('You scored: 100%')).toBeInTheDocument(); // Assuming this is the result message
  });
});