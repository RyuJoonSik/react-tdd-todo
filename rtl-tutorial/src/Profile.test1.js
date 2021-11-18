import React from 'react';
import {render} from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile usernmae="hello" name="react" />);
    expect(utils.container).toMatchSnapshot();
  });

  it('shows the props correctly', () => {
    const utils = render(<Profile username="hello" name="react" />);
    utils.getByText('hello');
    utils.getByText('(react)');
    utils.getByText(/rea/);
  });
});