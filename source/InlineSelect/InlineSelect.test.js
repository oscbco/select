import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect';

import InlineSelect from './InlineSelect';

afterEach(cleanup);

describe('inline-select', () => {
  it('renders 1 <InlineSelect /> components', () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <InlineSelect />
    );
    expect(getByText('Select option')).toBeInTheDocument();
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
      <InlineSelect defaultItem='english' items={fontSizes} />
    );
    expect(getByText('Select option')).toBeInTheDocument();
    fireEvent.click(getByText(/Select option/i));
    expect(getByText('Select option')).toBeInTheDocument();
    expect(getByText('12px')).toBeInTheDocument();
  });
});
