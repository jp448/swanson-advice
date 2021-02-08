import { render, screen, fireEvent } from '@testing-library/react';
import React from "react";
import Search from './Search';

test('renders the correct placeholder text', () => {
    render(<Search />);
    expect(screen.getByPlaceholderText('...life')).toBeInTheDocument();
});

// test('getQuote function called', () => {
//     render(<Search />);
//     const getQuote = jest.fn();
//     const input = screen.getByPlaceholderText('...life');
//     fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
//     expect(getQuote).toBeCalled();
// });

// test('getQuote returns no comment when input is invalid', () => {
//     render(<Search />);
//     const getQuote = jest.fn();
//     const input = screen.getByPlaceholderText('...life');
//     fireEvent.change(input, { target: { value: 'test' } });
//     fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
//     expect(getQuote).toBe('no comment');
// });




