import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import BookingForm from './BookingForm'

afterEach(() => cleanup())
test("Adds one", () => {
  // render the App component
  render(<BookingForm />);

  // save the heading in a variable
  const heading = screen.getByTestId("guestNumber");

  // save the button in a variable
  const btn = screen.getByTestId("addOne");

  // click the btn
  fireEvent.click(btn);

  // test assumption
  expect(heading).toHaveTextContent("2");
});

test('guest number render', () => {
    render(<BookingForm />)
    const guest = screen.getByTestId('guestNumber')
    expect(guest).toBeInTheDocument()
})