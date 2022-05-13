import styled from 'styled-components';
import { Link } from 'react-router-dom';
import edit_icon from '../../assets/edit_icon.png';
import delete_icon from '../../assets/delete_icon.png';
import location_icon from '../../assets/location_icon.png';
import clock_icon from '../../assets/clock_icon.png';
import calendar_icon from '../../assets/calendar_icon.png';
import { useState, useEffect } from 'react';

const EventCard = ({ showEditButton, eventDetail, deleteEvent }) => {
  const [confirmedText, setConfirmedText] = useState(' ');
  useEffect(() => {
    if (eventDetail.votes.length === 1 || eventDetail.votes.length === 0)
      setConfirmedText('Niemand hat bisher Bock.');
    else if (eventDetail.votes.length === 2)
      setConfirmedText(eventDetail.votes[1].name + ' hat Bock.');
    else if (eventDetail.votes.length === 3)
      setConfirmedText(eventDetail.votes[1].name + ' und ein anderer haben Bock.');
    else
      setConfirmedText(
        eventDetail.votes[1].name + ' ' + (eventDetail.votes.length - 2) + ' andere haben Bock'
      );
  }, [eventDetail.votes]);

  return (
    <Wrapper>
      <EditIcons>
        {showEditButton && (
          <Link to={`/edit/${eventDetail._id}`}>
            <button type="button">
              <IconForEdit src={edit_icon} alt="edit icon" />
            </button>
          </Link>
        )}
        {showEditButton && (
          <button
            type="button"
            onClick={() => {
              deleteEvent(eventDetail._id);
            }}
          >
            <IconForEdit src={delete_icon} alt="delete icon" />
          </button>
        )}
      </EditIcons>
      <h2>{eventDetail.title}</h2>
      <p>{eventDetail.text}</p>
      <p>
        <Icon src={calendar_icon} alt="calendar icon" />
        {eventDetail.date}
      </p>
      <time>
        <Icon src={clock_icon} alt="time icon" />
        {eventDetail.time}
      </time>
      <p>
        <Icon src={location_icon} alt="location icon" />
        {eventDetail.location}
      </p>
      <p>{confirmedText}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20rem;
  gap: 0.8rem;
  background: linear-gradient(45deg, #c02425, #f0cb35);
  border-radius: 2rem;
  padding: 1.5rem;
  margin: 1.5rem;
  color: #fef9ef;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  line-height: 1.5rem;
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
const Icon = styled.img`
  width: 15px;
  margin-right: 10px;
`;
const IconForEdit = styled.img`
  width: 25px;
  margin-right: 10px;
`;
export default EventCard;
