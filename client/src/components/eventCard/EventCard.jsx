import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EventCard = ({ title, text, date, time, location, showEditButton, id, deleteEvent }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {showEditButton && <Link to={`/edit/${id}`}><button type="button">Edit</button></Link>}
      {showEditButton && <button type="button" onClick={()=>{deleteEvent(id)}}>Delete</button>}
      <p>{text}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>{location}</p>

    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 25rem;
  gap: 1rem;
  background-color: black;
  border-radius: 20px;
  padding: 17px;
  margin:1rem;
  &:hover {
    background-color: blue;
  }
`;
export default EventCard;
