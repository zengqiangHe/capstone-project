import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EventCard = ({ title, text, date, time, location, showEditButton, id, deleteEvent }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {showEditButton && <Link to={`/edit/${id}`}><button>Edit</button></Link>}
      {showEditButton && <button onClick={()=>{deleteEvent(id)}}>Delete</button>}
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
  height: 15rem;
  gap: 1rem;
  background-color: black;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05);
  padding: 1.5rem;
  margin: 0.2rem 0;
  &:hover {
    background-color: blue;
  }
`;
export default EventCard;
