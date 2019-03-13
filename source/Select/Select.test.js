import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Select from './Select';

afterEach(cleanup);

describe('inline-select', () => {
  it('renders 1 <Select /> components', () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <Select />
    );
    expect(getByText('Please select option')).toBeInTheDocument();
  });

  it('Shows an element from the list after clicking the select ', () => {
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

    const { getByText, getByTestId, container, asFragment } = render(
      <Select defaultSelected='english' optionList={fontSizes} />
    );
    expect(getByText('Please select option')).toBeInTheDocument();
    fireEvent.click(getByText(/Please select option/i));
    expect(getByText('Please select option')).toBeInTheDocument();
    expect(getByText('12px')).toBeInTheDocument();
  });
});
