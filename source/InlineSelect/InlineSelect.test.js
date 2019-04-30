import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import InlineSelect from './InlineSelect';

const fontSizes = [
  {
    label: '9px',
    value: '9'
  }, {
    label: '10px',
    value: '10'
  }, {
    label: '11px',
    value: '11'
  }, {
    label: '12px',
    value: '12'
  }
];

afterEach(cleanup);

describe('inline-select', () => {
  it('shows correct placeholder', () => {
    const { queryAllByText } = render(<InlineSelect />);
    expect(queryAllByText('Select option').length).toBe(1);
  });

  it('Shows correct title after clicking on item "9px" ', () => {
    const { queryByText, queryAllByText } = render(<InlineSelect defaultItem='english' items={fontSizes} />);
    expect(queryAllByText('Select option').length).toBe(1);
    fireEvent.click(queryByText('Select option'));
    expect(queryAllByText('Select option').length).toBe(1);
    expect(queryAllByText('9px').length).toBe(1);
    fireEvent.click(queryByText('9px'));
    expect(queryAllByText('Select option').length).toBe(0);
    expect(queryAllByText('9px').length).toBe(2);
  });

  it('Shows correct title after clicking on item "10px" ', () => {
    const { queryByText, queryAllByText } = render(<InlineSelect defaultItem='english' items={fontSizes} />);
    expect(queryAllByText('Select option').length).toBe(1);
    fireEvent.click(queryByText('Select option'));
    expect(queryAllByText('Select option').length).toBe(1);
    expect(queryAllByText('9px').length).toBe(1);
    fireEvent.click(queryByText('10px'));
    expect(queryAllByText('Select option').length).toBe(0);
    expect(queryAllByText('9px').length).toBe(1);
    expect(queryAllByText('10px').length).toBe(2);
  });
});
