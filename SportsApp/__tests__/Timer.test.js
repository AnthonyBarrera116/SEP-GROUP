import React from 'react';
import renderer from 'react-test-renderer';
import Timer from '../View/Timer.js';

test('renders correctly', () => {
  const timer = renderer.create(<Timer />).toJSON();
  expect(timer).toMatchSnapshot();
});