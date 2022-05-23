import Create from './Create';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

// const newEventCard = {
//   titel: 'dim sum brunch',
//   beschreibung: 'anyone want to have some dim sums on sunday?',
//   ort: 'near main train station in hamburg ',
//   datum: '22.06.2022',
//   zeit:'12:30',
// };

describe('Create', () => {
  it('renders five input fields and a button', () => {
    render(<Create />);

    const titleOfNewEventInput = screen.getByLabelText(/titel/i);
    const discriptionOfNewEventTextarea = screen.getByLabelText(/beschreibung/i);
    const locationOfNewEventInput = screen.getByLabelText(/ort/i);
    const dateOfNewEventInput = screen.getByLabelText(/datum/i);
    const timeOfNewEventInput = screen.getByLabelText(/zeit/i);
    const submitButton = screen.getByRole('button', { name: /erstellen/i });

    expect(titleOfNewEventInput).toBeInTheDocument();
    expect(discriptionOfNewEventTextarea).toBeInTheDocument();
    expect(locationOfNewEventInput).toBeInTheDocument();
    expect(dateOfNewEventInput).toBeInTheDocument();
    expect(timeOfNewEventInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('submits form data when every field is filled out', () => {
    const handleCreate = jest.fn();
    render(<Create onCreateGame={handleCreate} />);

    const titleOfNewEventInput = screen.getByLabelText(/titel/i);
    const discriptionOfNewEventTextarea = screen.getByLabelText(/beschreibung/i);
    const locationOfNewEventInput = screen.getByLabelText(/ort/i);
    const dateOfNewEventInput = screen.getByLabelText(/datum/i);
    const timeOfNewEventInput = screen.getByLabelText(/zeit/i);
    const submitButton = screen.getByRole('button', { name: /erstellen/i });

    userEvent.type(titleOfNewEventInput, 'dim sum brunch');
    userEvent.type(discriptionOfNewEventTextarea, 'anyone want to have some dim sums on sunday?');
    userEvent.type(locationOfNewEventInput, 'near main train station in hamburg.');
    userEvent.type(dateOfNewEventInput, '22.06.2022');
    userEvent.type(timeOfNewEventInput, '12:30');
    userEvent.click(submitButton);

    expect(handleCreate).toHaveBeenCalledTimes(1);
    expect(handleCreate).toHaveBeenCalledWith({
      titleOfNewEventInput: 'dim sum brunch',
      discriptionOfNewEventTextarea: 'anyone want to have some dim sums on sunday?',
      locationOfNewEventInput: 'near main train station in hamburg.',
      dateOfNewEventInput: '22.06.2022',
      timeOfNewEventInput: '12:30',
    });
  });
  it('does not submit form if one input field is left empty', () => {
    const handleCreate = jest.fn();
    render(<Create onCreateEvent={handleCreate} />);

    const titleOfNewEventInput = screen.getByLabelText(/titel/i);
    const discriptionOfNewEventTextarea = screen.getByLabelText(/beschreibung/i);
    const locationOfNewEventInput = screen.getByLabelText(/ort/i);
    const dateOfNewEventInput = screen.getByLabelText(/datum/i);
    const timeOfNewEventInput = screen.getByLabelText(/zeit/i);
    const submitButton = screen.getByRole('button', { name: /erstellen/i });

    userEvent.type(titleOfNewEventInput, ' ');
    userEvent.type(discriptionOfNewEventTextarea, ' ');
    userEvent.type(locationOfNewEventInput, ' ');
    userEvent.type(dateOfNewEventInput, ' ');
    userEvent.type(timeOfNewEventInput, ' ');
    userEvent.click(submitButton);
    expect(handleCreate).not.toHaveBeenCalledTimes(1);
  });
});
