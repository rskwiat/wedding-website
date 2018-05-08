import React from 'react';
import { shallow } from 'enzyme';
import NavigationLink from '../NavigationLink';

test('Application should mount', () => {
  const component = shallow(<NavigationLink title="test item" url="/" />);
  expect(component).toMatchSnapshot();
})