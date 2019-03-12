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
  /*
  it('renders 1 <Select /> components', () => {
    const wrapper = shallow(<Select />);
    expect(wrapper.text()).toEqual('Please select option ');
  });
  */
});
