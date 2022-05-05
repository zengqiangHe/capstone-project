import styled from 'styled-components';
import { Link } from 'react-router-dom';
import edit_icon from '../../assets/edit_icon.png';
import delete_icon from '../../assets/delete_icon.png';
import location_icon from '../../assets/location_icon.png';
import clock_icon from '../../assets/clock_icon.png';
import calendar_icon from '../../assets/calendar_icon.png';

const EventCard = ({showEditButton,eventDetail, deleteEvent }) => {
  return (
    <Wrapper>
      <EditIcons>
        {showEditButton && (
          <Link to={`/edit/${eventDetail.id}`}>
            <button type="button">
              <img src={edit_icon} alt="edit icon" width="25" />
            </button>
          </Link>
        )}
        {showEditButton && (
          <button
            type="button"
            onClick={() => {
              deleteEvent(eventDetail.id);
            }}
          >
            <img src={delete_icon} alt="delete icon" width="25" />
          </button>
        )}
      </EditIcons>
      <h2>{eventDetail.titel}</h2>
      <p>{eventDetail.text}</p>
      <p>
        <img src={calendar_icon} alt="calendar icon" width="15" />
        {eventDetail.date}
      </p>
      <p>
        <img src={clock_icon} alt="time icon" width="15" />
        {eventDetail.time}
      </p>
      <p>
        <img src={location_icon} alt="location icon" width="15" />
        {eventDetail.location}
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 22rem;
  gap: 1rem;
  background-color: black;
  border-radius: 2rem;
  padding: 1.5rem;
  margin: 0.5rem;
  &:hover {
    background-color: blue;
  }
`;

const EditIcons = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
  align-items: center;
  button {
    user-select: none;
    border: none;
    background: none;
  }
`;
export default EventCard;
