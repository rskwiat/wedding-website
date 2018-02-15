/* eslint-disable */

import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../views/home';

test('Test Render of the Home component', () => {

  const component = renderer.create(<Home />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
