import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DeletePackages from '../components/DeletePackages';

test('Should render DeletePackages component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <DeletePackages />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
