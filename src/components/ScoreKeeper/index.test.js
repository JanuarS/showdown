import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ScoreKeeper from './index';

test('renders without crashing', () => {
  render(<ScoreKeeper />);
});

test('matches snapshot', () => {
    const {asFragment} = render(<ScoreKeeper />);
    expect(asFragment()).toMatchSnapshot();
});

test('add button className', () => {
    const {getByText} = render(<ScoreKeeper />);
    expect(getByText("1 Point")).toHaveClass('ScoreKeeper-add');
});

test('undo button className', () => {
    const {getByText} = render(<ScoreKeeper />);
    expect(getByText("UNDO")).toHaveClass('ScoreKeeper-undo');
});

test('add points', () => {
    const {getByText} = render(<ScoreKeeper />);
    const count = getByText("0");
    const button = getByText("1 Point");
    
    expect(count).toHaveTextContent("0");
    fireEvent.click(button);
    expect(count).toHaveTextContent("1");
    expect(count).not.toHaveTextContent("0");
});