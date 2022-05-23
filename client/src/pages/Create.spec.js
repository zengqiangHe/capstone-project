import Create from './Create';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';


describe('Create', () => {
  it('renders five input fields and a button', () => {
    render(<Create addNewEvent={jest.fn()}/>);

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
    render(<Create addNewEvent={handleCreate}/>);

    const titleOfNewEventInput= screen.getByLabelText(/titel/i);
    const discriptionOfNewEventTextarea  = screen.getByLabelText(/beschreibung/i);
    const locationOfNewEventInput = screen.getByLabelText(/ort/i);
    const dateOfNewEventInput = screen.getByLabelText(/datum/i);
    const timeOfNewEventInput = screen.getByLabelText(/zeit/i);
    const submitButton = screen.getByRole('button', { name: /erstellen/i });

    userEvent.type(titleOfNewEventInput, 'dim sum brunch');
    userEvent.type(discriptionOfNewEventTextarea , 'anyone want to have some dim sums on sunday?');
    userEvent.type(locationOfNewEventInput, 'near main train station in hamburg.');
    userEvent.type(dateOfNewEventInput, '22.06.2022');
    userEvent.type(timeOfNewEventInput, '12:30');
    userEvent.click(submitButton);

    expect(handleCreate).toHaveBeenCalledTimes(1);
    expect(handleCreate).toHaveBeenCalledWith({
      title: 'dim sum brunch',
      text: 'anyone want to have some dim sums on sunday?',
      location: 'near main train station in hamburg.',
      date: '',
      time: '12:30',
    });
  });
  it('does not submit form if one input field is left empty', () => {
    const handleCreate = jest.fn();
    render(<Create addNewEvent={handleCreate}/>);

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
    expect(handleCreate).not.toHaveBeenCalledTimes(0);
  });
});
