import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../Navigation';

test('Application should mount', () => {
  const component = shallow(<Navigation />);
  expect(component).toMatchSnapshot();
})