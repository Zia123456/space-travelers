import React from 'react';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Missions from '../components/missions/Missions';
import missions from '../redux/missions/missions';

const createTestStore = () => {
  const store = configureStore({
    reducer: {
      missions,
    },
  });

  return store;
};
export default createTestStore;

describe('My Connected React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = createTestStore();

    component = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    ).toJSON();
  });

  test('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
