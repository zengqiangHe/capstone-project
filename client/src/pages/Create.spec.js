import Create from './Create';
import userEvent from 'testing-library/react';
import { render, screen } from '@testing-library/react';

describe('Create', () => {
  it('renders five input fields and a button', () => {
    render(<Create />);

    const titleOfNewEventInput = screen.getByLabelText(/title of new event/i);
    const discriptionOfNewEventTextarea = screen.getByLabelText(/discription of new event/i);
    const locationOfNewEventInput = screen.getByLabelText(/discription of new event/i);
    const dateOfNewEventInput = screen.getByLabelText(/date of new event/i);
    const timeOfNewEventInput = screen.getByLabelText(/time of new event/i);
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

    const titleOfNewEventInput = screen.getByLabelText(/title of new event/i);
    const discriptionOfNewEventTextarea = screen.getByLabelText(/discription of new event/i);
    const locationOfNewEventInput = screen.getByLabelText(/discription of new event/i);
    const dateOfNewEventInput = screen.getByLabelText(/date of new event/i);
    const timeOfNewEventInput = screen.getByLabelText(/time of new event/i);
    const submitButton = screen.getByRole('button', { name: /erstellen/i });

    userEvent.type(titleOfNewEventInput, 'dim sum brunch');
    userEvent.type(discriptionOfNewEventTextarea, 'anyone want to have some dim sums on sunday?');
    userEvent.type(locationOfNewEventInput, 'near main train station in hamburg ');
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

    const titleOfNewEventInput = screen.getByLabelText(/title of new event/i);
    const discriptionOfNewEventTextarea = screen.getByLabelText(/discription of new event/i);
    const locationOfNewEventInput = screen.getByLabelText(/discription of new event/i);
    const dateOfNewEventInput = screen.getByLabelText(/date of new event/i);
    const timeOfNewEventInput = screen.getByLabelText(/time of new event/i);
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
