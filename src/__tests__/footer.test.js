/* eslint-disable */

import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../components/footer';

test('Testing Footer component', () => {

  const component = renderer.create(
    <Footer copyright="2018" builtBy="Testing" email="rskwiat@gmail.com" />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

