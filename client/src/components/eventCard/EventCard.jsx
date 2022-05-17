import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import edit_icon from '../../assets/edit_icon.png';
import delete_icon from '../../assets/delete_icon.png';
import location_icon from '../../assets/location_icon.png';
import clock_icon from '../../assets/clock_icon.png';
import calendar_icon from '../../assets/calendar_icon.png';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EventCard = ({ showEditButton, eventDetail, deleteEvent }) => {
  const notify = () => toast("Wow so easy !");

  const [confirmedText, setConfirmedText] = useState(' ');
  useEffect(() => {
    let bockCount = 0;

    eventDetail.votes.forEach((vote) => {
      if (vote.confirm) {
        bockCount++;
      }
    });

    if (bockCount === 0) setConfirmedText('Niemand hat bisher Bock.');
    else if (bockCount === 1) setConfirmedText(eventDetail.votes[1].name + ' hat Bock.');
    else if (bockCount === 2)
      setConfirmedText(eventDetail.votes[1].name + ' und ein anderer haben Bock.');
    else
      setConfirmedText(bockCount + ' und ' + (eventDetail.votes.length - 1) + ' andere haben Bock');
  }, [eventDetail.votes]);

  const url = `http://localhost:3000/voting/${eventDetail._id}`;

  const handleCopyClick = (onClick={notify}) => {
    navigator.clipboard.writeText(url);
    <ToastContainer />
  };

  const navigate = useNavigate();

  const handleChangePage = () => {
    navigate(`/voting/${eventDetail._id}`);
  };

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

      <ConfirmedMessage>{confirmedText}</ConfirmedMessage>
      <ButtonBockWurst onClick={handleChangePage}>zur Abstimmung wechseln</ButtonBockWurst>
      <Button onClick={handleCopyClick}>Link der Abstimmung kopieren</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  gap: 0.7rem;
  background: linear-gradient(45deg, #c02425, #f0cb35);
  border-radius: 2rem;
  padding: 1.5rem;
  margin: 1.5rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  line-height: 1.6rem;
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
const ButtonBockWurst = styled.button`
  display: block;
  width: 100%;
  color: white;
  padding: 15px 15px;
  border: 0;
  border-radius: 15px;
  background: none
  cursor: pointer;
  text-decoration: none;
  background: linear-gradient(45deg, #000046, #1CB5E0);
`;
const Button = styled.button`
  display: block;
  width: 100%;
  color: white;
  padding: 15px 15px;
  border: 0;
  border-radius: 15px;
  background: none
  cursor: pointer;
  text-decoration: none;
  background: linear-gradient(45deg, #44a08d, #134E5E);
`;
const ConfirmedMessage = styled.p`
  display: block;
  text-align: center;
  width: auto;
  color: #333;
  padding: 15px 15px;
  border: 0;
  border-radius: 5px;
  font-size: 1.1rem;
`;
export default EventCard;
