import React from 'react';
import HighlightFilter from './HighlightFilter';
import renderer from 'react-test-renderer';

test('Highlight matching parts corresponding to filter in value', () => {
  const component = renderer.create(
    <HighlightFilter value="Denis Villeneuve" filter="enis" />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Highlight nothing if not matching', () => {
  const component = renderer.create(
    <HighlightFilter value="Sidney Lumet" filter="enis" />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Highlight multiple match', () => {
  const component = renderer.create(
    <HighlightFilter value="Martin Scorsese" filter="e" />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Highlight case insensitive', () => {
  const component = renderer.create(
    <HighlightFilter value="Martin Scorsese" filter="E" />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

