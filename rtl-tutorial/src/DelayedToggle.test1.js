import React from 'react';
import DelayedToggle from './DelayedToggle';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElement,
  waitForDomChange,
  waitForElementToBeRemoved,
} from '@testing-library/react';

describe('<DelayedToggle />', () => {
  it('reveals text when toggle is ON', async() => {
    const {getByText} = render(<DelayedToggle />);
    const toggleButton = getByText('토글');
    fireEvent.click(toggleButton);
    await waitFor(() => getByText('야호!!'), {timeout: 3000});
  });

  it('toggles text ON/OFF', async() => {
    const {getByText, findByText} = render(<DelayedToggle />);
    const toggleButton = getByText('토글');
    fireEvent.click(toggleButton);
    const text = await findByText('ON');
    expect(text).toHaveTextContent('ON');
  })

  // it('changes something when button is clicked', async () => {
  //   const {getByText, container} = render(<DelayedToggle />);
  //   const toggleButton = getByText('토글');
  //   fireEvent.click(toggleButton);
  //   const mutations = await waitForDomChange({ container });
  //   console.log(mutations);
  // });

  it('removes text when toggle is OFF' ,async () => {
    const { container} = render(<DelayedToggle />);
    const toggleButton = screen.getByText('토글');
    fireEvent.click(toggleButton);
    await waitForDomChange({container});
    screen.getByText('야호!!');
    fireEvent.click(toggleButton);
    await waitForElementToBeRemoved(() => screen.getByText('야호!!'));
  })
});