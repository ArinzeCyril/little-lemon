import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import GuestDetails from './GuestDetails'

afterEach(() => cleanup())

test('guest number render', () => {
    render(<GuestDetails />)
    const guest = screen.getByTestId('guestNumber')
    expect(guest).toBeInTheDocument()
})