import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header title', () => {
  render(<App />);
  expect(screen.getByText('Welcome to the Ron Swanson Advice App')).toBeInTheDocument();
});

test('renders ron swanson pic', () => {
  render(<App />);
  expect(screen.getByAltText('an outline of ron swanson')).toBeInTheDocument();
});

test('ask ron anything', () => {
  render(<App />);
  expect(screen.getByText('Ask Ron Anything!')).toBeInTheDocument();
});

test('or get random request', () => {
  render(<App />);
  expect(screen.getByText('Or Request Random Ron Wisdom')).toBeInTheDocument();
});