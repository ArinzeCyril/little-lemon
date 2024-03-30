import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('check if header is rendered', () => {
    render(<BookingForm />)
    const heading = screen.getByText(/reservation details/i)
    expect(heading).toBeInTheDocument()
})

// write two more test for initialiseTimes and updateTimes 
// also test that the form can be submitted by the user