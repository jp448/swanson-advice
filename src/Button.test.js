import { render, screen, fireEvent } from '@testing-library/react';
import React from "react";
import Button from './Button';

test('renders button', () => {
    const getRandomQuote = jest.fn();
    render(<Button getRandomQuote={getRandomQuote} text="Get Wisdom"/>);
    const widsomButton = screen.getByText('Get Wisdom');
    expect(widsomButton).toBeInTheDocument();
});

test('calls getRandomQuote prop when clicked', () => {
    const getRandomQuote = jest.fn();
    render(<Button getRandomQuote={getRandomQuote} text="Get Wisdom"/>);
    fireEvent.click(screen.getByText(/Get Wisdom/i));
    expect(getRandomQuote).toHaveBeenCalledTimes(1);
  });

//   test('getRandomQuote returns quote', () => {
//     const getRandomQuote = jest.fn();
//     render(<Button getRandomQuote={getRandomQuote} text="Get Wisdom"/>);
//     fireEvent.click(screen.getByText(/Get Wisdom/i));
//     expect(getRandomQuote).toBe('no comment');
//   });