import { render, screen } from '@testing-library/react';
import { ProgressContextProvider } from '../../src/context/ProgressContext';
import ProfileScreen from '../../src/screens/ProfileScreen';

describe('ProfileScreen', () => {
  test('renders user progress correctly', () => {
    render(
      <ProgressContextProvider>
        <ProfileScreen />
      </ProgressContextProvider>
    );

    const progressElement = screen.getByText(/Your Progress/i);
    expect(progressElement).toBeInTheDocument();
  });

  test('displays pre-test and post-test scores', () => {
    render(
      <ProgressContextProvider>
        <ProfileScreen />
      </ProgressContextProvider>
    );

    const preTestScore = screen.getByText(/Pre-test Score:/i);
    const postTestScore = screen.getByText(/Post-test Score:/i);
    expect(preTestScore).toBeInTheDocument();
    expect(postTestScore).toBeInTheDocument();
  });
});