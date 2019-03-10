import React from 'react';
import { shallow } from 'enzyme';

import Select from './Select';

describe('<MyComponent />', () => {
  it('renders 1 <Select /> components', () => {
    const wrapper = shallow(<Select />);
    expect(wrapper.length).toEqual(1);
  });
  it('renders 1 <Select /> components', () => {
    const wrapper = shallow(<Select />);
    expect(wrapper.text()).toEqual('Please select option');
  });
});
